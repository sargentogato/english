<template>
  <section class="row section">
    <aside
      id="contact"
      class="section__box col-12"
      v-for="(data, index) in dataContact"
      :key="index"
    >
      <h2 class="section__title" v-scroll-reveal.reset="props.scrollEfect">
        {{ data.title }}
      </h2>
      <div class="section__info" v-scroll-reveal.reset="props.scrollEfect">
        {{ data.instructions }}
        <span>{{ data.address }}</span>
        {{ data.info }} {{ data.callInfo }}
        <span>
          {{ data.number }}
        </span>
      </div>

      <h2
        class="section__secondTitle"
        v-scroll-reveal.reset="props.scrollEfect"
      >
        {{ data.secondTitle }}
      </h2>
      <p
        class="section__info section__infoToSend"
        v-scroll-reveal.reset="props.scrollEfect"
      >
        {{ data.request }}
      </p>
      <p
        class="section__info section__infoRequested"
        v-scroll-reveal.reset="props.scrollEfect"
      >
        {{ data.infoSubmit }}
      </p>
    </aside>
  </section>
</template>

<script setup>
import { vScrollReveal } from "vue-scroll-reveal";

const props = defineProps({
  textData: Object,
  scrollEfect: Object,
});

//variables
const dataContact = props.textData.contact;
</script>

<style lang="scss" scoped>
.row {
  padding: 0;
  margin: 0;
}

.section {
  &__box {
    padding-top: $padding-top-bottom-header;
    padding-bottom: $padding-top-bottom-header;
    padding-left: $padding-left-right-header;
    padding-right: $padding-left-right-header;
  }

  &__title {
    font-size: $title-mobile;
    font-weight: bold;
    line-height: $line-heigt-general;
    text-align: center;
    color: $color-text-blue;
  }

  &__secondTitle {
    padding-top: 1rem;
    font-weight: bold;
    margin-bottom: 0;
    color: $color-text-blue;
  }

  &__info {
    font-size: $info-mobile;
    span {
      font-size: $info-mobile;
      font-weight: bold;
    }
  }

  &__info:last-child {
    font-weight: bold;
    margin-top: -0.5rem;
  }

  &__infoToSend {
    margin-bottom: 0;
  }

  &__infoRequested {
    font-size: 1.2rem;
  }
}

@media (width > 760px) {
  .section {
    &__info {
      font-size: $info-desktop;

      span {
        font-size: $info-desktop;
      }
    }

    &__title {
      font-size: $titleSection-desktop;
    }
  }
}
</style>
