<template>
    <section class="footer">
        <div class="container footer__container flex flex-wrap justify-center items-start bg-red-900">

            <FooterLogo />
            <FooterNavbar />
        </div>
    </section>
</template>
<script>
import FooterLogo from './components/FooterLogo.vue';
import FooterNavbar from './components/FooterNavbar.vue';
export default {
    components: { FooterNavbar, FooterLogo }
}
</script>
<style></style>