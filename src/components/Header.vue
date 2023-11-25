<template>
  <div class="header row">
    <div
      class="header__box col-12"
      v-for="(data, index) in props.textData.services"
      :key="index"
      id="presentation"
    >
      <h1 class="header__title">
        {{ data.name }}
      </h1>
      <h2 class="header__info">
        {{ data.description }}
      </h2>
    </div>
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
</script>

<style lang="scss" scoped>
.row {
  padding: 0;
  margin: 0;
}
.header {
  &__box {
    background-color: $bg-primary;
    color: rgb(255, 255, 255);
    text-shadow: $text-shadow;
    background-image: url("../../public/images/header.jpg");
    -moz-background-image: url("../../public/images/header.jpg");
    -webkit-background-image: url("../../public/images/header.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &__box,
  .section__box,
  .imageSvg {
    padding-top: $padding-top-bottom-header;
    padding-bottom: $padding-top-bottom-header;
    padding-left: $padding-left-right-header;
    padding-right: $padding-left-right-header;
    text-align: center;
  }

  &__title {
    font-size: $main-title-mobile;
  }

  &__title,
  .section__title {
    line-height: $line-heigt-general;
    font-weight: bold;
  }

  &__info {
    font-size: $info-mobile;
  }
}

.section {
  &__box {
    background-color: $bg-primary;
    color: $color-text-peach;
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

.imageSvg {
  display: none;
}

@media (width > 760px) {
  .header {
    &__title {
      font-size: $main-title-desktop;
    }

    &__info {
      font-size: $info-desktop;
    }
  }

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
