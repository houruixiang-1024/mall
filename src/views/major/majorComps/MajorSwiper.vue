<template>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from "../../../components/common/swiper/index"
    export default {
        name: "MajorSwiper",
        props: {
            banners : {
                type : Array,
                default(){
                    return []
                }
            }
        },
        components : {
            SwiperItem,
            Swiper
        }
    }
</script>

<style scoped>

</style>