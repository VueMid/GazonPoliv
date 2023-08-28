<template>
    <section class="footer w-full">
        <div
            class="container footer__container px-3 flex flex-wrap flex-col justify-center items-start gap-10 py-16 md:flex md:flex-col md:justify-center md:items-center md:gap-10 lg:flex lg:flex-row lg:justify-center lg:items-start lg:py-0 lg:pt-20 lg:pb-5">
            <FooterLogo />
            <FooterNavbar />
            <FooterCopy />
        </div>
    </section>
</template>
<script>
import FooterLogo from './components/FooterLogo.vue';
import FooterNavbar from './components/FooterNavbar.vue';
import FooterCopy from './components/FooterCopy.vue';
export default {
    components: { FooterNavbar, FooterLogo, FooterCopy }
}
</script>
<style lang="scss">
.footer {
    background-image: url('@/assets/images/footer-pattern.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>