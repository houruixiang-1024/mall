<template>
  <div class="wrapper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
name: "scroll",
  props : {
    probeType: {
      type : Number,
      default : 0
    },
    pullUpLoad : {
      type : Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll : null
    }
  },
  mounted() {
  this.scroll = new BScroll(this.$refs.warpper,{
    probeType : this.probeType,
    pullUpLoad: this.pullUpLoad,
    click : true
  })
    //监听滚动位置
  this.scroll.on('scroll',(position) => {
    this.$emit('scroll',position)
  })
  //监听上拉事件
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })


  },
  methods : {
  scrollTo(x,y,time = 500){
    this.scroll.scrollTo(x,y,time)
  },
  finshpulling(){
    this.scroll.setTimeout(this.scroll.finishPullUp(),500)
    this.scroll.setTimeout(this.scroll.refresh(),500)
  }
  }
}
</script>

<style scoped>

</style>