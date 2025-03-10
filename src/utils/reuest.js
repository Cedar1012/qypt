let Fly
//微信小程序
//#ifdef MP-WEIXIN
Fly = require('flyio/dist/npm/wx')
//#endif

//APP版本
//#ifdef APP-PLUS
Fly = require("flyio/dist/npm/weex")
//#endif

//支付宝小程序
//#ifdef MP-ALIPAY
Fly = require('flyio/dist/npm/ap')
//#endif

// H5版本
// #ifdef H5
Fly = require('flyio/dist/npm/fly')
//#endif

//声明请求
let fly = new Fly()
//应用配置
import siteInfo from '@/siteInfo.js';
// import {
// 	getToken,
// 	removeTokenAndAccount
// } from "./auth.js";


//获取地址栏指定参数的值
// function requestGetUrlParam(strName, strHref, strDefault) {
// 	if (strHref == null || strHref.length < 1) {
// 		strHref = window.location.href;
// 	}
// 	var intPos = strHref.indexOf("?");
// 	var strRight = strHref.substr(intPos + 1);
// 	var arrTmp = strRight.split("&");
// 	for (var i = 0; i < arrTmp.length; i++) {
// 		var arrTemp = arrTmp[i].split("=");
// 		if (arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
// 	}
// 	return strDefault;
// }

//剔除地址栏指定参数及值
function requestDelUrlParam(strName, strHref) {
	if (strHref == null || strHref.length < 1) {
		strHref = window.location.href;
	}
	var intPos = (strHref + "?").indexOf("?");
	var strRight = strHref.substr(intPos + 1);
	var arrTmp = strRight.split("&");
	var hrefstr = "?";
	for (var i = 0; i < arrTmp.length; i++) {
		var arrTemp = arrTmp[i].split("=");
		if (arrTemp[0].toUpperCase() == strName.toUpperCase()) {} else {
			hrefstr += arrTmp[i] + "&";
		}
	}
	hrefstr = hrefstr.substr(0, hrefstr.lastIndexOf('&'));
	return hrefstr;
}

//定义构造请求地址函数
const isWq = false; //是否构造微擎地址
/* 适配H5端 */
// if (!siteInfo.uniacid) {
// 	siteInfo.uniacid = requestGetUrlParam('i');
// }
if (!siteInfo.server_host) {
	siteInfo.server_host = window.location.protocol + '//' + window.location.hostname;
}
//格式化请求路径
const formatUrl = function(url) {
	url = `${siteInfo.app_name}/${url}`;
	if (isWq) {
		let model_name = "this_report";
		url =
			`${siteInfo.server_host}/app/index.php?i=${siteInfo.uniacid}&union=${siteInfo.union}&union_id=${siteInfo.union_id}&v=${siteInfo.app_version}&from=wxapp&c=entry&a=wxapp&do=api&m=${siteInfo.module_name}&s=${url}`;
		return url;
	} else {
		url =
			`${siteInfo.server_host}/${url}?i=${siteInfo.uniacid}&union=${siteInfo.union}&union_id=${siteInfo.union_id}`;
		return url
	}
}
//设置请求数据类型 application/x-www-form-urlencoded,application/json,text/xml,multipart/form-data
const contentType = function(type) {
	if (type == 'json') {
		fly.config.headers['Content-Type'] = 'application/json; charset=utf-8';
	} else if (type == 'xml') {
		fly.config.headers['Content-Type'] = 'text/xml';
	} else if (type == 'file') {
		fly.config.headers['Content-Type'] = 'multipart/form-data';
	} else {
		fly.config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	}
}
//设置请求基地址
fly.config.baseURL = siteInfo.server_host;
//设置超时时间 毫秒
fly.config.timeout = 30000;
// 配置请求拦截器
fly.interceptors.request.use((config) => {
	// config.headers["Authorization"] = getToken();
	//config.headers["version"] = siteInfo.app_version;//h5不兼容  
	return config;
});
//配置响应拦截器
fly.interceptors.response.use(async function(response) {
		let res = response.data;
		//console.log('响应拦截', res);
		uni.hideLoading();
		let msg = '数据响应异常！';
		// code:0正常 1错误
		if (res.code === 0) {
			return res;
		} else if (res.code === 1) {
			msg = res.msg;
		} else if (res.code === 100) { //授权异常
			msg = res.msg;
			removeTokenAndAccount();
		} else if (res.code === 101) { //登录异常 token过期、token销毁
			msg = res.msg;
			removeTokenAndAccount();
		} else if (res.code === 104) { //无权限
			msg = res.msg;
		} else {
			msg = res.msg;
		}
		uni.showModal({
			title: '响应错误提示',
			content: msg,
			showCancel: false,
			success: ress => {
				if (ress.confirm) {
					if (res.code === 100 || res.code === 101) {
						uni.redirectTo({
							url: '/pages/login/login'
						});
					}
				}
			}
		})
		return false;
	},
	(err) => {
		//console.log('err:', err)
		uni.hideLoading();
		let msg = '网络响应状态异常！';
		//发生网络错误异常
		if (err.status === 0) {
			msg = '网络错误，请刷新后重试！';
		} else if (err.status === 1) {
			msg = '网络响应超时，请刷新后重试！';
		} else if (err.status === 500) {
			msg = '服务器响应500，请检测服务！';
		} else if (err.status === 404) {
			msg = 'API不存在！';
		} else if (err.status === 400) {
			msg = '请求参数错误！';
		} else if (err.status === 401) {
			msg = '没有访问权限！';
		} else if (err.status === 403) {
			msg = '禁止访问！';
		}
		uni.showModal({
			title: '网络响应状态异常',
			content: msg,
			showCancel: false,
			success: res => {}
		})
		return Promise.reject(false);
	});
//请求接口
const req = {
	//全路径 请求
	async postUrl(url, param, type = '') {
		uni.showLoading({
			title: '加载中...',
			mask: true,
		});
		contentType(type);
		return await fly.post(url, param)
			.then(function(res) {
				return res;
			}).catch(function(err) {
				return err;
			})
	},
	async post(url, param, type = '') {
		uni.showLoading({
			title: '加载中...',
			mask: true,
		});
		contentType(type);
		url = formatUrl(url);
		return await fly.post(url, param)
			.then(function(res) {
				return res;
			}).catch(function(err) {
				return err;
			})
	},
	async get(url, param, type = '') {
		uni.showLoading({
			title: '加载中...',
			mask: true,
		});
		contentType(type);
		url = formatUrl(url);
		return await fly.get(url, param)
			.then(function(res) {
				return res;
			})
			.catch(function(err) {
				return err;
			})
	}
}

export {
	fly,
	req,
	// getToken,
	formatUrl
}