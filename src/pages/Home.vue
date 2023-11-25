<template>
  <Menu />
  <div class="container-fluid p-0 main">
    <Header :textData="textData" :scrollEfect="scrollEfect" />
    <LegalSection :textData="textData" />
    <div id="diferent"></div>
    <DiferentiatesSection :textData="textData" :scrollEfect="scrollEfect" />
    <Contact :textData="textData" :scrollEfect="scrollEfect" />
  </div>
</template>

<script setup>
import Menu from "../components/Menu.vue";
import Header from "../components/Header.vue";
import LegalSection from "../components/LegalSection.vue";
import DiferentiatesSection from "../components/DiferentiatesSection.vue";
import Contact from "../components/Contact.vue";

//data and properties vue
import { data } from "../assets/data.js";
import { ref } from "vue";

const textData = ref(data);
const scrollEfect = ref({
  delay: 400,
  easing: "ease-in-out",
  origin: "bottom",
  distance: "100px",
});
</script>

<style lang="scss" scoped>
.main {
  overflow-y: hidden;
}
</style>
