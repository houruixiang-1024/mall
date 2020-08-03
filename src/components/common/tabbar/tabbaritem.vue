<template>
    <div class="tab-bar-item" @click="itemclick">
        <div v-if="!isactive">
            <slot  name="item-icon"></slot>
        </div>
        <div v-else>
            <slot   name="item-icon-active"></slot> <!--活动时的图片-->
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabbaritem",
        props : {
            path : String,
            activecolor : {
                type : String,
                default : '#42b983'
            }
        },
        data(){
            return{
               // isactive : true,
            }
        },
        computed : {
            isactive(){
                return this.$route.path.indexOf(this.path) !== -1/*那个活跃拿到那个  */
            },
            activeStyle(){
                return this.isactive ? {color : this.activecolor} : {}
            }
        },
        methods : {
            itemclick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        height: 49px;
        text-align: center;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
       margin-bottom: 1px;
    }

</style>