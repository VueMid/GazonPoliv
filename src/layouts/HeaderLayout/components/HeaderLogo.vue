<template>
    <div
        class="header__logo flex flex-row justify-between items-center ml-[-25px] md:ml-0 lg:ml-0 px-0 md:px-6 md:flex md:flex-row md:justify-between md:items-center lg:flex lg:justify-between lg:items-center">
        <img class="header__logo-image hidden md:block cursor-pointer duration-100 active:opacity-70"
            src="@/assets/images/logom.png" alt="logo__image">
        <img class="header__logo-image block md:hidden cursor-pointer duration-100 active:opacity-70"
            src="@/assets/images/mobile_logo.png" alt="logo__image">
        <div
            class="header__icons md:flex md:flex-row md:justify-center md:items-center md:gap-20 lg:flex lg:flex-row lg:justify-center lg:items-center gap-[130px] lg:ml-auto">
            <div class="header__boxes">
                <div class="mini-boxes md:flex md:flex-col">
                    <h5 class="header__titles hidden md:block text-[15px] font-semibold leading-[18px] text-dim-black dark:text-white">
                        Sertifikatlangan kompaniya</h5>
                    <p class="header__text hidden md:block mt-1 text-sm font-normal leading-[26px] text-dim-gray dark:text-white">
                        10 dan ziyod sertifikatlar
                    </p>
                </div>
            </div>
            <div class="header__boxes">
                <div class="mini-boxes md:flex md:flex-col">
                    <h5 class="header__titles hidden md:block text-[15px] font-semibold leading-[18px] text-dim-black dark:text-white">2008 yildan
                        beri</h5>
                    <p class="header__text hidden md:block mt-1 text-sm font-normal leading-[26px] text-dim-gray dark:text-white">
                        faoliyat yuritamiz</p>
                </div>
                
                <div class="flex md:hidden items-center justify-center gap-3">
                    <DarkMode />
                    <button @click="$emit('openMenu')">
                        <i v-if="!isOpen" class="text-white fa-solid fa-bars fa-xl"></i>
                        <i v-else class="text-white text-3xl fa-solid fa-times fa-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DarkMode from '../../../MaterialUI/darkMode.vue';

// import DarkMode from '../../../MaterialUI/darkMode.vue';
export default {
    components: { DarkMode },
    props: {
        isOpen: {
            type: Boolean
        }
    }
}
</script>
<style lang="scss">
.header {
    font-family: 'Poppins';
}
</style>