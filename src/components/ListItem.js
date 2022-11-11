import React, { Component } from "react";
import cc from "./styles/classChain";

class ListItem extends Component {
	render() {
		const { dataPointer } = this.props;
		return (
			<div>
				<p>{dataPointer} = ListItem data pointer</p>
			</div>
		);
	}
}

export default ListItem;
