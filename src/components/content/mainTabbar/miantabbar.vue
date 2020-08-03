<template>
    <tabbar>
        <tabbaritem path="/major" activecolor="pink">
            <img slot="item-icon" src="@/assets/img/tabbar/首页.png">
            <img slot="item-icon-active" src="@/assets/img/tabbar/first.png">
            <div slot="item-text">首页</div>
        </tabbaritem>
        <tabbaritem path="/category">
            <img slot="item-icon" src="@/assets/img/tabbar/分类.svg">
            <img slot="item-icon-active" src="@/assets/img/tabbar/second.png">
            <div slot="item-text">分类</div>
        </tabbaritem>
        <tabbaritem path="/cart">
            <img slot="item-icon" src="@/assets/img/tabbar/购物车-23.svg">
            <img slot="item-icon-active" src="@/assets/img/tabbar/thrid.png">
            <div slot="item-text">购物车</div>
        </tabbaritem>
        <tabbaritem path="/profile">
            <img slot="item-icon" src="@/assets/img/tabbar/我的.svg">
            <img slot="item-icon-active" src="@/assets/img/tabbar/four.png">
            <div slot="item-text">我的</div>
        </tabbaritem>
    </tabbar>
</template>

<script>
        import tabbar from "../../common/tabbar/tabbar";
        import tabbaritem from "../../common/tabbar/tabbaritem";
    export default {
        name: "miantabbar",
        components : {
            tabbar,
            tabbaritem
        }
    }
</script>

<style scoped>

</style>