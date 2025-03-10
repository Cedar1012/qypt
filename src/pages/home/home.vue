// filepath: /Users/xs/work/qypt/src/pages/index/index.vue
<template>
    <view class="container">
        <!-- 轮播 -->
        <view class="top">
            <SafeArea> </SafeArea>
            <SwiperComponent></SwiperComponent>
        </view>

        <view
            class="ybcbg"
            :style="{ backgroundImage: `url(${backgroundImage})` }"
        >
            <view class="content">
                <!-- 登录 -->
                <LoginCard class="loginbox"></LoginCard>
                <!-- 优惠券 -->
                <CoolcCoupon
                    v-for="(item, index) in coupon[0].list"
                    :key="index"
                    v-bind:item="item"
                    theme="#ff0000"
                ></CoolcCoupon>
            </view>
        </view>
    </view>
</template>

<script>
import SwiperComponent from '@/components/swiper-component.vue'
import CoolcCoupon from '@/components/coolc-coupon.vue'
import LoginCard from '@/components/login-card.vue'
import SafeArea from '@/components/safe-area.vue'
import BackgroundImage from '@/static/ybcbg.jpg'

export default {
    components: {
        SwiperComponent,
        SafeArea,
        LoginCard,
        CoolcCoupon
    },
    data() {
        return {
            backgroundImage: BackgroundImage,
            coupon: [
                {
                    list: [
                        {
                            url: '/pages/brand/index/id/1',
                            money: '150',
                            title: '满2000减150元',
                            ticket: 'YMC_5c929fbf47235',
                            seller_name: '渝拌川优惠券',
                            end_time: '2019-04-20 01:51:20',
                            state: '1'
                        }
                    ]
                }
            ]
        }
    },
    onLoad() {},
    methods: {}
}
</script>

<style>
.container {
    width: 100%;
    height: 100vh;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
}
.top {
    width: 100%;
    height: 625rpx;
    background: linear-gradient(180deg, #ff0000 0%, rgba(255, 0, 0, 0) 100%);
}
.ybcbg {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    flex: 1;
    display: flex;
    flex-direction: column;
}

.loginbox {
    position: relative;
    top: -79rpx;
}

.content {
    margin: 0 30rpx;
}
</style>