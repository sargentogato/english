<template>
  <section
    class="section__box"
    v-for="(data, index) in props.textData.legal"
    :key="index"
  >
    <p
      class="section__title"
      v-scroll-reveal.reset="{
        delay: props.time,
        easing: 'ease-in-out',
        origin: 'top',
        distance: '200px',
      }"
    >
      {{ data.title }}
    </p>
    <p
      class="section__info"
      v-scroll-reveal.reset="{
        delay: props.time,
        easing: 'ease-in-out',
        origin: 'bottom',
        distance: '300px',
      }"
    >
      {{ data.description }}
    </p>
  </section>
</template>

<script setup>
import { vScrollReveal } from "vue-scroll-reveal";

const props = defineProps({
  textData: Object,
  time: Number,
});
</script>

<style lang="scss" scoped>
.section {
  &__box {
    color: rgb(0, 0, 0);
    padding-top: $padding-top-bottom-header;
    padding-bottom: $padding-top-bottom-header;
    padding-left: $padding-left-right-header;
    padding-right: $padding-left-right-header;
    text-align: center;
  }

  &__title {
    font-size: $title-mobile;
    font-weight: bold;
    line-height: $line-heigt-general;
  }

  &__info {
    font-size: $info-mobile;
  }

  &__subtitle {
    font-size: $titleSection-mobile;
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
