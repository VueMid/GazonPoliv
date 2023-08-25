<template>
    <nav class="w-full md:hidden fixed px-[0px] z-[999] bg-dim-black left-0 top-0 h-full p-[31px]">
        <div class="w-full md:block md:w-auto">
            <ul class="pt-4 flex flex-col font-medium p-4 mt-4 px-[0px]">
                <li v-for="(item, idx) in menuArray" :key="item" @click="openDropdown(idx)">
                    <router-link :to="item.link"
                        class="text border-t-2 border-dark-black px-14 active:bg-lighter-green py-5 text-white flex items-center justify-between">
                        {{ item.name }}
                        <i class="transition-all duration-300" :class="item.icon,
                            [menuArray[idx].isDropdownOpened === true ? 'rotate-90' : 'rotate-0']">
                        </i>
                    </router-link>
                    <Transition name="navbar">
                        <ul v-if="menuArray[idx].isDropdownOpened">
                            <li>
                                <ul class="text-sm text-gray-700 bg-white z-10">
                                    <li v-for="childItem in item.childMenu" :key="childItem">
                                        <router-link :to="childItem.link"
                                            class="block active:bg-lighter-green active:text-white text-dark-black pl-14 pr-10 py-5 border-b-2 border-dark-black text">
                                            {{ childItem.name }}
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Transition>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import menuArray from '../header.js'
export default {
    data() {
        return {
            isOpen: false,
            wasOpen: false,
            menuArray: menuArray,
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
<style>
.text {
    font-family: 'Poppins';
}

.navbar-enter-active,
.navbar-leave-active {
    transition: 0.4s ease;
}

.navbar-enter-from,
.navbar-leave-to {
    transform: translate(-100%);
    opacity: 0;
}

.cursor {
    transform: rotate(270deg);
}

.cursor:focus {
    transform: rotate(90deg);
}
</style>