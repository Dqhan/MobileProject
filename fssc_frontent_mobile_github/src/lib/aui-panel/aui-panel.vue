<script>
import { WxcMinibar } from "weex-ui";
export default {
  name: "aui-panel",
  components: {
    WxcMinibar
  },
  props: {
    className: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },

  methods: {
    onReturn() {
      this.$emit("handleReturn");
    },
    renderPanelTitle(createElement) {
      return createElement("wxc-minibar", {
        props: {
          title: this.title,
          "background-color": "#FFFFFF",
          "text-color": "#000000"
        },
        on: {
          wxcMinibarLeftButtonClicked: this.onReturn
        }
      });
    },
    renderPanelContent(createElement) {
      return createElement("div", {}, this.$slots.default);
    }
  },

  render(createElement) {
    return createElement(
      "div",
      {
        class: `aui-panel ${this.className}`
      },
      [
        this.renderPanelTitle(createElement),
        this.renderPanelContent(createElement)
      ]
    );
  }
};
</script>
