---
title: "How to Secure AI Agents: Prompt Injection, Permissions, and Human Approval"
description: "A practical security checklist for production AI agents: least privilege, prompt injection defenses, approvals, logging, and blast-radius control."
seoTitle: "How to Secure AI Agents: A 2026 Engineering Checklist"
seoDescription: "Ten practical controls for securing AI agents in production, from least-privilege tool access and prompt injection defenses to audits and kill switches."
category: "Security"
image: "/images/blog/how-to-secure-ai-agents-2026.png"
date: "2026-10-18"
published: true
author:
  name: "Bret Oreta"
  role: "Admin"
  imageUrl: "https://bretoreta.me/images/opt/avatar-96.webp"
  href: "https://bretoreta.me/about"
tags:
  - ai-security
  - ai-agents
  - prompt-injection
  - least-privilege
  - owasp
---

An AI agent is software with a model in the decision loop. That means the security model has to assume the model can be confused, manipulated, or simply wrong.

Traditional application security still applies. The new part is that natural language becomes an input channel, tool calls become an action surface, and the boundary between data and instructions becomes blurry.

Here is a practical checklist for securing agents that touch real systems.

## 1. Give the agent its own identity

Do not run every agent as an admin service account. Give it a dedicated identity with scoped permissions and a clear owner.

If the agent acts on behalf of a user, carry that user’s authorization context through every tool call. The model should not be able to talk its way into another customer’s record.

## 2. Use least privilege by default

Start with read-only access. Add write tools one at a time. Separate:

- reading a record from editing it,
- drafting a message from sending it,
- preparing a refund from issuing it,
- listing a file from downloading it.

A tool that can do everything is a tool that can ruin everything.

## 3. Treat tool metadata as code

Tool descriptions, schemas, and examples influence model behaviour. Review them like code. Version them. Restrict who can publish or change them.

A malicious or sloppy tool description can cause the agent to call the wrong tool or leak data.

## 4. Constrain inputs and outputs

Validate tool arguments against a schema. Reject unexpected fields. Limit string lengths, file sizes, URLs, and query ranges.

For outputs, scan for secrets, personal data, and unsafe links before displaying or acting on them. Do not assume the model’s output is safe because it looks polite.

## 5. Design for prompt injection

Any content the agent reads can contain instructions. That includes web pages, emails, PDFs, tickets, and database records.

Practical defenses:

- clearly separate trusted instructions from untrusted content,
- allowlist which tools can be called for which tasks,
- require approval for irreversible actions,
- do not let retrieved content change the system policy,
- test with known injection patterns.

There is no prompt that makes a model immune to injection. Architecture does the heavy lifting.

## 6. Put approvals on irreversible actions

A human should confirm payments, refunds, deletions, permission changes, external messages, and anything that creates a legal or financial obligation.

Make the approval screen show exactly what will happen: amount, recipient, record, and consequence. “Approve” should not be a mystery button.

## 7. Isolate secrets and networks

Keep API keys in a secret manager, not in prompts or retrieved documents. Use outbound allowlists for tools that can make network requests. Block metadata endpoints and private network ranges unless explicitly required.

If an agent can call arbitrary URLs, assume it can be used for SSRF.

## 8. Add rate, cost, and loop limits

Agents can retry forever, call expensive models, or fan out into hundreds of tool calls. Set hard caps:

- maximum steps per task,
- token and spend budgets,
- request rate limits,
- execution timeouts,
- maximum records touched.

Fail closed when a limit is reached.

## 9. Log every decision and tool call

Capture trace IDs, user/tenant IDs, model version, prompt version, tool name, arguments, result status, approval decisions, and timing.

Redact secrets and sensitive data. Protect the logs themselves; they often contain the most valuable data in the system.

## 10. Build a kill switch and a fallback

You need a way to disable an agent, revoke its credentials, and route work back to a human without redeploying the whole product.

Test the fallback. If the model provider has an outage, the business process should degrade safely, not disappear.

## A simple security architecture

A production agent should look less like “model plus database” and more like:

```
User → application → policy layer → tool gateway → scoped service → data
                         ↓
                    model provider
                         ↓
                  audit + observability
```

The policy layer decides what the agent is allowed to do. The tool gateway enforces authentication, schema validation, rate limits, and approvals. The model never holds the keys.

## Test like an attacker

Build an evaluation set that includes:

- attempts to read another tenant’s data,
- requests to bypass approval,
- instructions hidden in documents,
- malicious URLs,
- unusual file types,
- prompt leakage attempts,
- repeated retries and runaway loops.

Run these tests before every major change. Track failures, not just happy-path success.

The [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) is a useful baseline. It is not a complete security program, but it covers the common failure modes teams keep rediscovering.

## The bottom line

Secure agents are mostly good software security applied to a new interface. Limit identity, limit tools, validate everything, log the decisions, and keep a human in the loop for consequences.

For protocol-specific concerns, read [MCP Explained](/blog/model-context-protocol-mcp-guide-2026) and [AI Browser Agents in 2026](/blog/ai-browser-agents-security-2026). If you want a security review before launch, [contact me](/contact).
