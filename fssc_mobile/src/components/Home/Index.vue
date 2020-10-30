<template>
  <div>
    <div class="banner"></div>
    <aui-btnGroup className="btnGroup" :list="btnList" />
    <aui-list
      title="我的单据"
      className="list"
      @loadmore="handleLoadMore"
      @scroll="handleScroll"
      :accuracy="accuracy"
      :scrollbar="scrollbar"
    >
      <aui-cell
        :key="num.text"
        v-for="num in lists"
        :text="num.text"
        :date="num.date"
        :type="num.type"
        :status="num.status"
      ></aui-cell>
    </aui-list>
  </div>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      btnList: [
        {
          text: "添加费用",
          className: "home-btn"
        },
        {
          text: "提单据",
          className: "home-btn"
        },
        {
          text: "发票识别",
          className: "home-btn"
        }
      ],
      accuracy: 100,
      scrollbar: false,
      lists: [
        {
          status: "王玉审批中",
          text: "预付款第三方项目款项",
          type: "借款申请",
          date: new Date()
        },
        {
          status: "peter审批中",
          text: "预付款第三方项目款项",
          type: "借款申请",
          date: new Date()
        },
        {
          status: "dqhan审批中",
          text: "预付款第三方项目款项",
          type: "借款申请",
          date: new Date()
        }
      ]
    };
  },
  methods: {
    handleLoadMore(e) {},
    handleScroll(e) {}
  }
};
</script>
