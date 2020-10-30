<script>
import { WxcTabBar } from "weex-ui";
export default {
  name: "aui-tabBar",
  components: {
    WxcTabBar
  },
  props: {
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
    onChange(e) {
      this.$emit("handleChange", e);
    }
  },

  render(createElement) {
    let { tabs, onChange, titleType } = this;
    return createElement(
      "wxc-tab-bar",
      {
        props: {
          "tab-titles": tabs,
          "title-type": titleType
        },
        on: {
          wxcTabBarCurrentTabSelected: onChange
        }
      },
      this.$slots.default
    );
  }
};
</script>
