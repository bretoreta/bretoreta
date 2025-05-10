<template>
    <div class="flex items-center justify-between py-4 md:py-2 px-4 sm:px-20 md:px-40 xl:px-72 border-b border-default sticky top-0 z-40 bg-accented/20 backdrop-blur-sm">
        <Logo />
        <div class="hidden lg:block">
            <NavigationMenu />
        </div>
        <div class="hidden lg:block srhink-0">
            <SideMenuOptions />
        </div>
    </div>
    <div class="mx-4 sm:mx-20 md:mx-40 xl:mx-72">
        <slot />
    </div>
</template>