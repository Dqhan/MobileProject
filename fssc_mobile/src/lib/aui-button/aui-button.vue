<script>

import { WxcButton } from "weex-ui";
export default {
  name: "aui-button",
  components: { WxcButton },
  props: {
    /**
     * 自定义类命传递
     * @values string
     */
    className: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: "default"
    },
    /**
     * 自定义类命传递
     * @values white/red/yellow/blue/green
     */
    type: {
      type: String,
      default: "white"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 自定义类命传递
     * @values full/big/medium/small
     */
    size: {
      type: String,
      default: "small"
    },
    src: {
      type:String,
      default: ""
    }
  },

  methods: {
    onClick(e) {
      this.$emit("handleClick", e);
    }
  },

  render(createElement) {
    let { text, type, disabled, onClick, size, className,src } = this;
    return createElement(
      "div",
      {
        class: `aui-button weex-ct weex-div ${className}`
      },
      [
        createElement("image", {
          class: "aui-button-icon",
          attrs: {
            src: src
          }
        }),
        createElement("wxc-button", {
          props: {
            text: text,
            type: type,
            disabled: disabled,
            size: size
          },
          on: {
            wxcButtonClicked: onClick
          }
        })
      ]
    );
  }
};
</script>
