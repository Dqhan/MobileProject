<template>
  <aui-panel title="票据" @handleReturn="handleReturn">
    <aui-fssc-filter :list="filterList" />
    <div class="wrapper">
      <div class="btn yellow  btn-margin" @click="openBottomPopup">
        <text class="btn-txt">点击弹出底部面板</text>
      </div>
      <wxc-popup
        popup-color="rgb(92, 184, 92)"
        :show="isBottomShow"
        @wxcPopupOverlayClicked="popupOverlayBottomClick"
        pos="bottom"
        height="400"
      >
        <div class="demo-content">
          <image
            src="https://img.alicdn.com/tfs/TB1ojYvOXXXXXaOXFXXXXXXXXXX-180-41.png"
            class="demo-image"
          ></image>
          <text
            >与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 Weex
            构建一个真正的原生应用。更贴心的是你的代码只需使用
            HTML、CSS、JavaScript 可以构建原生应用，上手非常简单。
          </text>
        </div>
      </wxc-popup>
    </div>
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
import { WxcPopup } from "weex-ui";
const modal = weex.requireModule("modal");

export default {
  components: { WxcMinibar, WxcPopup },
  methods: {
    handleReturn() {},
    handleLoadMore(e) {},
    handleScroll(e) {},
    openBottomPopup() {
      this.isBottomShow = true;
    },
    //非状态组件，需要在这里关闭
    popupOverlayBottomClick() {
      this.isBottomShow = false;
    }
  },
  data() {
    return {
      isBottomShow: false,
      height: 400,
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
