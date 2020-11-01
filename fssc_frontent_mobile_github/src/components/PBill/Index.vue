<template>
  <aui-panel title="票据" @handleReturn="handleReturn">
    <aui-fssc-filter :list="filterList" />
    <aui-list
      @loadmore="handleLoadMore"
      @scroll="handleScroll"
      :accuracy="accuracy"
      :scrollbar="scrollbar"
    >
      <aui-cell
        className="common-cell"
        :key="num.text"
        v-for="num in lists"
        :text="num.text"
        :date="num.date"
        :amount="num.amount"
        :company="num.company"
      ></aui-cell>
    </aui-list>
  </aui-panel>
</template>

<script>
import { WxcMinibar } from "weex-ui";
const modal = weex.requireModule("modal");

export default {
  components: { WxcMinibar },
  methods: {
    handleReturn() {},
    handleLoadMore(e) {},
    handleScroll(e) {}
  },
  data() {
    return {
      filterList: [
        {
          text: "我的发票"
        },
        {
          text: "我的费用"
        },
        {
          text: "我的草稿"
        }
      ],
      accuracy: 100,
      scrollbar: false,
      lists: [
        {
          text: "增值税普通发票",
          date: new Date().toDateString(),
          amount: "1000$",
          company: "沈阳京东世纪"
        },
        {
          text: "增值税普通发票",
          date: new Date().toDateString(),
          amount: "2000$",
          company: "沈阳京东世纪"
        },
        {
          text: "增值税普通发票",
          date: new Date().toDateString(),
          amount: "1000$",
          company: "沈阳京东世纪"
        },
        {
          text: "增值税普通发票",
          date: new Date().toDateString(),
          amount: "1000$",
          company: "沈阳京东世纪"
        }
      ]
    };
  }
};
</script>
