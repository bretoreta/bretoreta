---
title: "Laravel + AI in 2026: A Practical Architecture for Adding Agents to Existing Apps"
description: "How to add AI agents to an existing Laravel application with queues, HTTP clients, events, vector search, and guardrails — without rebuilding the stack."
seoTitle: "Laravel AI Agents: A 2026 Architecture Guide"
seoDescription: "A practical Laravel AI architecture: tool layers, queues, streaming, vector search, permissions, evaluation and production guardrails for existing apps."
category: "Laravel"
image: "/images/blog/laravel-ai-agents-architecture-2026.png"
date: "2026-10-10"
published: true
author:
  name: "Bret Oreta"
  role: "Admin"
  imageUrl: "https://bretoreta.me/images/opt/avatar-96.webp"
  href: "https://bretoreta.me/about"
tags:
  - laravel
  - ai-agents
  - php
  - architecture
  - queues
  - vector-search
---

You do not need to rewrite your Laravel application to add AI. You need a clean boundary between the model and the parts of your system that already work.

Laravel is well suited to this. It already has [queues](https://laravel.com/docs/queues), events, HTTP clients, policies, validation, scheduling, and a mature testing story. The AI layer can be another application service, not a second application.

## The architecture in one picture

```text
HTTP / API
   ↓
Controller → Agent service → Tool gateway → existing domain services
                 ↓                ↓
             model provider    policies + validation
                 ↓
          conversations, tool calls, usage, evals
                 ↓
          queue / Horizon / Redis
```

The model never talks directly to the database. It asks for tools. The tool gateway checks the user, the tenant, the input, and the permission before calling the domain service.

## Start with a use case, not a framework

Pick one workflow with a clear outcome:

- summarize an inbound support ticket and route it,
- answer questions from approved documentation,
- qualify a lead and draft a follow-up,
- extract structured data from an uploaded document,
- generate a first-pass report from existing metrics.

Then design the tools for that workflow. Avoid building a universal agent platform before you have one reliable use case.

## The tool layer

A tool is a small, well-named capability. It should be:

- validated,
- authorized,
- logged,
- idempotent where possible,
- narrow enough to test.

For example:

```php
final class GetCustomerOrders
{
    public function __construct(private CustomerRepository $customers) {}

    public function handle(int $customerId, int $limit = 5): array
    {
        $customer = $this->customers->findOrFail($customerId);
        Gate::authorize('view', $customer);

        return $customer->orders()
            ->latest()
            ->limit(min($limit, 10))
            ->get(['id', 'status', 'total', 'created_at'])
            ->toArray();
    }
}
```

The agent receives only the data it needs. It does not receive a database connection.

## Queues for long-running work

Model calls can be slow. Do not hold a web request open for a multi-step agent run unless the UX explicitly supports streaming.

Use queued jobs for:

- document ingestion and embedding,
- agent runs that take more than a few seconds,
- provider retries,
- evaluation batches,
- report generation.

Use broadcasting or server-sent events to stream progress back to the UI. Laravel Echo and a small event stream are often enough.

## Streaming the response

For chat-style interfaces, stream tokens or status updates. A user should see that the system is working within a second, even if the full answer takes longer.

A simple approach:

1. Create an agent run record.
2. Dispatch a job.
3. Stream status and output chunks.
4. Persist the final message and tool calls.
5. Emit a completion event.

If streaming is not possible, return a run ID and let the frontend poll a status endpoint.

## Vector search without a new platform

For retrieval-augmented generation, you need:

- a chunking strategy,
- embeddings,
- a vector store,
- metadata filters,
- access control.

Options include PostgreSQL with pgvector, a managed vector database, or a search service. Start with the smallest option that fits your existing infrastructure.

Store the source document, chunk text, embedding, tenant ID, and access metadata. Filter by tenant and permission before the model ever sees the chunk.

## Permissions and tenancy

Every tool call must carry the authenticated user and tenant context. Do not rely on the model to provide a tenant ID from the prompt.

Use Laravel policies and scoped queries. If the current user cannot open the record in the UI, the agent cannot open it either.

## Prompt injection and data boundaries

Retrieved documents are untrusted input. A PDF, email, or web page can contain instructions. Keep system instructions separate, validate tool arguments, and require approval for writes.

For a fuller checklist, read [How to Secure AI Agents](/blog/how-to-secure-ai-agents-2026).

## Testing and evaluation

You need three layers of tests:

1. **Unit tests** for tools and authorization.
2. **Integration tests** with a fake model provider.
3. **Evaluation cases** with real prompts and expected outcomes.

Laravel’s HTTP fake and queue fake make the first two straightforward. For evaluations, store a versioned set of cases and run them when prompts, models, or tools change.

Measure:

- task completion,
- tool-call accuracy,
- unauthorized access attempts,
- latency,
- cost per run,
- human correction rate.

## Deployment and operations

Use Horizon or your queue of choice. Monitor queue depth, failed jobs, provider latency, token usage, and cost.

Add a kill switch: a config flag that disables agent runs or specific tools without a deploy.

Log enough to reconstruct a run, but redact secrets and personal data. Retention should be intentional.

## When to use a package

A package can help with model clients, provider abstraction, or streaming. Use it if it reduces boilerplate without hiding authorization or tool execution.

Do not let a package own your permission model. Your application should still decide what a user can see and do.

## The bottom line

Laravel already provides the architecture an AI feature needs: validation, policies, queues, events, and testing. The model should be a dependency inside that architecture, not a second system beside it.

Start with one workflow, build narrow tools, enforce permissions outside the model, and evaluate the result like any other production feature.

If you are adding AI to an existing Laravel app, [book a free call](/contact) or [see the kind of systems I build](/project). For the storage layer, read [Cloudflare R2 with Laravel](/blog/how-to-use-cloudflare-r2-with-laravel-storage).
