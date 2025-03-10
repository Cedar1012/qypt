import { createSSRApp } from "vue";
import App from "./App.vue";
import api from '@/utils/api.js';

export function createApp() {
    const app = createSSRApp(App);

    // 挂载 api 到 Vue 实例
    app.config.globalProperties.$api = api;

    return {
        app
    };
}