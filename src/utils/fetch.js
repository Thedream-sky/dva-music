import axios from 'axios';
import {BASE_URL} from "../configs/app.config";
import React, {Component} from 'react';

// 创建实例时设置配置的默认值
/**
 * 自定义实例默认值
 */
var instance = axios.create({
	baseURL: BASE_URL,
	timeout: 3000, // 请求超时const
});

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
