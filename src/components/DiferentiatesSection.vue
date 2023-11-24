<template>
  <section
    id="diferent"
    class="section col-12 row"
    v-scroll-reveal.reset="{
      delay: props.time,
      easing: 'ease-in-out',
      origin: 'bottom',
    }"
  >
    <h2 class="section__mainTitle">
      {{ props.textData.diferent[0].title }}
    </h2>
    <aside class="section__box col-12 col-md-6">
      <p class="section__title">{{ props.textData.diferent[1].title }}</p>
      <img :src="getImage('english0.jpg')" alt="" />
      <p class="section__info">
        {{ props.textData.diferent[1].description }}
      </p>
    </aside>
    <aside class="section__box col-12 col-md-6">
      <p class="section__title">{{ props.textData.diferent[2].title }}</p>
      <p class="section__info">
        {{ props.textData.diferent[2].description }}
      </p>
      <img :src="getImage('english1.jpg')" alt="" />
    </aside>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { vScrollReveal } from "vue-scroll-reveal";

const props = defineProps({
  textData: Object,
  time: Number,
});

function getImage(image) {
  const path = new URL("../../public/images/", import.meta.url).href;

  return `${path}/${image}`;
}
</script>

<style lang="scss" scoped>
.row {
  padding: 0;
  margin: 0;
}

.section {
  background-color: $bg-primary;
  padding-top: 5rem;

  &__box {
    color: rgb(0, 0, 0);
    padding-top: $padding-top-bottom-header;
    padding-bottom: $padding-top-bottom-header;
    padding-left: $padding-left-right-header;
    padding-right: $padding-left-right-header;
    // text-align: center;
    color: $color-primary;
  }

  &__mainTitle {
    font-size: 3rem;
    text-align: center;
    font-weight: bold;
    color: white;
    padding: 0 2rem;
  }

  &__title {
    font-size: $title-mobile;
    font-weight: bold;
    line-height: $line-heigt-general;
    text-align: center;
  }

  &__info {
    font-size: $info-mobile;
  }

  &__subtitle {
    font-size: $titleSection-mobile;
  }

  &__info:last-child {
    padding-top: $imageText-padding;
  }

  &__info:nth-child(2) {
    padding-bottom: $imageText-padding;
  }
}

@media (width > 760px) {
  .section {
    &__info {
      font-size: $info-desktop;
    }

    &__title {
      font-size: $titleSection-desktop;
    }
  }
}
</style>
