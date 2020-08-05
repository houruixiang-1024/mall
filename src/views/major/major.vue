<template>
    <div id="home">
        <NavBar class="home-nav">
            <div slot="center" >购物街</div>
        </NavBar>
    </div>

</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import {getHomeMultidata} from "../../network/major";

    export default {
        name: "Home",
        components: {
            NavBar
        },
        data(){
            return{
                result : null ,
                banners : [],
                recommends : []
            }
        },
        created() {
            //1请求多个数据
            getHomeMultidata().then(res => {
                console.log(res)
                this.banners = res.data.data.banner.list;
                this.recommends =res.data.data.recommend.list;
            })
        }
    }
</script>

<style scoped>
.home-nav{
    background-color: var(--color-tint);
    color: #fff;
}
</style>