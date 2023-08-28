<template>
    <section class="information dark:bg-dim-black">
        <div
            class="container flex flex-wrap justify-center items-center md:flex md:flex-row md:justify-center md:items-center">
            <div
                class="information__content  bg-white dark:bg-green-600 flex flex-col justify-center items-center gap-[150px] py-[120px] md:flex md:flex-row md:justify-center md:items-center md:gap-0 md:py-[0] md:pt-[160px] md:pb-[110px] lg:flex lg:flex-row lg:justify-between lg:items-start lg:w-full px-3">
                <div
                    class="information__boxes w-[300px] md:w-[240px] lg:w-full flex flex-wrap justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-center">
                    <h3 class="information__titles text-center text-[21px] font-bold dark:text-white">Shaxsiy maydon</h3>
                    <p class="information__texts text-center text-base w-[340px] md:w-[180px] mt-5 lg:w-[350px] dark:text-white text-dim-gray">
                        Biz chimlarni butun mehr bilan o'stiramiz. Bizning dalalarimiz eng yaxshi parvarishlangan. Keling,
                        ishonch hosil qiling.
                    </p>
                </div>
                <div
                    class="information__boxes w-[300px] md:w-[240px] lg:w-full flex flex-wrap justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-center">
                    <h3 class="information__titles text-center text-[21px] font-bold dark:text-white">Yevropa sifati</h3>
                    <p class="information__texts text-center text-base w-[340px] md:w-[180px] mt-5 lg:w-[350px] dark:text-white text-dim-gray">
                        Barcha mahsulotlarimiz Yevropa standartlariga javob beradi. Sifat va ekologik tozalik bizning asosiy
                        tamoyillarimizdir
                    </p>
                </div>
                <div
                    class="information__boxes w-[300px] md:w-[240px] lg:w-full flex flex-wrap justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-center">
                    <h3 class="information__titles text-center text-[21px] font-bold dark:text-white md:w-[180px] lg:w-[280px]">Arzon
                        narxlar, yuqori
                        sifat</h3>
                    <p class="information__texts text-center text-base w-[340px] md:w-[180px] mt-5 lg:w-[350px] dark:text-white text-dim-gray">
                        Yevropa sifatidagi chimning O‘zbekistonda eng yaxshi narxlari
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
</script>
<style lang="scss">
.information {
    &__content {
        z-index: 120;
        background-color: wheat;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        background-image: url('@/assets/images/promo-shap.png');
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: contain;
        position: relative;
        z-index: 101;
        transform: translateY(-70px);
    }

    &__boxes:nth-child(2) {
        padding: 0 14px;
        border-left: 1px solid rgba(47, 79, 79, 0.11);
        border-right: 1px solid rgba(47, 79, 79, 0.11);
    }
}

@media(max-width: 820px) {
    .information {
        &__content {
            background-color: wheat;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            background-image: url('@/assets/images/promo-shap.png');
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: contain;
            position: relative;
            z-index: 101;
            transform: translateY(-70px);
        }

        &__boxes:nth-child(2) {
            padding: 0 14px;
            border-left: 1px solid rgba(47, 79, 79, 0.11);
            border-right: 1px solid rgba(47, 79, 79, 0.11);
        }
    }
}

@media(max-width: 700px) {
    .information {
        &__content {
            background-color: wheat;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            background-image: url('@/assets/images/promo-shap.png');
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: contain;
            position: relative;
            z-index: 101;
            transform: translateY(-80px);
        }

        &__boxes:nth-child(2) {
            padding: 0 14px;
            border-left: none;
            border-right: none;
        }
    }
}
</style>