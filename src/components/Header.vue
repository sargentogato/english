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
        :id="index"
      >
        <p class="section__title">{{ data.title }}</p>
        <p class="section__info">
          {{ data.description }}
        </p>
      </aside>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  textData: Object,
});
</script>

<style lang="scss" scoped>
.row {
  padding: 0;
  margin: 0;
}
.header {
  &__box {
    background-color: $bg-primary;
    color: $color-primary;
  }

  &__box,
  .section__box {
    padding-top: $padding-top-bottom-header;
    padding-bottom: $padding-top-bottom-header;
    padding-left: $padding-left-right-header;
    padding-right: $padding-left-right-header;
    text-align: center;
  }

  &__title,
  .section__title {
    font-size: $title-mobile;
    line-height: $line-heigt-general;
    font-weight: bold;
  }

  &__info {
    font-size: $info-mobile;
  }
}

.section {
  &__box {
    background-color: $bg-seconday;
    color: white;
  }

  &__box:nth-child(2) {
    background-color: $bg-alternative;
    color: #ffffff;
  }

  &__info {
    font-size: 1.5rem;
  }
}
</style>
