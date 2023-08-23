<template>
    <section class="service">
        <div class="container service__container flex flex-col justify-center items-center py-16">
            <div class="service__top-box flex flex-col justify-center items-center">
                <p class="service__text text-[17px] text-darker-green font-bold">
                    Biz taqdim etayotgan xizmat
                </p>
                <h3 class="service__title text-[30px] font-bold mt-1 text-gray-900">
                    Bizning xizmatlar
                </h3>
            </div>
            <div class="service__bottom-box flex flex-col justify-center items-center gap-8">
                <div class="service__boxes flex flex-col justify-center items-center">
                    <img class="service__images" src="@/assets/images/rulloniy.png" alt="">
                    <div class="service__mini-boxes flex flex-col justify-center items-center mt-12">
                        <i class="icon-Our_service_1"></i>
                        <h5 class="service__bottom-titles text-gray-800 text-[25px] font-bold">
                            Rulloniy gazon
                        </h5>
                        <p class="service__bottom-texts text-center text-[15px] mt-3 w-[350px] text-dim-gray">
                            Bu sabzavot yoki sun'iy tolalardan yasalgan bo'shashgan tuzilishdagi maxsus to'shaklarga
                            urug'larni ekish orqali o'stirilgan maysazor o'tlari.
                        </p>
                    </div>
                </div>
                <div class="service__boxes flex flex-col justify-center items-center">
                    <img class="service__images" src="@/assets/images/polivv.jpg" alt="">
                    <div class="service__mini-boxes flex flex-col justify-center items-center mt-12">
                        <h5 class="service__bottom-titles text-gray-800 text-[25px] font-bold">
                            Poliv sistemasi
                        </h5>
                        <p class="service__bottom-texts text-center text-[15px] mt-3 w-[350px] text-dim-gray">
                            Ushbu tizimning mohiyati o'simliklarning ildiz tizimiga sekin suv yetkazib berishdir. Buning
                            yordamida tuproqda optimal daraja saqlanadi.
                        </p>
                    </div>
                </div>
                <div class="service__boxes flex flex-col justify-center items-center">
                    <img class="service__images" src="@/assets/images/service_style_3.jpg" alt="">
                    <div class="service__mini-boxes flex flex-col justify-center items-center mt-12">
                        <h5 class="service__bottom-titles text-gray-800 text-[25px] font-bold">
                            Parvarishlash
                        </h5>
                        <p class="service__bottom-texts text-center text-[15px] mt-3 w-[350px] text-dim-gray">
                            Chimlarning holatiga g'amxo'rlik qilish yaxshi ishlangan va eng asosiy mezoni hisoblanadi.
                        </p>
                    </div>
                </div>
                <div class="service__boxes flex flex-col justify-center items-center">
                    <img class="service__images" src="@/assets/images/landshaft.jpg" alt="">
                    <div class="service__mini-boxes flex flex-col justify-center items-center mt-12">
                        <h5 class="service__bottom-titles text-gray-800 text-[25px] font-bold">
                            Landshaft
                        </h5>
                        <p class="service__bottom-texts text-center text-[15px] mt-3 w-[350px] text-dim-gray">
                            Aynan Siznig xonadoningiz uchun mo'ljalangan qaytarilmas dizayn usuli
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>

<style lang="scss">
.service {
    background-image: url('@/assets/images/service-bg.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>