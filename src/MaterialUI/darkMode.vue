<template>
  <div>
    <button @click="toogleDark()" class="w-5">
      <i v-if="isDark" class="fa-solid fa-sun fa-xl cursor-pointer text-white"></i>
      <i v-else class="fa-solid fa-moon fa-xl cursor-pointer text-white"></i>
    </button>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark()
const toogleDark = useToggle(isDark);

</script>