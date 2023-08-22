<template>
    <nav class="w-full md:hidden fixed px-[0px] z-[999] bg-dim-black left-0 top-0 h-full p-[31px]">
        <div class="w-full md:block md:w-auto" id="navbar-multi-level">
            <ul class="pt-4 flex flex-col font-medium p-4 mt-4 px-[0px]">
                <li>
                    <a href="#"
                        class="text block border-t-2 border-dark-black pl-14 active:bg-lighter-green py-5 text-white "
                        aria-current="page">Biz
                        Haqimizda</a>
                </li>
                <li>
                    <button @click="isOpen = !isOpen" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                        class="flex items-center justify-between w-full pl-14 pr-10 py-5 border-t-2 border-dark-black text-white active:bg-lighter-green text">Xizmatlar
                        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div v-if="isOpen" id="dropdownNavbar"
                        class="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text">Dashboard</a>
                            </li>
                            <li aria-labelledby="dropdownNavbarLink">
                                <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown"
                                    data-dropdown-placement="right-start" type="button"
                                    class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text">Dropdown<svg
                                        class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg></button>
                                <div id="doubleDropdown"
                                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="doubleDropdownButton">
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white text">Overview</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white text">My
                                                downloads</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white text">Billing</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white text">Rewards</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text">Earnings</a>
                            </li>
                        </ul>
                        <div class="py-1">
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white text">Sign
                                out</a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#"
                        class="block active:bg-lighter-green text-white pl-14 pr-10 py-5 border-t-2 border-dark-black text">Loyihalar</a>
                </li>
                <li>
                    <a href="#"
                        class="block active:bg-lighter-green text-white pl-14 pr-10 py-5 border-t-2 border-dark-black text">Nega
                        Biz ?</a>
                </li>
                <li>
                    <a href="#"
                        class="block active:bg-lighter-green text-white pl-14 pr-10 py-5 border-t-2 border-dark-black text">Shaharlar</a>
                </li>
                <li>
                    <a href="#"
                        class="block active:bg-lighter-green text-white pl-14 pr-10 py-5 border-t-2 border-dark-black text">Tajribalar</a>
                </li>
                <button @click="wasOpen = !wasOpen" id="dropdownNavbarLinkSecond"
                    data-dropdown-toggle="dropdownNavbarLinkSecond"
                    class="flex items-center justify-between active:bg-lighter-green text-white pl-14 pr-10 py-5 border-t-2 border-b-2 border-dark-black text">UZ
                    <i class="fa-solid fa-chevron-down transition-all duration-300"
                        :class="wasOpen ? '-rotate-90' : 'rotate-0'"></i>
                </button>
                <Transition name="navbar">
                    <div v-if="wasOpen" id="dropdownNavbarLinkSecond" class="z-10 bg-white">
                        <ul class="text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#"
                                    class="block active:bg-lighter-green active:text-white text-dark-black pl-14 pr-10 py-5 border-b-2 border-dark-black text">EN</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block active:bg-lighter-green active:text-white text-dark-black pl-14 pr-10 py-5 border-b-2 border-dark-black text">RU</a>
                            </li>
                        </ul>
                        <div class="">
                            <a href="#"
                                class="block active:bg-lighter-green text-sm active:text-white text-dark-black pl-14 pr-10 py-5  border-dark-black text">UZ</a>
                        </div>
                    </div>
                </Transition>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false,
            wasOpen: false,
        }
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