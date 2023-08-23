<template>
    <section class="rating bg-green-700">
        <div class="container rating__section flex flex-col justify-center items-center py-16 gap-[120px] md:flex md:flex-col md:justify-center md:items-center md:gap-[140px] lg:gap-[150px] lg:py-[110px]">
            <div class="rating__top flex flex-col justify-center items-center">
                <p class="rating__text text-[17px]  font-bold text-white md:text-[20px]">
                    Faktlar
                </p>
                <h3 class="rating__title text-[30px] font-bold text-white md:text-[40px] mt-3 lg:text-[50px] lg:mt-0">
                    15 yillik tajriba
                </h3>
            </div>
            <div class="rating__bottom flex flex-col justify-center items-center gap-[110px] md:flex md:flex-row md:justify-center md:items-start md:gap-[70px] lg:gap-[170px]">
                <div class="rating__mini-boxes flex flex-col justify-center items-center">
                    <h3 class="rating__numbers text-white font-bold text-[30px]">15</h3>
                    <p class="rating__texts text-white font-bold text-[16px]">
                        yillik tajriba
                    </p>
                </div>
                <div class="rating__mini-boxes flex flex-col justify-center items-center">
                    <h3 class="rating__numbers text-white font-bold text-[30px]">230</h3>
                    <p class="rating__texts text-white font-bold text-[16px]">
                        professional xodimlar
                    </p>
                </div>
                <div class="rating__mini-boxes flex flex-col justify-center items-center">
                    <h3 class="rating__numbers text-white font-bold text-[30px]">2535</h3>
                    <p class="rating__texts text-white font-bold text-[16px]">
                        mijozrlar
                    </p>
                </div>
                <div class="rating__mini-boxes flex flex-col justify-center items-center">
                    <h3 class="rating__numbers text-white font-bold text-[30px]">10</h3>
                    <p class="rating__texts text-white font-bold text-[16px]">
                        mukofotlar
                    </p>
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
.rating {}
</style>