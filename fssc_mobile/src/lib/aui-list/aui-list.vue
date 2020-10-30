<script>
require("./style.less");
export default {
  name: "aui-list",
  props: {
    /**
     * 自定义类命传递
     * @values string
     */
    className: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    /**
     * 控制 onscroll 事件触发的频率：表示两次onscroll事件之间列表至少滚动了10px。注意，
     * 将该值设置为较小的数值会提高滚动事件采样的精度，但同时也会降低页面的性能
     * @values string
     */
    accuracy: {
      type: Number,
      default: 10
    },

    /**
     * 是否出现滚动条
     * @values true / false
     */
    scrollbar: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onloadmore(e) {
      this.$emit("handleLoadMore", e);
    },
    onscroll(e) {
      this.$emit("handleScroll", e);
    },
    renderListTitle(createElement) {
      return createElement(
        "text",
        {
          class: "aui-list-title"
        },
        this.title
      );
    },
    renderListContent(createElement) {
      return createElement(
        "list",
        {
          props: {
            "offset-accuracy": this.accuracy,
            "show-scrollbar": this.scrollbar
          },
          on: {
            loadmore: this.onloadmore,
            scroll: this.onscroll
          }
        },
        this.$slots.default
      );
    }
  },

  render(createElement) {
    return createElement(
      "div",
      {
        class: `aui-list ${this.className}`
      },
      [
        this.renderListTitle(createElement),
        this.renderListContent(createElement)
      ]
    );
  }
};
</script>
