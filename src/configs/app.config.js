const env = 'dev'; // 环境：开发 dev; 生产 release;


const envMap  ={
	dev: {
		BASE_URL: 'http://localhost:3000/' //本地
	},
	release: {
		BASE_URL: 'http://39.108.75.144:3000/'
	}
}

const _ENV = envMap[env];

export const BASE_URL = _ENV.BASE_URL;
