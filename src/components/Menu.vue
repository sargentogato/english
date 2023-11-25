<template>
  <nav class="navbar">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" ref="btnBootstrap" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" @click="close">
            <a class="nav-link" href="#presentation">What we do</a>
          </li>
          <li class="nav-item" @click="close">
            <a class="nav-link" href="#1">We give you</a>
          </li>
          <li class="nav-item" @click="close">
            <a class="nav-link" href="#diferent">What differentiates us</a>
          </li>
          <li class="nav-item" @click="close">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const btnBootstrap = ref(null);

function close() {
  const classToDelete = btnBootstrap._rawValue.classList;
  classToDelete.remove("show");
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 2;
}

.navbar-toggler {
  background-color: #ffffff;
}
.nav-link {
  font-size: $link-text-mobile;
  color: rgb(0, 0, 0);
}

@media (width > 760px) {
  .nav-link {
    font-size: $link-text-desktop;
  }
}
</style>
