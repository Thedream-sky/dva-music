export default [
	{
		path: '/',
		component: () => import('./routes/main/IndexPage.js'),
	},
	{
		path: '/musicPage',
		component: () => import('./routes/music-page/index.jsx')
	}
]