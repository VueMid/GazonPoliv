<template>
    <header class="header bg-darker-green md:bg-white dark:bg-dim-black fixed md:absolute w-full z-[9999]">
        <div class="container py-[11px] md:pt-[34px] lg:px-6 lg:pt-[34px]">
            <HeaderLogo @openMenu='toggleMenu' :isOpen="isOpen" />
            <HeaderNavbar v-if="isScrolled" />
        </div>
    </header>
    <Transition name="menu">
        <HeaderHidden class="fixed md:absolute z-[999]" v-if="isOpen" @closeMenu="toggleMenu" />
    </Transition>
</template>
<script>
import HeaderLogo from './components/HeaderLogo.vue';
import HeaderHidden from './components/HeaderHidden.vue';
import HeaderNavbar from './components/HeaderNavbar.vue';
export default {
    data() {
        return {
            isOpen: false,
            isScrolled: true,
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
    },
    components: { HeaderLogo, HeaderHidden, HeaderNavbar, },
    mounted() {
        const winWidth = window.innerWidth
        window.addEventListener("scroll", () => {
            window.pageYOffset > 0
            ? (this.isScrolled = false, this.isOpen = false)
            : (this.isScrolled = true);
            if (winWidth < 768 && this.isScrolled == false) {
                this.isScrolled = true
            }
        })
    }
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