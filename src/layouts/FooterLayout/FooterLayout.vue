<template>
    <section class="footer w-full">
        <div
            class="container footer__container flex flex-wrap justify-center items-start gap-10 py-16 md:flex md:flex-col md:justify-center md:items-center md:gap-10 lg:flex lg:flex-row lg:justify-center lg:items-start lg:py-0 lg:pt-20 lg:pb-5">
            <FooterLogo />
            <FooterNavbar />
            <FooterCopy />
            <a href="#" class="relative flex flex-col justify-center items-center bottom-[1143px] md:bottom-[630px]  lg:bottom-[465px]">
                <i class="fa-solid fa-chevron-up fa-2xl" style="color: #008435;"></i>
            </a>
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
    position: relative;

    &::before {
        content: '';
        top: -24px;
        left: 0;
        right: 0;
        margin: 0 auto;
        position: absolute;
        display: inline-block;
        width: 200px;
        height: 30px;
        background-image: url('../../assets/images/back-to-top.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
}
</style>