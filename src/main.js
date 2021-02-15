import { createApp } from "vue";
import App from "./App.vue";
import "soft-components/dist/soft-components/soft-components.css";
import { applyPolyfills, defineCustomElements } from "soft-components/loader";

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});
//https://v3.vuejs.org/guide/migration/global-api.html#config-productiontip-removed
const app = createApp(App);
app.config.isCustomElement = (tag) => tag.startsWith("sc-");
app.mount("#app");
