<template>
    <section class="contact">
        <div
            class="container contact__container w-full flex flex-wrap justify-center items-center gap-10 md:flex md:flex-row md:justify-between md:items-center">
            <form
                class="w-full md:w-[50%] bg-dim-black md:flex md:flex-col md:justify-center md:items-start mx-0 px-[30px] py-[52px] md:px-[30px] md:py-[52px]">
                <div class="contact w-full border-dim-gray/30">
                    <h2 class="contact__title font-bold text-[25px] md:text-[32px] lg:text-[32px] lg:font-bold text-white">
                        Qayta <span class="text-darker-green">aloqa</span></h2>
                    <p class="contact__text text-white/80 md:w-[240px] lg:w-[326px] md:mt-5 lg:mt-3">
                        Ma'lumotlaringizni qoldiring va biz siz bilan bog'lanamiz
                    </p>
                </div>
                <div
                    class="contact w-full border-b-2 border-dim-gray/30 pt-[25px] pb-[10px] md:pt-[35px] md:pb-[10px] lg:pt-[35px] lg:pb-[15px]">
                    <input class="contact__input md:w-[290px] text-white md:text-[15px] focus:text-white" type="text"
                        placeholder="Ismingizni kiriting" name="username" id="contact__username" autocomplete="off"
                        required>
                </div>
                <div
                    class="contact w-full border-b-2 border-dim-gray/30 pt-[25px] pb-[10px] md:pt-[35px] md:pb-[10px] lg:pt-[35px] lg:pb-[15px]">
                    <input class="contact__input md:w-[290px] text-white md:text-[15px] focus:text-white" type="tel"
                        placeholder="Telefon raqamingiz" name="number" id="contact__number" autocomplete="off" required>
                </div>
                <div
                    class="contact w-full border-b-2 border-dim-gray/30 pt-[25px] pb-[10px] md:pt-[35px] md:pb-[10px] lg:pt-[35px] lg:pb-[15px]">
                    <input class="contact__input md:w-[290px] text-white md:text-[15px] focus:text-white" type="text"
                        placeholder="Xabaringiz" name="message" id="contact__message" autocomplete="off" required>
                </div>
                <button
                    class="contact__button active:bg-white active:text-darker-green transition-all duration-75 bg-darker-green text-white py-3 px-6 mt-6">Yuborish</button>
            </form>
            <swiper :pagination="true" :modules="modules"
                class="cursor-grab w-[350px] h-[340px] md:w-[304px] md:h-[420px] lg:w-[400px] lg:h-[350px]">
                <swiper-slide v-for="item in 3" :key="item">
                    <div class="contact__right flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-start">

                        <h3
                            class="contact__title text-[25px] md:text-[30px] md:pb-[10px] lg:text-[30px] text-dim-black  font-bold">
                            Mijoz fikri
                        </h3>
                        <p
                            class="contact__text text-center italic text-[15px] w-[250px] md:text-[18px] md:w-[300px] lg:w-[350px] text-dim-gray">
                            Bu yerdan maysa buyurtma qilingan. Sizning 4 gektar yeringizni etishtirish istagi katta
                            edi. Men kompaniyaning ishidan qoniqish hosil qildim. Barcha daraxtlar ehtiyotkorlik
                            bilan chetlab o'tildi, qirralari bezatilgan, bo'g'inlar deyarli sezilmadi, avtomatik
                            sug'orish o'rnatildi. Menga boshida e'lon qilingan narx o'zgarishsiz qolgani juda yoqdi!
                        </p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TheButton from '../../../MaterialUI/TheButton.vue';
export default {
    components: {
        TheButton, TheButton, TheButton, Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Pagination],
        }
    }
}
</script>
<style></style>