import React, {Component} from 'react';
import {Toast} from 'antd-mobile';

/**
 * 路由代码分割，加载页面js的loading
 */
export default class LoadingPage extends Component {
    constructor(props) {
        super(props);
        Toast.loading('加载中...', 0);
    }

    componentWillUnmount() {
        Toast.hide();
    }

    render() {
        return (
            <div/>
        );
    }
}
