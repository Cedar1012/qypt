import { req } from './reuest.js'

// 导出添加的api接口方法
export function getCood(prompt) {
    return req.post('/common/sendSms', prompt)
}

export const STATUS_OK = '000'
const api = {
    STATUS_OK: STATUS_OK,
    getCood,
}

//导出请求对象 api
export default api