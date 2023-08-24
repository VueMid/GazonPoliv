<template>
  <header class="translate-y-12 hidden md:block w-full">
    <nav class="flex items-center justify-center">
      <ul class="flex justify-center items-stretch">
        <li v-for="(item, idx) in menuArray" :key="item" @click="openDropdown(idx)"
          class="py-5 px-3 xl:py-7 xl:px-6 xxl:px-8 border-r border-black/20 relative bg-darker-green">
          <router-link to="#" class="text-white text-md xl:text-lg">
            {{ item.name }}
            <i class="transition-all duration-300" :class="item.icon,
              [menuArray[idx].isDropdownOpened === true ? 'rotate-90' : 'rotate-0']">
            </i>
          </router-link>
          <ul v-if="menuArray[idx].isDropdownOpened" class="absolute z-10">
            <li class="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
                <li v-for="childItem in item.childMenu" :key="childItem">
                  <router-link :to="childItem.link"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {{ childItem.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="hidden lg:flex px-9 bg-dim-black text-white text-lg items-center justify-center">
          +998 33 995 75 65
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import menuArray from '../header.js'

export default {
  data() {
    return {
      menuArray: menuArray
    }
  },
  methods: {
    openDropdown(idx) { 
      if (idx === 1) {
        this.menuArray[idx].isDropdownOpened = !this.menuArray[idx].isDropdownOpened;
      }
      if (idx === 6) {
        this.menuArray[idx].isDropdownOpened = !this.menuArray[idx].isDropdownOpened;
      }
    },
  }
}
</script>

<style scoped>
.border-r:last-child {
  border: none;
}
</style>