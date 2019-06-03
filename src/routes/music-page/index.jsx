import React, {Component} from 'react';
import {connect} from "dva";

import fetchInject from "../../utils/fetchInject";

@connect()
@fetchInject
export default class musicPage extends Component {
	componentDidMount() {
		this.props.get('/search', {
			keywords:'海阔天空',
		}).then(res =>{
			console.log(res);
		}).catch(err =>{
			console.log('报错了')
			console.log(err);
		});
	}

	render() {
		return(
			<div>
				这是音乐播放器界面
			</div>
		);

	}
}