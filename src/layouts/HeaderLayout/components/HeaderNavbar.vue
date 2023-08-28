 <template>
  <header class="translate-y-9 hidden md:block w-full">
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
          <ul v-if="menuArray[idx].isDropdownOpened" class="absolute top-[85px] left-[-12px] z-10 px-3">
            <li class="bg-white divide-gray-100 px-2 shadow dark:bg-white dark:divide-darker-green">
              <ul class="py-2 text-sm text-white-700 text-white-400">
                <li v-for="childItem in item.childMenu" :key="childItem">
                  <router-link :to="childItem.link"
                    class="block px-4 py-2 hover:bg-darker-green dark:hover:darker-green">
                    {{ childItem.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li
          class="hidden px-2 py-0 bg-dim-black text-white text-lg lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-5">
          <i class="fa-solid fa-phone-volume"></i>
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
      if (idx === 5) {
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