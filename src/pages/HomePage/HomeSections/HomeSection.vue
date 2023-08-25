<template>
    <section class="home">
        <swiper :effect="'fade'" :loop="true" :slides-per-view="1" :centeredSlides="true" :navigation="{
            prevEl: '.fa-chevron-left',
            nextEl: '.fa-chevron-right',
        }" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
}" :modules="modules" class="relative">
            <swiper-slide class="relative">
                <img class="image w-full h-[530px] md:h-[705px] object-cover slider"
                    src="@/assets/images/banner_slider_2.png" alt="#">
                <div
                    class="text-content w-full flex flex-col justify-center items-center py-[90px] px-[35px] top-0 left-0 absolute md:flex md:flex-col md:justify-center md:items-start md:left-[12%] md:top-[18%] lg:left-[10%] lg:top-[15%] z-10 text-white">
                    <h2
                        class="title w-[300px] text-[35px] font-bold text-center leading-10 md:w-[600px] md:text-start md:text-[42px] md:font-bold lg:w-[600px] lg:text-[72px] lg:font-bold lg:leading-[60px]">
                        Parvarish qilish
                        xizmati
                    </h2>
                    <p class="lg:mt-7 text mt-4 leading-6 text-center w-[300px] md:text-[18px] md:w-[540px]">
                        Sifatli va hamyonbop gazon, landshaft, parvarishlash, sug'orish tizimi xizmatlari
                    </p>
                    <TheButton class="mt-10">Aloqa</TheButton>
                </div>
            </swiper-slide>
            <swiper-slide class="relative">
                <img class="image w-full h-[530px] md:h-[705px] object-cover slider mx-auto" src="@/assets/images/plant.png"
                    alt="#">
                <div
                    class="text-content leading-10 w-full sm:w-auto mx-auto flex flex-col justify-center items-center absolute py-[85px] px-[0px] top-0 left-0 md:top-[18%] md:left-[13%] lg:top-[15%] z-10 text-white lg:left-[18%] ">
                    <h2
                        class="title  w-[300px] text-[35px] font-bold leading-10 text-center md:w-[600px] md:text-center md:text-[42px] md:font-bold lg:w-[886px] lg:text-[72px] lg:font-bold lg:leading-[60px]">
                        Parvarish
                        qilish xizmati
                    </h2>
                    <p class="text mt-4 leading-6 text-center w-[300px] md:mt-7 lg:mt-7 md:w-[600px] md:text-center">
                        Sifatli va hamyonbop gazon, landsha2t, parvarishlash, sug'orish tizimi xizmatlari
                    </p>
                    <TheButton class="mt-10">Aloqa</TheButton>
                </div>
            </swiper-slide>
            <swiper-slide class="relative">
                <img class="image w-full h-[530px] md:h-[705px] object-cover slider  mx-auto" src="@/assets/images/uy.png"
                    alt="#">
                <div
                    class="text-content w-full flex flex-col justify-center items-center px-[35px] py-[80px] top-0 right-0 absolute md:flex md:flex-col md:justify-center md:items-end md:right-[10%] md:top-[18%] lg:right-[10%] lg:top-[15%] z-10 text-white lg:flex lg:flex-col lg:items-end">
                    <h2
                        class="title w-[300px] leading-10 text-[35px] font-bold text-center md:w-[600px] md:text-[42px] md:font-bold md:text-end lg:text-end lg:w-[600px] lg:text-[72px] lg:font-bold lg:leading-[60px]">
                        Parvarish
                        qilish xizmati
                    </h2>
                    <p class="text mt-4 leading-6 text-center w-[300px] lg:mt-7 md:mt-7 md:w-[600px] md:text-end">
                        Sifatli va hamyonbop gazon, landshaft, parvarishlash, sug'orish tizimi xizmatlari
                    </p>
                    <TheButton class="mt-10">Aloqa</TheButton>
                </div>
            </swiper-slide>
            <div class="arrows hidden absolute left-0 top-[46%] z-20 px-10 lg:flex items-center justify-between w-full">
                <i
                    class="w-14 h-14 cursor-pointer flex items-center justify-center text-white bg-slate-100/20 text-xl fa-solid fa-chevron-left">
                </i>
                <i
                    class="w-14 h-14 cursor-pointer flex items-center justify-center text-white bg-slate-100/20 text-xl fa-solid fa-chevron-right">
                </i>
            </div>
        </swiper>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import TheButton from '../../../MaterialUI/TheButton.vue';
export default {
    components: {
        Swiper,
        SwiperSlide,
        TheButton,
    },
    data() {
        return {
            modules: [Autoplay, Pagination, Navigation, EffectFade],
            isModalOpened: false,
        }
    },
};
</script>
<style scoped>
.swiper-slide::after {
    cursor: grab;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
}

.title {
    font-family: 'Poppins';
}
</style>