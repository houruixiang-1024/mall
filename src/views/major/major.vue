<template>
    <div id="home">
        <NavBar class="home-nav">  <div slot="center" >购物街</div>
        </NavBar>
        <scroll class="content" ref="scroll"
               :pull-up-load="true" :probe-type="3"
                @scroll="contentScroll" @pullingUp ="loadmore"
          >
          <MajorSwiper :banners="banners"></MajorSwiper>
          <RecommendView :recommends="recommends"></RecommendView>
          <feature-view></feature-view>
          <tab-control :titles="['流行','新款','精选']" class="tar-con" @tabClick="tabClick"></tab-control>
          <GoodsList :goods="goods[currentType].list"></GoodsList>
        </scroll>
        <back-top @click.native="backClick" v-show="isShow"></back-top>
    </div>

</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import MajorSwiper from "./majorComps/MajorSwiper";
    import RecommendView from "./majorComps/RecommendView";
    import FeatureView from "./majorComps/FeatureView";

    import TabControl from "../../components/content/tabControl/TabControl";
    import GoodsList from "@/components/content/goods/GoodsList";
    import BackTop from "@/components/content/backTop/BackTop";

    import scroll from "@/components/common/scroll/scroll";
    import {getHomeMultidata,getHomeGoods} from "../../network/major";

    export default {
        name: "Home",
        components: {
            NavBar,
            MajorSwiper,
            RecommendView,
            FeatureView,
            TabControl,
             GoodsList,
             scroll,
            BackTop
        },
        data(){
            return{
                banners : [],
                recommends : [],
                goods : {
                  'pop' : {page : 0 , list : []},
                  'new' : {page : 0 , list : []},
                  'sell' : {page : 0 , list : []},
                },
                currentType : 'pop',
                isShow : false
            }
        },
        created() {
            //1请求多个数据
            this.getHomeMultidara()
          //2请求商品数据
          this.getHomeGoods('pop');
          this.getHomeGoods('new');
          this.getHomeGoods('sell');
        },
      methods : {
          //-----------网络请求
          getHomeMultidara(){
            getHomeMultidata().then(res => {
              this.banners = res.data.data.banner.list;
              this.recommends =res.data.data.recommend.list;
            })
          },
          getHomeGoods(type){
            const page = this.goods[type].page + 1
            getHomeGoods(type,page).then(res => {
              this.goods[type].list.push(...res.data.data.list)
              this.goods[type].page +=1


            })
          },
        //----------------事件监听-----------
        tabClick(index){
          switch (index){
            case 0 :
              this.currentType = 'pop';
                  break
            case 1:
              this.currentType = 'new';
              break
            case 2:
              this.currentType = 'sell';
              break
          }
        },
        backClick(){
            this.$refs.scroll.scrollTo(0,0)
        },
        contentScroll(position){
          this.isShow = -position.y>1000 ? true : false
        },
        loadmore(){
          this.getHomeGoods(this.currentType)
          this.$refs.scroll.finshpulling()//结束上一次上拉  不结束无法进行下次上拉
        //  this.$refs.scroll.scroll.refresh()
        }
      }
    }
</script>

<style scoped>
/*scoped 只针对当前组件*/
    #home{
       /* padding-top: 44px;*/
        height: 100vh;
      position: relative;
    }
.home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
    .tar-con{
       /* position: sticky;  原生滚动失效*/
        top: 44px;
        z-index: 9;
    }
   /* .content{
      margin-top: 44px;
      height: calc(100% - 49px);
      overflow: hidden;
    }*/
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>