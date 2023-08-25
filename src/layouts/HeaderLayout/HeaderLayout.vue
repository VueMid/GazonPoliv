<template>
    <header class="header bg-darker-green md:bg-white dark:bg-dim-black relative z-[9999]">
        <div class="container py-[11px] md:pt-[34px] lg:px-6 lg:pt-[34px]">
            <HeaderLogo @openMenu='toggleMenu' :isOpen="isOpen" />
            <HeaderNavbar />
        </div>
    </header>
    <Transition name="menu">
        <HeaderHidden class="absolute z-[999]" v-if="isOpen" @closeMenu="toggleMenu" />
    </Transition>
</template>
<script>
import HeaderLogo from './components/HeaderLogo.vue';
import HeaderHidden from './components/HeaderHidden.vue';
import HeaderNavbar from './components/HeaderNavbar.vue';
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        }
    },
    components: { HeaderLogo, HeaderHidden, HeaderNavbar },
}
</script>
<style>
.menu-enter-active,
.menu-leave-active {
    transition: 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
    transform: translate(-100%);
    opacity: 0;
}
</style>