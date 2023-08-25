<template>
  <!-- Main modal -->
  <div
    class="fixed top-0 left-0 right-0 z-[9999] w-full p-4 overflow-x-hidden overflow-y-auto h-full max-h-full bg-black/50 flex items-center justify-center">
    <div class="relative w-full max-w-5xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white shadow py-5 px-10">
        <button @click="$emit('closeModal')"
          class="text-gray-300 hover:text-gray-900 ml-auto flex justify-end items-center">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>

        <!-- Modal body -->
        <div class="modal-body flex items-start justify-center flex-wrap lg:justify-start lg:flex-nowrap gap-5">
          <div class="image-block">
            <img :src="info.image" class="w-full h-full" alt="#">
          </div>
          <div class="text-content w-full md:max-w-[70%]">
            <h3 class="title text-3xl font-semibold text-gray-900 pb-3 relative">
              {{ info.name }}
            </h3>
            <p class="text-base py-6 w-full leading-relaxed text-gray-500 dark:text-gray-400"
              v-html="replaceWithBr(info.desc)" />
            <button class="bg-darker-green text-white px-9 py-4">
              Lohiya havolasi
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from '../../../MaterialUI/TheButton.vue'

export default {
  components: { TheButton },
  data() { return {} },
  props: {
    info: {
      type: Object
    }
  },
  methods: {
    replaceWithBr(s) {
      return s.replace(/\n/g, "<br>");
    },
  }
}
</script>

<style scoped>
.title::before {
  content: "LOYIHA MA'LUMOTI";
  color: gainsboro;
  opacity: 0.1;
  font-size: 55px;
  font-weight: 800;
  position: absolute;
  z-index: 1;
  bottom: 0;
}

.title::after {
  content: "";
  width: 120px;
  height: 5px;
  background: green;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
}
</style>