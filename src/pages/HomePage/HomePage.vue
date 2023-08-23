<template>
    <div class="home-page">
        <HomeSection />
        <InformationSection />
        <WelcomeSection />
        <PlantSection />
        <ServiceSection />
    </div>
</template>
<script>
import HomeSection from '../../pages/HomePage/HomeSections/HomeSection.vue'
import InformationSection from './HomeSections/InformationSection.vue';
import WelcomeSection from './HomeSections/WelcomeSection.vue';
import PlantSection from './HomeSections/PlantSection.vue';
import ServiceSection from './HomeSections/ServiceSection.vue';
export default {
    components: {
        HomeSection,
        InformationSection,
        WelcomeSection,
        PlantSection,
        ServiceSection
    }
}
</script>