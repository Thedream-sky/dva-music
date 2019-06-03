import Loadable from 'react-loadable';
import LoadPage from '../loading-page'

/**
 * 添加加载页面
 */

export default (component) => Loadable({
	loader: component,
	loading: LoadPage,
});