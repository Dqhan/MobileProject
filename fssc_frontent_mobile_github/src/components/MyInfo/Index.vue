<template>
  <aui-panel title="标题" @handleReturn="handleReturn"></aui-panel>
</template>

<script>
import { WxcMinibar } from "weex-ui";
const modal = weex.requireModule("modal");

export default {
  components: { WxcMinibar },
  methods: {
    handleReturn() {}
  }
};
</script>
