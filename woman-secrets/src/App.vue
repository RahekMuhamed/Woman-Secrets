<template>
  <div>
  <the-header></the-header>
  <contact-us></contact-us>
  <about-us></about-us>
  <product-showcase></product-showcase>
  <scroll-text></scroll-text>
  <the-footer></the-footer>
</div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import ContactUs from "./pages/ContactUs.vue";
import AboutUs from "./pages/AboutUs.vue";
import ProductShowcase from "./components/ProductShowcase.vue";
import ScrollText from "./pages/ScrollText.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  name: "App",
  components: {
    TheHeader,
    ContactUs,
    AboutUs,
    ProductShowcase,
    ScrollText,
    TheFooter
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 2rem;
} */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');


</style>
