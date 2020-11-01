<template>
  <aui-tabBar :tabs="tabTitles" titleType="icon" @handleChange="handleChange">
    <Home v-if="currentIndex === 0" />
    <PBill v-if="currentIndex === 1" />
    <DBill v-if="currentIndex === 2" />
    <MyInfo v-if="currentIndex === 3" />
  </aui-tabBar>
</template>

<script>
import Home from "./Home/Index.vue";
import PBill from "./PBill/Index.vue";
import DBill from "./DBill/index.vue";
import MyInfo from "./MyInfo/Index.vue";
export default {
  components: {
    Home,
    PBill,
    DBill,
    MyInfo
  },
  data() {
    return {
      currentIndex: 0,
      tabTitles: [
        {
          title: "首页",
          icon: "./home_default.png",
          activeIcon: "./home_selected.png"
        },
        {
          title: "票据",
          icon: "./invoice_default.png",
          activeIcon: "./invoice_selected.png"
        },
        {
          title: "单据",
          icon: "./receipt_default.png",
          activeIcon: "./receipt_selected.png"
        },
        {
          title: "我的",
          icon: "./wo_default.png",
          activeIcon: "./wo_selected.png"
        }
      ]
    };
  },
  methods: {
    handleChange(selectedIndex) {
      this.currentIndex = selectedIndex;
      // console.log(index);
    }
  }
};
</script>
