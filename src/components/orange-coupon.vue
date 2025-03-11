<template>
    <view class="ycoupon">
        <view class="concentbox">
            <!-- 钱 按钮 -->
            <view class="moneybtn">
                <view>
                    <view class="moneytext">¥150</view>
                    <view class="youxiaoqi"
                        >有效期:2025-03-01 - 2025-08-08</view
                    >
                </view>
                <view
                    class="get-btn"
                    :style="{
                        color: color,
                        borderColor: color,
                        background: solid
                    }"
                    :url="item.url"
                    >立即领取</view
                >
            </view>
            <!-- 满减 -->
            <view class="describetext">满2000减150元</view>
        </view>
    </view>
</template>
<script>
</script>
<style>
.ycoupon {
    background-image: url('@/static/image_bg_youhui_yes.png');
    background-size: 100% 100%; /* 背景图片完全拉伸以适应容器 */
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 200rpx;
}

.concentbox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200rpx;
}

.moneybtn {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    padding: 30rpx 30rpx 0 30rpx;
}

.moneytext {
    font-size: 50upx;
    line-height: 50upx;
    color: #ffffff;
    font-weight: bold;
}
.youxiaoqi {
    font-size: 24upx;
    color: #ffffff;
}
.get-btn {
    width: 146upx;
    height: 52upx;
    line-height: 50upx;
    text-align: center;
    border-radius: 60upx;
    /* color: #ff9000; */
    /* border: 1px solid #ff9000; */
    color: #ffffff;
    border: 1px solid #ffffff;
    font-size: 24upx; /* 使用具体的字体大小 */
    margin-left: 20upx;
}

.describetext {
    font-size: 30upx; /* 使用具体的字体大小 */
    color: #fb7b6d;
    margin: 0 0 20rpx 30rpx;
}
</style>