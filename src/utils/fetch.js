import axios from 'axios';
import {BASE_URL} from "../configs/app.config";

// 创建实例时设置配置的默认值
/**
 * 自定义实例默认值
 */
var instance = axios.create({
	baseURL: BASE_URL,
	timeout: 3000, // 请求超时const
});

/**
 * 添加请求拦截器
 */
instance.interceptors.request.use((config) => {
	//请求前做操作
	const { params, headers } = config;

	//去除空的请求属性
	Object.keys(params).forEach(key =>{
		let value = params[key];
		if(value === '' || value === null || value === void 0){
			Reflect.deleteProperty(params, key);
		}
	})
	return config;
}, (error) => {
	return Promise.reject(error);
});

/**
 * 添加响应拦截器
 */
instance.interceptors.response.use((response)=>{
	//响应数据操作

	return response;
},(error)=>{
	return Promise.reject(error)
})


/**
 * get方法
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
const get = (url, params)=>{
	return new Promise((resolve, reject)=>{
		return  instance.get(url, { params }).then(res=>{
			resolve(res.data);
		}).catch(err =>{
			reject(err);
		})
	})
}

/**
 * post方法
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
const post = (url, params)=>{
	return new Promise((resolve, reject)=>{
		return instance.post(url, {...params}).then(res=>{
			resolve(res.data);
		}).catch(err =>{
			reject(err);
		})
	})
}

export default {
	get,
	post,
}


