<template>
  <div class="container-fluid p-0 main">
    <Menu />
    <Header :textData="textData" />
  </div>
</template>

<script setup>
import Menu from "../components/Menu.vue";
import Header from "../components/Header.vue";
import { data } from "../assets/data.js";
import { ref } from "vue";

const textData = ref(data);
</script>

<style lang="scss" scoped></style>
