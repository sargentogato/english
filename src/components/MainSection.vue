<template>
  <div class="row">
    <section class="section col-12 row">
      <aside
        class="section__box col-12 col-md-6"
        v-for="(data, index) in props.textData.team"
        :key="index"
        :id="`section${index}`"
      >
        <p
          class="section__title"
          :class="`section__title${index}`"
          v-scroll-reveal.reset="props.scrollEfect"
        >
          {{ data.title }}
        </p>
        <p
          class="section__info"
          :class="`section__info${index}`"
          v-scroll-reveal.reset="props.scrollEfect"
        >
          {{ data.description }}
        </p>
        <svgImage
          v-if="isSmallScreen && !index"
          v-scroll-reveal.reset="props.scrollEfect"
        />
      </aside>
    </section>
    <div class="imageSvg" v-scroll-reveal.reset="props.scrollEfect">
      <svgImage v-if="!isSmallScreen" />
    </div>
  </div>
</template>

<script setup>
import svgImage from "../components/imageSVG.vue";
import { vScrollReveal } from "vue-scroll-reveal";
import { ref, onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

//props
const props = defineProps({
  textData: Object,
  scrollEfect: Object,
});

//variavbles
const isSmallScreen = ref(window.innerWidth < 760);

//functions
const handleResize = () => {
  isSmallScreen.value = window.innerWidth < 760;
};

function getImage(image) {
  const path = new URL("../../public/images", import.meta.url).href;

  return `${path}/${image}`;
}
</script>

<style lang="scss" scoped>
.row {
  padding: 0;
  margin: 0;
}

.section {
  text-align: center;

  &__box {
    background-color: $bg-primary;
    color: $color-text-peach;
    padding: $padding-top-bottom-header $padding-left-right-header;
  }

  &__box:nth-child(2) {
    color: white;
    background-color: $bg-seconday;
  }

  &__title {
    font-size: $title-mobile;
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

  .imageSvg {
    display: block;
    padding: $padding-top-bottom-header $padding-left-right-header;
  }
}

@keyframes headerTitle {
  from {
    transform: translateX(-100%);
  }
}
.header {
  &__title {
    animation: headerTitle $time-animation;
  }
}
@keyframes headerInfo {
  from {
    transform: translateX(100%);
  }
}
.header {
  &__info {
    animation: headerInfo $time-animation;
  }
}

#section0 {
  opacity: 0;
  transform: translateY(100%);
  animation: fadeIn $time-animation $delay-one both; /* 'both' asegura que se mantengan los estilos finales */
}

#section1 {
  opacity: 0;
  transform: translateY(100%);
  animation: fadeIn $time-animation $delay-two both;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
