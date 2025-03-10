<template>
    <view class="coupon-item">
        <view class="coupon-money">
            <view class="nick">{{ item.seller_name }}</view>
            <view class="layof" :style="{ color: theme }"
                >￥{{ item.money }}</view
            >
            <view class="end_time">{{ item.end_time }}前使用</view>
            <view class="tit">券号：{{ item.ticket }}</view>
            <view class="demand">{{ item.title }}</view>
        </view>
        <navigator
            class="get-btn"
            :style="{ color: color, borderColor: color, background: solid }"
            :url="item.url"
            >立即领取</navigator
        >
    </view>
</template>

<script>
export default {
    name: 'CoolcCoupon',
    props: {
        item: {
            type: Object,
            required: true
        },
        theme: {
            type: String,
            default: '#ff9000'
        },
        solid: {
            type: String,
            default: '#ffffff'
        },
        color: {
            type: String,
            default: '#ff9000'
        }
    }
}
</script>

<style scoped>
.coupon-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10upx;
    padding: 20upx;
    border: 1px solid #eeeeee;
    background: #ffffff;
    position: relative;
}
.coupon-money {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 26upx 0;
    border-right: 1px dotted #eeeeee;
}
.nick,
.tit,
.demand,
.end_time {
    width: 100%;
    height: 30upx;
    line-height: 30upx;
    font-size: 24upx; /* 使用具体的字体大小 */
    color: #999999; /* 使用具体的颜色 */
}
.layof {
    width: 100%;
    height: 48upx;
    line-height: 48upx;
    font-size: 44upx;
    color: #ff9000;
    font-weight: bold;
}
.get-btn {
    width: 146upx;
    height: 52upx;
    line-height: 50upx;
    text-align: center;
    border-radius: 60upx;
    color: #ff9000;
    border: 1px solid #ff9000;
    font-size: 24upx; /* 使用具体的字体大小 */
    margin-left: 20upx;
}
</style>