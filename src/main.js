import { createSSRApp } from "vue";
import App from "./App.vue";

export function createApp() {
    const app = createSSRApp(App);

    // 挂载 api 到 Vue 实例
    // app.config.globalProperties.$api = api;

    return {
        app
    };
}