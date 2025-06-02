<template>
  <main class="flex min-h-screen flex-col">
    <div class="relative isolate mx-auto w-full max-w-[1440px]">
      <div class="grid lg:grid-cols-[16px_1fr_16px] gap-6">
        <div class="h-full max-2xl:hidden text-muted/20 border-l border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />

        <!-- Main Content -->
        <div class="mt-10">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-pretty sm:text-5xl">Who is Bret Oreta?</h2>
            <p class="mt-2 text-lg/8 text-muted">Welcome to the story behind the keyboard! I'm a builder at heart, and this space is where I share the journey—failures, wins, and the mindset that keeps me pushing forward.</p>
          </div>
          <div class="mx-auto border-b mt-10 pb-10 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-muted border-dashed pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="space-y-4">
									<Availability />
                  <h5 class="text-3xl font-bold">Introduction</h5>
                  <div class="space-y-4">
                    <p>Hi There 👋 My name is <span class="font-bold text-primary">Bret Oreta</span>. I am a Full-Stack website developer and Automations expert based in <span class="font-bold text-primary">Mombasa, Kenya.</span></p>
                    <p>
                        With over <span class="font-bold text-primary">Six(6) years</span> of hands-on experience in <span class="font-bold text-primary">web development and automation</span>, I specialize in building secure, scalable, well-tested, and user-centric web applications. As a Full-Stack Developer and AI Automations Expert, I thrive on turning complex challenges into elegant, maintainable solutions that drive real-world impact.
                    </p>
                    <p>Have a project in mind or need expert guidance? Let’s talk.</p>
                    <div class="inline-flex gap-3 flex-wrap">
											<UButton color="neutral" variant="subtle" icon="i-lucide-github" to="https://github.com/bretoreta" target="_blank">GitHub</UButton>
											<UButton color="neutral" variant="subtle" icon="i-lucide-linkedin" to="https://linkedin.com/in/bretoreta" target="_blank">LinkedIn</UButton>
											<UButton color="neutral" variant="subtle" to="https://www.tiktok.com/@bretoreta?_t=ZM-8wpz1YEWFh0&_r=1" target="_blank">
												<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/><path d="M10.536 11.008c-.82-.116-2.69.075-3.606 1.77s.007 3.459.584 4.129c.569.627 2.378 1.814 4.297.655c.476-.287 1.069-.502 1.741-2.747l-.078-8.834c-.13.973.945 3.255 4.004 3.525"/></g></svg>
												TikTok
											</UButton>
											<UButton color="neutral" variant="subtle" icon="i-lucide-mail" to="mailto:bretoreta@gmail.com" target="_blank">Email</UButton>
											<UButton color="neutral" variant="subtle" to="https://wa.me/254740821859" target="_blank">
												<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                        </svg>
												WhatsApp
											</UButton>
										</div>
                  </div>
              </div>
              <div class="hidden md:flex justify-center">
                  <NuxtImg format="webp,avif" src="/images/squatting-illustration.svg" class="w-96" alt="Illustration showing a squatting person" />
              </div>
          </div>
					<div class="mt-10 border-b border-accented border-dashed grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <NuxtImg src="/images/succeed-online.png" format="webp,avif" class="mx-auto" alt="Illustration of a developer holding a laptop" />
            </div>
            <div>
              <h2 class="max-w-lg mb-6 text-3xl font-black leading-none tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text sm:text-4xl">
                <span class="relative inline-block text-green-900">
                    <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 -z-10 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                        <defs>
                            <pattern id="07690130-d013-42bc-83f4-90de7ac68f76" x="0" y="0" width=".135" height=".30">
                                <circle cx="1" cy="1" r="0.9"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)" width="52" height="24"></rect>
                    </svg>
                    <span class="relative"></span>
                </span>
                How I Help Businesses Succeed
                <span class="relative px-1">
                    <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-primary/20"></div>
                    <span class="relative inline-block text-primary">Online</span>
                </span>
              </h2>
              <p>Whether you're a startup founder, tech lead, or solo entrepreneur, I help you:</p>
              <ul class="mt-3">
                  <li>⚙️ Automate Repetitive Tasks with AI Agents</li>
                  <li>🌐 Build Modern Web Applications from scratch</li>
                  <li>💼 Streamline Business Operations with smart backends</li>
                  <li>📈 Improve Performance & SEO with fast, scalable stacks</li>
                  <li>🔐 Ensure Security & Stability for peace of mind</li>
                  <li>📲 Deliver Better Customer Experiences with AI chatbots, support tools, and workflow systems</li>
              </ul>
              <div class="mt-6">
                <StartTrialButton />
              </div>
            </div>
					</div>
					<div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div
                class="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden"
              >
                <span class="pointer-events-none text-center text-8xl font-semibold leading-none"> 🌍 </span>

                <OrbitComponent
                  class="items-center justify-center border-none bg-transparent text-xl"
                  :radius="190"
                  :duration="20"
                  :delay="200"
                  path
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="size-12" viewBox="0 0 128 128">
                    <path fill="none" d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" />
                    <path fill="#35495e" d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z" />
                    <path fill="#41b883" d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z" />
                  </svg>
                </OrbitComponent>
                <OrbitComponent
                  class="items-center justify-center border-none bg-transparent text-4xl"
                  :radius="100"
                  :delay="4"
                  path
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="size-12" viewBox="0 0 128 128">
                    <path fill="#f0513f" d="M27.271.11c-.2.078-5.82 3.28-12.487 7.112c-8.078 4.644-12.227 7.09-12.449 7.32c-.19.225-.34.482-.438.76c-.167.564-.179 82.985-.01 83.578c.061.23.26.568.44.754c.436.46 48.664 28.19 49.25 28.324c.272.065.577.054.88-.03c.658-.165 48.76-27.834 49.188-28.286c.175-.195.375-.532.44-.761c.084-.273.115-4.58.115-13.655v-13.26l11.726-6.735c11.056-6.357 11.733-6.755 12.017-7.191l.29-.47V43.287c0-15.548.03-14.673-.585-15.235c-.165-.146-5.798-3.433-12.53-7.31L100.89 13.71h-1.359l-11.963 6.87c-6.586 3.788-12.184 7.027-12.457 7.203c-.272.18-.597.512-.73.753l-.242.417l-.054 13.455l-.048 13.46l-9.879 5.69c-5.434 3.124-9.957 5.71-10.053 5.734c-.175.049-.187-1.232-.187-25.966V15.293l-.26-.447c-.326-.545 1.136.324-13.544-8.114C27.803-.348 28.098-.2 27.27.11zm11.317 10.307c5.15 2.955 9.364 5.4 9.364 5.43c0 .031-4.516 2.641-10.035 5.813l-10.041 5.765l-10.023-5.764c-5.507-3.173-10.02-5.783-10.02-5.814s4.505-2.64 10.013-5.805l9.999-5.752l.69.376q5.036 2.86 10.053 5.751m71.668 13.261c5.422 3.122 9.908 5.702 9.95 5.744c.114.103-19.774 11.535-20.046 11.523c-.272-.008-19.915-11.335-19.907-11.473c.01-.157 19.773-11.527 19.973-11.496c.091.022 4.607 2.59 10.03 5.702M16.3 25.328l9.558 5.503l.055 27.247l.05 27.252l.233.368c.122.194.352.459.52.581c.158.115 5.477 3.146 11.818 6.724l11.52 6.506v11.527c0 6.326-.043 11.516-.097 11.516c-.041 0-10-5.699-22.124-12.676L5.793 97.201l-.03-38.966l-.019-38.954l.49.271c.283.15 4.807 2.748 10.065 5.775zm33.754 19.18v25.109l-.387.253c-.525.332-19.667 11.335-19.732 11.335c-.03 0-.054-11.336-.054-25.193l.012-25.182l10-5.752c5.499-3.165 10.034-5.733 10.088-5.714c.039.024.073 11.34.073 25.144m38.15-5.775l10.023 5.763V55.92c0 10.838-.011 11.42-.176 11.357c-.107-.041-4.642-2.64-10.083-5.774l-9.91-5.69v-11.42c0-6.287.032-11.424.062-11.424c.043 0 4.577 2.592 10.084 5.764m34.164 5.587c0 6.254-.042 11.412-.084 11.462c-.072.115-19.896 11.538-20.022 11.538c-.031 0-.062-5.135-.062-11.423v-11.42l10-5.756c5.507-3.16 10.042-5.752 10.084-5.752c.053 0 .084 5.105.084 11.351M95.993 70.933L52.005 96.04L32.056 84.693S76 59.277 76.176 59.343zm2.215 14.827l-.034 11.442l-22.028 12.676c-12.12 6.976-22.082 12.675-22.132 12.675c-.053 0-.095-4.658-.095-11.516V99.51l22.08-12.592c12.132-6.923 22.101-12.59 22.154-12.602c.043 0 .062 5.148.054 11.443z" />
                  </svg>
                </OrbitComponent>
                <OrbitComponent
                  class="items-center justify-center border-none bg-transparent text-4xl"
                  :radius="250"
                  :delay="4"
                  :path="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="size-12" viewBox="0 0 128 128">
                    <path fill="#5a45ff" fill-rule="evenodd" d="M0 64c0 51.617 12.383 64 64 64s64-12.383 64-64S115.617 0 64 0S0 12.383 0 64m25.808 13.295l20.075-45.621C49.27 23.984 55.788 19.813 64 19.813s14.729 4.17 18.118 11.86l20.074 45.622c.912 2.216 1.694 5.084 1.694 7.56c0 11.34-7.951 19.291-19.292 19.291c-3.862 0-6.93-.985-10.035-1.983c-3.182-1.022-6.403-2.057-10.559-2.057c-4.108 0-7.408 1.044-10.653 2.071c-3.138.993-6.225 1.969-9.941 1.969c-11.34 0-19.292-7.95-19.292-19.29c0-2.477.783-5.345 1.695-7.561zM64 39.625l-19.813 44.84c5.866-2.738 12.644-4.041 19.813-4.041c6.909 0 13.947 1.303 19.552 4.04z" clip-rule="evenodd" />
                  </svg>
                </OrbitComponent>
              </div>
            </div>
            <div class="space-y-3">
              <h2 class="max-w-lg mb-6 text-3xl font-black leading-none tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text sm:text-4xl">
                <span class="relative inline-block text-green-900">
                    <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 -z-10 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                        <defs>
                            <pattern id="07690130-d013-42bc-83f4-90de7ac68f76" x="0" y="0" width=".135" height=".30">
                                <circle cx="1" cy="1" r="0.9"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)" width="52" height="24"></rect>
                    </svg>
                    <span class="relative"></span>
                </span>
                My go-to tech stack, for rapid
                <span class="relative px-1">
                    <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-primary/20"></div>
                    <span class="relative inline-block text-primary">Development</span>
                </span>
              </h2>
              <p>I work fluently with VueJS + Laravel for full-stack application development and AdonisJS when building high-performance APIs. This powerful combination allows me to create modern, responsive, and lightning-fast applications that are also easy to maintain and expand.</p>
              <p>My approach to development is built on a foundation of:</p>
              <ul>
                  <li>✅ Clean code architecture</li>
                  <li>✅ Accessibility best practices</li>
                  <li>✅ RESTful and GraphQL API integration</li>
                  <li>✅ Robust security and testing</li>
                  <li>✅ Optimized performance and UX</li>
              </ul>
            </div>
					</div>
          <div class="bg-black mt-20 border-accented border rounded-t-md">
            <Footer />
          </div>
        </div>

        <div class="h-full max-2xl:hidden text-muted/20 border-r border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
      </div>
    </div>
  </main>
</template>
