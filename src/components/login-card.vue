<template>
    <view class="card">
        <!-- text -->
        <view class="text">
            <view>真材配好料 新鲜好味道</view>
            <view class="addvip">入会领券 尊享权益</view>
        </view>
        <!-- 登录 -->
        <view class="login"> 注册/登陆 </view>
    </view>
</template>

<script>
export default {
    name: 'SafeArea'
}
</script>

<style scoped>
.card {
    height: 158rpx;
    background: #fefefe;
    box-shadow: 27rpx 29rpx 38rpx 0rpx rgba(160, 160, 160, 0.5);
    border-radius: 19rpx;
    padding-left: 25rpx;
    padding-left: 50rpx;

    display: flex;
    justify-content: space-between; /* 元素左右分布 */
    align-items: center; /* 垂直居中对齐 */
    padding: 0 20rpx; /* 添加左右内边距 */
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 500;
    font-size: 19rpx;
    color: #565353;
    line-height: 27rpx;
}
.addvip {
    font-weight: 300;
    font-size: 27rpx;
    color: #565353;
    line-height: 38rpx;
    letter-spacing: 1px;
    margin-top: 20rpx;
}
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 148rpx;
    height: 44rpx;
    background: #3c3934;
    border-radius: 22rpx;
    font-weight: 500;
    font-size: 19rpx;
    color: #ffffff;
    line-height: 27rpx;
    text-align: center;
    font-style: normal;
}
</style>