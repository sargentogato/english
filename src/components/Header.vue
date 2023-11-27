<template>
  <div class="header row">
    <div
      class="header__box col-12"
      v-for="(data, index) in props.textData.services"
      :key="index"
      id="presentation"
    >
      <picture class="header__picture">
        <source
          media="(min-width:768px)"
          :srcset="getImage(data.imageDesktop)"
        />
        <source media="(min-width:0px)" :srcset="getImage(data.imageMobile)" />
        <img
          :src="getImage(data.imageDesktop)"
          alt="Profesional Legal Translation"
        />
      </picture>

      <div class="header__infoBox">
        <h1 class="header__title">
          {{ data.name }}
        </h1>
        <h2 class="header__info">
          {{ data.description }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
//props
const props = defineProps({
  textData: Object,
  scrollEfect: Object,
});

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
.header {
  &__box {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;

    color: rgb(255, 255, 255);
    padding: 0;
    text-align: center;
    text-shadow: $text-shadow;
    overflow: hidden;
  }

  img {
    filter: brightness(65%);
  }

  &__infoBox {
    position: absolute;
  }

  &__title {
    font-size: $main-title-mobile;
  }

  &__title {
    line-height: $line-heigt-general;
    font-weight: bold;
  }

  &__info {
    font-size: $info-mobile;
  }
}

@media (width < 400px) {
  .header {
    height: 50vh;

    &__picture {
      height: 100%;
    }

    img {
      height: 100%;
    }
  }
}

@media (width > 960px) {
  .header {
    &__box {
      height: 600px;
    }

    &__title {
      font-size: $main-title-desktop;
    }

    &__info {
      font-size: $info-desktop;
    }
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
</style>
