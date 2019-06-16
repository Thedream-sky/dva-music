import React, {Component} from 'react';
import {connect} from "dva";

import fetchInject from "../../utils/fetchInject";
import style from './index.less'


@connect()
@fetchInject
export default class musicPage extends Component {
	componentDidMount() {

	}

	render() {
		return(
			<div className={style["main-content"]}>
				音乐界面
			</div>
		);

	}
}