import React, { Component } from "react";
import cc from "./styles/classChain";

class Header extends Component {
	render() {
		return (
			<h1 className={cc("header", "header")}>
				<span className={cc("header", "span1")}>frety</span>
				<span className={cc("header", "span2")}>frety</span>
				<span className={cc("header", "span3")}>frety</span>
			</h1>
		);
	}
}

export default Header;
