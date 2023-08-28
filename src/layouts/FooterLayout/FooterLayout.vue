<template>
    <section class="footer w-full">
        <div
            class="container footer__container px-3 flex flex-wrap flex-col justify-center items-start gap-10 py-16 md:flex md:flex-col md:justify-center md:items-center md:gap-10 lg:flex lg:flex-row lg:justify-center lg:items-start lg:py-0 lg:pt-20 lg:pb-5">
            <a class="footer__cursor block lg:hidden lg:mx-0" href="#">
                <i class="fa-solid fa-chevron-up fa-lg" style="color: #ffffff;"></i>
            </a>
            <a class="footer__scrollup hidden lg:block" href="#" id="scroll-up">
                <i class="fa-solid fa-arrow-up fa-beat scroll__icon" style="color: #ffffff;"></i>
            </a>
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
    components: { FooterNavbar, FooterLogo, FooterCopy },
    mounted() {
        window.addEventListener('scroll', () => {
            const scrollUp = document.getElementById('scroll-up');
            if (scrollY > 2000) {
                scrollUp.classList.add('show-scroll');
            } else {
                scrollUp.classList.remove('show-scroll');
            }
        })
    }
}
</script>
<style lang="scss">
.footer {
    background-image: url('@/assets/images/footer-pattern.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    ::after {
        z-index: -1;
        position: absolute;
        content: '';
        display: inline-block;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: -25px;
        width: 210px;
        height: 200px;
        background-image: none;
        background-repeat: no-repeat;
    }
}

@media(max-width: 820px) {
    .footer {
        background-image: url('@/assets/images/footer-pattern.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        ::after {
            z-index: -1;
            position: absolute;
            content: '';
            display: inline-block;
            left: 0;
            right: 0;
            margin: 0 auto;
            top: -25px;
            width: 210px;
            height: 200px;
            background-image: url('@/assets/images/back-to-top.png');
            background-repeat: no-repeat;
        }

        &__cursor {
            z-index: 10;
            margin: 0 auto;
            margin-top: -80px;
        }
    }
}

@media(max-width: 700px) {
    .footer {
        background-image: url('@/assets/images/footer-pattern.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        ::after {
            z-index: -1;
            position: absolute;
            content: '';
            display: inline-block;
            left: 0;
            right: 0;
            margin: 0 auto;
            top: -25px;
            width: 210px;
            height: 200px;
            background-image: url('@/assets/images/back-to-top.png');
            background-repeat: no-repeat;
        }

        &__cursor {
            z-index: 10;
            margin: 0 auto;
            margin-top: -85px;
        }
    }
}
</style>