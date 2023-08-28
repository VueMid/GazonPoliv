<template>
  <section class="gallery dark:bg-dim-black">
    <div class="container py-10 block">
      <div class="titles text-center">
        <h3 class="gallery__title lg:text-xl dark:text-white font-semibold text-darker-green">Bizning
          loyihalaramiz</h3>
        <h1 class="gallery__title text-2xl lg:text-5xl my-3 font-bold text-black dark:text-white">So'ngi
          ishlarimiz</h1>
      </div>
      <div class="btns flex items-center justify-center gap-5 text-black dark:text-white">
        <button v-for="item in categoryArray" :key="item" :value="item.text" @click="filterCards(item.text)"
          class="btn flex items-center text-lg capitalize"
          :class="{ 'text-green-700': isFiltered === '' || item.text === isFiltered }">
          {{ item.text }}
        </button>
      </div>
      <div class="wrapper flex items-center justify-center lg:justify-center flex-wrap gap-5 my-10">

        <!-- card -->
        <div
          class="card cursor-pointer w-[240px] md:w-[295px] lg:w-[350px] lg:h-[285px] overflow-hidden transition-all relative"
          v-for="(item, idx) in galleryArray" :key="item" v-show="isFiltered === '' || item.category === isFiltered"
          @click="openModal(idx)">
          <div class="image-block">
            <img :src="item.image" alt="#" class="images]">
          </div>
          <div class="bottom text-white flex items-end absolute left-0 bottom-0 z-10 w-full">
            <div class="icon w-[85px] h-[65px] bg-green-900"></div>
            <div class="text py-4 pl-4 sm:px-4 w-full bg-darker-green/80">
              <h1 class="">{{ item.name }}</h1>
            </div>
          </div>
        </div>
        <div class="modal flex items-center justify-center" v-if="isModalOpened">
          <TheModal :info="modalData" @closeModal="closeModal" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TheModal from "../components/GalleryModal.vue"
import samarqand from '@/assets/images/samarqand.jpg'
import islom from '@/assets/images/islom.jpg'
import milliy from '@/assets/images/milliy.png'
import bunyodkor from '@/assets/images/bunyodkor.png'
import toshkent from '@/assets/images/toshkent.png'
import yangi from '@/assets/images/yangi.png'
export default {
  components: {
    TheModal
  },
  data() {
    return {
      isModalOpened: false,
      isFiltered: "",
      modalData: {},
      categoryArray: [
        {
          text: 'barchasi'
        },
        {
          text: 'gazon'
        },
        {
          text: 'poliv'
        },

      ],
      galleryArray: [
        {
          name: `O'zbekiston bog'i`,
          category: 'gazon',
          image: samarqand,
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
        {
          name: `Islom sivilizatsiyasi`,
          category: 'poliv',
          image: islom,
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
        {
          name: `Milliy bog'`,
          category: 'gazon',
          image: milliy,
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
        {
          name: `Bunyodkor stadioni`,
          category: 'gazon',
          image: bunyodkor,
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
        {
          name: `Tashkent city`,
          category: 'poliv',
          image: toshkent,
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
        {
          name: `Yangi O'zbekiston`,
          category: 'gazon',
          image: yangi,
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
      ]
    }
  },
  methods: {
    filterCards(name) {
      this.isFiltered = name === 'barchasi' ? '' : name;
    },
    openModal(idx) {
      this.modalData = this.galleryArray[idx], this.isModalOpened;
      this.isModalOpened = true;
    },
    closeModal() {
      this.isModalOpened = false;
      this.modalData = {};
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      console.log();
      // window.pageYOffset > 0
    //     ? (this.isModalOpened = false)
    //     : (this.isModalOpened = true);
      // if (winWidth < 768 && this.isScrolled == false) {
      //   this.isScrolled = true
      // }
    })
  }
}
</script>
<style scoped>
.text {
  font-size: 17px;
  font-weight: 700;
}

.gallery__title {
  font-family: 'poppins';
}

.card img {
  transition: 0.3s;
}

.card img:hover {
  scale: 1.2;
}

.btn:first-child::after {
  content: '/';
  position: relative;
  left: 0;
  top: 0;
  padding-left: 10px;
  font-size: 25px;
}

.btn:last-child::before {
  content: '/';
  position: relative;
  left: 0;
  top: 0;
  padding-right: 10px;
  font-size: 25px;
}
</style>