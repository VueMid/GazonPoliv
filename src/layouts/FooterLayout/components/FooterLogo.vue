<template>
    <div class="footer__wrapper flex flex-wrap justify-start items-center gap-7 md:flex
    md:flex-col md:justify-center md:items-start md:gap-7 md:mr-auto">
        <div class="footer__logo">
            <img class="header__logo-image hidden md:block cursor-pointer duration-100 active:opacity-70"
                src="@/assets/images/logom.png" alt="logo__image">
            <img class="header__logo-image block md:hidden cursor-pointer duration-100 active:opacity-70"
                src="@/assets/images/mobile_logo.png" alt="logo__image">
            <p class="footer__main-title w-[312px] text-white/60 text-[14px] mt-7">
                Maysa bo'lib o'samiz, osmonlarni quchamiz.
            </p>
        </div>
        <div class="header__top-boxes flex flex-row justify-center items-center gap-5">
            <i class="fa-brands fa-facebook-f cursor-pointer" style="color: #ffffff;"></i>
            <i class="fa-brands fa-instagram cursor-pointer" style="color: #ffffff;"></i>
            <i class="fa-brands fa-telegram cursor-pointer" style="color: #ffffff;"></i>
            <i class="fa-brands fa-youtube cursor-pointer" style="color: #ffffff;"></i>
        </div>
    </div>
</template>
<style>
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