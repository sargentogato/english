import "./assets/css/reset.css";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.js";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
