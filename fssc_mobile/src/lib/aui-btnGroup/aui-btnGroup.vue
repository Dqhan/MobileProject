<script>
require("./style.less");
export default {
  name: "aui-btnGroup",
  props: {
    /**
     * 自定义类命传递
     * @values string
     */
    className: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: []
    }
  },

  methods: {
    renderBtns(createElement) {
      return this.list.map(btnItem => {
        let baseProps = {
          props: {}
        };
        btnItem.className !== void 0 &&
          Object.assign(baseProps, {
            class: btnItem.className
          });
        btnItem.text !== void 0 &&
          Object.assign(baseProps.props, {
            text: btnItem.text
          });
        btnItem.type !== void 0 &&
          Object.assign(baseProps.props, {
            type: btnItem.type
          });
        btnItem.disabled !== void 0 &&
          Object.assign(baseProps.props, {
            disabled: btnItem.disabled
          });
        btnItem.size !== void 0 &&
          Object.assign(baseProps.props, {
            size: btnItem.size
          });
        return createElement("aui-button", baseProps);
      });
    }
  },

  render(createElement) {
    return createElement(
      "div",
      {
        class: `aui-btnGroup ${this.className}`
      },
      this.renderBtns(createElement)
    );
  }
};
</script>
