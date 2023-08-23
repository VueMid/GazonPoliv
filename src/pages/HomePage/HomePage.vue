<template>
    <div class="home-page">
        <HomeSection />
        <InformationSection />
        <WelcomeSection />
        <PlantSection />
        <ServiceSection />
        <RatingSection />
        <ContactSection />
    </div>
</template>
<script>
import HomeSection from '../../pages/HomePage/HomeSections/HomeSection.vue'
import InformationSection from './HomeSections/InformationSection.vue';
import WelcomeSection from './HomeSections/WelcomeSection.vue';
import PlantSection from './HomeSections/PlantSection.vue';
import ServiceSection from './HomeSections/ServiceSection.vue';
import RatingSection from './HomeSections/RatingSection.vue';
import ContactSection from './HomeSections/ContactSection.vue';
export default {
    components: {
        HomeSection,
        InformationSection,
        WelcomeSection,
        PlantSection,
        ServiceSection,
        RatingSection,
        ContactSection
    }
}
</script>