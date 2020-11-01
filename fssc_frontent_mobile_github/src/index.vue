<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
require('./lib/index.js')

export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
