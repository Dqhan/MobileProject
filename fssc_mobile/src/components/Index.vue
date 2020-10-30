<template>
<aui-tabBar :tabs="tabTitles" titleType="icon" @handleChange="handleChange">
    <div class="item-container">
        <Home />
    </div>
    <div class="item-container">
        <text>特别推荐</text>
    </div>
    <div class="item-container">
        <text>消息中心</text>
    </div>
    <div class="item-container">
        <text>我的主页</text>
    </div>
</aui-tabBar>
</template>

<script>
import Home from "./Home/Index.vue";
export default {
    components: {
        Home
    },
    data() {
        return {
            tabTitles: [{
                    title: "首页",
                    icon: "./home_default.png",
                    activeIcon: "./home_selected.png"
                },
                {
                    title: "票据",
                    icon: "./invoice_default.png",
                    activeIcon: "./invoice_selected.png"
                },
                {
                    title: "单据",
                    icon: "./receipt_default.png",
                    activeIcon: "./receipt_selected.png"
                },
                {
                    title: "我的",
                    icon: "./wo_default.png",
                    activeIcon: "./wo_selected.png"
                }
            ]
        };
    },
    methods: {
        handleChange(e) {
            const index = e.page;
            // console.log(index);
        }
    }
};
</script>
