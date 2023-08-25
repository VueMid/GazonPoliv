<template>
  <section>
    <div class="container py-10 block">
      <div class="titles text-center">
        <h3 class="text-md lg:text-xl">Bizning loyihalaramiz</h3>
        <h1 class="text-2xl lg:text-5xl my-3 text-darker-green">So'nggi ishlarimiz</h1>
      </div>

      <div class="btns flex items-center justify-center gap-5">
        <button v-for="item in categoryArray" :key="item" :value="item.text" @click="filterCards(item.text)"
          class="btn flex items-center text-lg capitalize"
          :class="{ 'text-green-700': isFiltered === '' || item.text === isFiltered }">
          {{ item.text }}
        </button>
      </div>

      <div class="wrapper flex items-center justify-center flex-wrap gap-5 my-10">

        <!-- card -->
        <div class="card cursor-pointer w-[240px] md:w-[295px] lg:w-[350px] lg:h-[285px] overflow-hidden transition-all relative"
          v-for="(item, idx) in galleryArray" :key="item" v-show="isFiltered === '' || item.category === isFiltered"
          @click="openModal(idx)">
          <div class="image-block">
            <img :src="item.image" alt="#" class="w-full h-full">
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
          category: 'poliv',
          image: '../../../assets/images/samarqand.jpg',
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
        {
          name: `Islom sivilizatsiyasi`,
          category: 'gazon',
          image: 'src/assets/images/islom.jpg',
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
        {
          name: `Milliy bog'`,
          category: 'poliv',
          image: 'src/assets/images/milliy.png',
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
        {
          name: `Bunyodkor stadioni`,
          category: 'poliv',
          image: 'src/assets/images/bunyodkor.png',
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
        {
          name: `Tashkent city`,
          category: 'poliv',
          image: 'src/assets/images/toshkent.png',
          desc: `Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.   \n 
          “Each which life god all living form fruitful their fowl shed a stars he left” \n 
          Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales.`
        },
        {
          name: `Yangi O'zbekiston`,
          category: 'poliv',
          image: 'src/assets/images/yangi.png',
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
  }
}
</script>

<style scoped>
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