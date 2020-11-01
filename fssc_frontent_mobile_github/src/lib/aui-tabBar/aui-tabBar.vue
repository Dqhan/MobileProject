<script>
export default {
  name: "aui-tabBar",
  data() {
    return {
      selectedIndex: 0
    };
  },
  props: {
    className: {
      type: String,
      default: ""
    },
    tabs: {
      type: Array,
      default: []
    },
    titleType: {
      type: "",
      default: ""
    }
  },

  methods: {
    onClick(e) {
      this.tabs.forEach((item, index) => {
        if (e.currentTarget.textContent === item.title) {
          this.selectedIndex = index;
          return;
        }
      });
      this.$emit("handleChange", this.selectedIndex);
    },
    renderWrapper(createElement) {
      return createElement(
        "div",
        {
          class: "aui-tabBar-wrapper"
        },
        this.renderWrapperContent(createElement)
      );
    },
    renderWrapperContent(createElement) {
      return this.tabs.map((item, index) => {
        return createElement(
          "div",
          {
            class: "aui-tabBar-wrapper-item weex-ct weex-div",
            on: {
              click: this.onClick,
              change: this.onChange
            }
          },
          [
            this.renderWrapperContentItemIcon(createElement, item, index),
            this.renderWrapperContentItemText(createElement, item, index)
          ]
        );
      });
    },
    renderWrapperContentItemIcon(createElement, item, index) {
      return createElement("image", {
        class: "aui-tabBar-wrapper-item-icon",
        attrs: {
          src: this.selectedIndex === index ? item.activeIcon : item.icon
        }
      });
    },
    renderWrapperContentItemText(createElement, item) {
      return createElement(
        "div",
        {
          class: "aui-tabBar-wrapper-item-text"
        },
        item.title
      );
    },
    renderContent(createElement) {
      return createElement("text", {}, this.$slots.default);
    }
  },

  render(createElement) {
    let { tabs, onChange, titleType, className } = this;
    return createElement(
      "div",
      {
        class: `aui-tabBar ${className}`
      },
      [this.renderWrapper(createElement), this.renderContent(createElement)]
    );
  }
};
</script>
