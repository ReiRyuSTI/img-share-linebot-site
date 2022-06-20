import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { VueMasonryPlugin } from "vue-masonry";
import axiosStore, { axiosStoreKey } from "./state/useAxios";

import "./index.css";

createApp(App)
  .use(router)
  .use(VueMasonryPlugin)
  .provide(axiosStoreKey, axiosStore())
  .mount("#app");
