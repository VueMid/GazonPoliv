<template>
    <header class="header__top hidden md:block bg-darker-green dark:bg-red-700 w-full">
        <div
            class="container md:py-3 md:px-16  md:flex md:flex-row md:justify-between md:items-center lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-12 lg:py-0">
            <div
                class="header__top-main-box md:flex md:flex-col md:justify-center md:items-start md:gap-6 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-20">
                <div
                    class="header__top-boxes md:flex md:flex-row md:justify-center md:items-center md:gap-2.5 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-2.5">
                    <i class="fas fa-map-marker-alt" style="color: #ffffff;"></i>
                    <address
                        class="header__top-address not-italic md:text-[14px] text-white lg:text-[14px] lg:font-normal lg:leading-[45px">
                        Muqumiy
                        178, Toshkent, O'zbekiston
                    </address>
                </div>
                <div
                    class="header__top-boxes md:ml-3 md:flex md:flex-row md:justify-center md:items-center md:gap-2.5  lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-2.5">
                    <i class="fa-regular fa-envelope-open" style="color: #ffffff;"></i>
                    <a class="header__top-email text-white md:text-[14px] lg:text-sm lg:font-normal lg:leading-[45px]"
                        href="mailto:metatechinfo@gmail.com">metatechinfo@gmail.com</a>
                </div>
            </div>
            <div
                class="header__top-boxes md:flex md:flex-row md:justify-center md:items-center md:gap-6 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-7 md:ml-auto md:mr-[30px]">
                <i class="fa-brands fa-facebook-f cursor-pointer" style="color: #ffffff;"></i>
                <i class="fa-brands fa-instagram cursor-pointer" style="color: #ffffff;"></i>
                <i class="fa-brands fa-telegram cursor-pointer" style="color: #ffffff;"></i>
                <i class="fa-brands fa-youtube cursor-pointer" style="color: #ffffff;"></i>
            </div>
            <button @click="toogleDark()" class="hidden md:block">
                <i v-if="isDark" class="fa-solid fa-sun fa-xl cursor-pointer" style="color: #ffffff;"></i>
                <i v-else class="fa-solid fa-moon fa-xl cursor-pointer " style="color: #ffffff;"></i>
            </button>
        </div>
    </header>
</template>
<script setup>
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark()
const toogleDark = useToggle(isDark);

</script>
<style lang="scss">
.header__top.dark {
    color-scheme: dark;
}

.header__top {
    font-family: 'Open Sans';
}

.fa-facebook-f {
    transition: 800ms ease all;
}

.fa-facebook-f:hover {
    transition: 800ms ease all;
    color: #004B1E !important;
}

.fa-instagram {
    transition: 800ms ease all;
}

.fa-instagram:hover {
    transition: 800ms ease all;
    color: #004B1E !important;
}

.fa-telegram {
    transition: 800ms ease all;
}

.fa-telegram:hover {
    transition: 800ms ease all;
    color: #004B1E !important;
}

.fa-youtube {
    transition: 800ms ease all;
}

.fa-youtube:hover {
    transition: 800ms ease all;
    color: #004B1E !important;
}
</style>