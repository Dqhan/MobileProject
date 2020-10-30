<script>
require("./style.less");
export default {
  name: "aui-cell",
  props: {
    status: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    date: {
      type: Date,
      default: new Date()
    },
  },

  methods: {
    onClick(e) {
      this.$emit("handleClick", e);
    },
    renderCellContent(createElement) {
      let resArr = [];
      this.status && resArr.push(this.renderCellStatus(createElement));
      this.text && resArr.push(this.renderCellText(createElement));
      this.type && resArr.push(this.renderCellType(createElement));
      this.date && resArr.push(this.renderCellDate(createElement));
      return resArr;
    },
    renderCellStatus(createElement) {
      return createElement(
        "text",
        {
          class: "aui-cell-item aui-cell-status"
        },
        this.status
      );
    },
    renderCellText(createElement) {
      return createElement(
        "text",
        {
          class: "aui-cell-item aui-cell-text"
        },
        this.text
      );
    },
    renderCellType(createElement) {
      return createElement(
        "text",
        {
          class: "aui-cell-item aui-cell-type"
        },
        this.type
      );
    },
    renderCellDate(createElement) {
      return createElement(
        "text",
        {
          class: "aui-cell-item aui-cell-date"
        },
        this.date.toString()
      );
    }
  },

  render(createElement) {
    let { key, onClick } = this;
    return createElement(
      "cell",
      {
        class: "aui-cell",
        props: {
          
        },
        on: {
          onClick: onClick
        },
        key: key
      },
      this.renderCellContent(createElement)
    );
  }
};
</script>
