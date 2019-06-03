import React, {Component} from "react";
import fetch from './fetch'

const fetchInject = TargetComponent =>{
	return class extends Component{
		render() {
			return (
				<TargetComponent
					{...this.props}
					{...fetch}
				/>
			);
		}
	}
}

export default fetchInject;