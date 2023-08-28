<template>
    <main>
        <HeaderTopLayout />
        <HeaderLayout />
        <RouterView />
        <FooterLayout />
    </main>
</template>
<script>
import HeaderTopLayout from './layouts/HeaderTopLayout/HeaderTopLayout.vue';
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout.vue';
import FooterLayout from './layouts/FooterLayout/FooterLayout.vue';
export default {
    components: { HeaderLayout, FooterLayout, HeaderTopLayout },
}
</script>