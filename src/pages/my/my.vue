<template>
    <view class="bigbg" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <!-- 安全区 -->
        <SafeArea> </SafeArea>
        <!-- 个人信息区域 -->
        <view class="profile-section">
            <image src="/static/head.png" mode="scaleToFill" />
            <text class="username">张小乐</text>
        </view>

        <!-- 功能区 -->
        <view class="bigbox">
            <view class="cardbox">
                <!-- 优惠券 -->
                <!-- 版本号 -->
                <!-- 关于我们 -->
                <!-- 退出登录 -->
                <view class="menu-list">
                    <view
                        class="menu-item"
                        v-for="(item, index) in menuItems"
                        :key="index"
                        @tap="handleMenuClick(item.key)"
                    >
                        <view class="menu-item-content">
                            <view class="menu-item-left">
                                <image class="icon" :src="item.icon" />
                                <text class="menu-item-text">{{
                                    item.title
                                }}</text>
                            </view>
                            <image
                                class="icon"
                                src="/static/my/arrowhead.png"
                            />
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import SafeArea from '@/components/safe-area.vue'
import BackgroundImage from '@/static/ybcbg.jpg'
export default {
    components: {
        SafeArea
    },
    data() {
        return {
            backgroundImage: BackgroundImage,
            menuItems: [
                {
                    title: '优惠券',
                    icon: '/static/my/coupon.png',
                    key: 'coupon'
                },
                {
                    title: '版本号',
                    icon: '/static/my/version.png',
                    key: 'version'
                },
                {
                    title: '关于我们',
                    icon: '/static/my/about.png',
                    key: 'about'
                },
                {
                    title: '退出登录',
                    icon: '/static/my/exit.png',
                    key: 'logout'
                }
            ]
        }
    },
    methods: {
        handleMenuClick(key) {
            console.log('Menu item clicked:', key)
            // 在这里处理点击事件，例如导航到其他页面或显示提示信息
        }
    }
}
</script>

<style lang="scss" scoped>
.bigbg {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: -170px 0px;

    display: flex;
    flex-direction: column;
}
.profile-section {
    margin-top: 150rpx;
    margin-bottom: 120rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    font-size: 35rpx;
    color: #ff0000;
    line-height: 48rpx;
    text-align: center;
    font-style: normal;
}
.profile-section image {
    width: 233rpx;
    height: 233rpx;
    box-shadow: 13rpx 12rpx 19rpx 0rpx rgba(212, 210, 210, 0.5);
    border-radius: 50%;
}

.bigbox {
    padding: 0 30rpx;
}
.cardbox {
    background: #ffffff;
    box-shadow: 19rpx 19rpx 38rpx 0rpx rgba(212, 210, 210, 0.5);
    border-radius: 19rpx;
}

.menu-list {
    background-color: #ffffff;
    border-radius: 16rpx;
    margin: 0 30rpx;
    padding: 0 20rpx;
}

.menu-item {
    padding: 30rpx 0;
}

.menu-item:not(:last-child) {
    border-bottom: 1px solid #eeeeee;
}

.menu-item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-item-left {
    display: flex;
    align-items: center;
}

.menu-item-text {
    margin-left: 20rpx;
    font-size: 14px;
    color: #333333;
}

.icon {
    width: 40rpx;
    height: 40rpx;
}
</style>
    
      