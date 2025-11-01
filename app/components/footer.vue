<template>
    <footer class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <Logo />
          <div class="mt-6 lg:max-w-sm">
            <p class="text-sm">
              Specializing in AI agent development, cloud orchestration, and high-availability systems, I bridge the gap between theoretical potential and production-ready reality.
            </p>
            <p class="mt-4 text-sm">
              Every deployment is optimized for real-world impact, whether automating complex tasks or managing petabyte-scale data ecosystems.
            </p>
          </div>
        </div>
        <div class="space-y-2 text-sm">
          <p class="text-base font-bold tracking-wide">Contacts</p>
          <div class="flex">
            <p class="mr-1 text-muted">Phone:</p>
            <a href="tel:+254740821859" aria-label="Our phone" title="Our phone" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+254 740 821 859</a>
          </div>
          <div class="flex">
            <p class="mr-1 text-muted">Email:</p>
            <a href="mailto:bretoreta@gmail.com" aria-label="Our email" title="Our email" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">bretoreta@gmail.com</a>
          </div>
          <div class="flex">
            <p class="mr-1 text-muted">Address:</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              Mombasa, KENYA
            </a>
          </div>
        </div>
        <div>
          <!-- <span class="text-base font-bold tracking-wide">Social</span>
          <div class="flex items-center mt-1 space-x-3">
            <a href="/" class="text-slate-300 transition-colors duration-300 hover:text-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                <path
                  d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                ></path>
              </svg>
            </a>
            <a href="/" class="text-slate-300 transition-colors duration-300 hover:text-primary">
              <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path
                  d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                ></path>
              </svg>
            </a>
            <a href="/" class="text-slate-300 transition-colors duration-300 hover:text-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                <path
                  d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                ></path>
              </svg>
            </a>
            <a href="/" class="text-slate-300 transition-colors duration-300 hover:text-primary">
              <svg class="h-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.358 2.145a8.2 8.2 0 0 0-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.2 2.2 0 0 0-.51-.053 1.3 1.3 0 0 0-.232.028l-.01.002-.004.002h-.003l.137.481-.137-.48a.5.5 0 0 0-.32.276 3.12 3.12 0 0 0-.159 2.101A3.35 3.35 0 0 0 2 5.93c0 1.553.458 2.597 1.239 3.268.547.47 1.211.72 1.877.863a2.3 2.3 0 0 0-.116.958v.598c-.407.085-.689.058-.89-.008-.251-.083-.444-.25-.629-.49a5 5 0 0 1-.27-.402l-.057-.093a9 9 0 0 0-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127-.254.968.484.127c.08.02.184.095.355.346a7 7 0 0 1 .19.302l.068.11c.094.152.202.32.327.484.253.33.598.663 1.11.832.35.116.748.144 1.202.074V14.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.562c0-.316-.014-.605-.103-.874.663-.14 1.322-.39 1.866-.86.78-.676 1.237-1.73 1.237-3.292v-.001a3.35 3.35 0 0 0-.768-2.125 3.12 3.12 0 0 0-.159-2.1.5.5 0 0 0-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001-.004-.002-.009-.002-.075-.015a1 1 0 0 0-.158-.013 2.2 2.2 0 0 0-.51.053c-.391.084-.93.283-1.636.716" fill="currentColor"/></svg>
            </a>
          </div> -->
          <p class="mt-4 text-sm text-muted">
            Architecting solutions where uptime meets innovation. Specialized in distributed systems, AI/ML pipelines, and server environments engineered for 99.99% reliability without compromising scalability.
          </p>
        </div>
      </div>
      <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-accented lg:flex-row">
        <p class="text-sm text-muted">
          © Copyright 2025 Bret Oreta. All rights reserved.
        </p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="/" class="text-sm text-muted transition-colors duration-300 hover:text-white">F.A.Q</a>
          </li>
          <li>
            <a href="/" class="text-sm text-muted transition-colors duration-300 hover:text-white">Privacy Policy</a>
          </li>
          <li>
            <a href="/" class="text-sm text-muted transition-colors duration-300 hover:text-white">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  </template>