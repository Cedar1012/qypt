<template>
    <view class="swiper-container">
        <swiper
            :indicator-dots="true"
            :autoplay="true"
            interval="3000"
            duration="500"
            circular="true"
        >
            <swiper-item v-for="(slide, index) in slides" :key="index">
                <image class="slide-image" :src="slide.image" mode="center" />
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
export default {
    name: 'MySwiper',
    data() {
        return {
            slides: [
                { image: '/static/ybclogo.png', title: 'Slide 1' },
                { image: '/static/ybclogo.png', title: 'Slide 1' },
                { image: '/static/ybclogo.png', title: 'Slide 1' }
            ]
        }
    }
}
</script>

<style scoped>
.swiper-container {
    width: 100%;
    height: 300rpx; /* 确保 swiper 容器有高度 */
    margin-top: 100rpx;
}
.swiper-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* 确保 swiper 项目占满容器高度 */
}
.slide-image {
    width: 100%;
    height: 100%;
}
</style>