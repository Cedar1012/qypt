<template>
    <view class="safe-area">
        <slot></slot>
    </view>
</template>

<script>
export default {
    name: 'SafeArea'
}
</script>

<style scoped>
.safe-area {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    box-sizing: border-box;
}
</style>