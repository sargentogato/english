<template>
  <div class="container-fluid p-0 main">
    <Menu />
    <Header :textData="textData" :time="time" />
    <LegalSection :textData="textData" />
    <DiferentiatesSection :textData="textData" :time="time" />
    <Contact :textData="textData" :time="time" />
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
const time = ref(800);
</script>

<style lang="scss" scoped>
.main {
  overflow-y: hidden;
}
</style>
