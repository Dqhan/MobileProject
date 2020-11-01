<script>
export default {
  name: "aui-fssc-filter",
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
    renderContent(createElement) {
      return createElement(
        "div",
        {
          class: "aui-fssc-filter-content"
        },
        this.renderBtns(createElement)
      );
    },
    renderBtns(createElement) {
      return this.list.map(btnItem => {
        let baseProps = {
          props: {
            // size: ""
          }
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
        btnItem.src !== void 0 &&
          Object.assign(baseProps.props, {
            src: btnItem.src
          });
        return createElement(
          "div",
          {
            class: "aui-fssc-filter-item"
          },
          [createElement("aui-button", baseProps)]
        );
      });
    }
  },

  render(createElement) {
    return createElement(
      "div",
      {
        class: `aui-fssc-filter ${this.className}`
      },
      [this.renderContent(createElement)]
    );
  }
};
</script>
