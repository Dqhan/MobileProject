<template>
  <div>
    <div class="banner"></div>
    <aui-btnGroup className="home-btnGroup" :list="btnList" />
    <aui-list
      title="我的单据"
      className="home-list"
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
        :amount="num.amount"
        :color="num.color"
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
          className: "home-btn",
          src: "./add_receipt.png"
        },
        {
          text: "提单据",
          className: "home-btn",
          src: "./add_cost.png"
        },
        {
          text: "发票识别",
          className: "home-btn",
          src: "./add_invoice.png"
        }
      ],
      accuracy: 100,
      scrollbar: false,
      lists: [
        {
          status: "王玉审批中",
          text: "预付款第三方项目款项aaa",
          type: "借款申请",
          date: new Date().toDateString(),
          amount: "1000$",
          color: "blue"
        },
        {
          status: "peter已驳回",
          text: "预付款第三方项目款项ccc",
          type: "借款申请",
          date: new Date().toDateString(),
          amount: "2000$",
          color: "red"
        },
        {
          status: "dqhan已完成",
          text: "预付款第三方项目款项ddd",
          type: "借款申请",
          date: new Date().toDateString(),
          amount: "1000$",
          color: "green"
        },
        {
          status: "666审批中",
          text: "预付款第三方项目款项sss",
          type: "借款申请",
          date: new Date().toDateString(),
          amount: "1000$",
          color: "blue"
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
