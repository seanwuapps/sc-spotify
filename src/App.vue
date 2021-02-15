<template>
  <Header />
  <sc-card card-title="asdf"></sc-card>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: { Header },
  data() {
    return {
      blah: "test",
    };
  },
  methods: {
    updateBlah(e) {
      this.blah = e.target.value;
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
  --sc-bg-color: #191414;
  --sc-text-color: #ffffff;
  --sc-highlight-color: rgba(255, 255, 255, 0.4);
  --sc-shadow-color: rgba(0, 0, 0, 0.17);
  --sc-secondary-color: #1db954;
  --sc-active-color: #24d54a;
  sc-button {
    --sc-button-bg-color: #1db954;
    --sc-button-text-hover-color: #fff;
  }
}
</style>
