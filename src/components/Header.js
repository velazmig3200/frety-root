import React, { Component } from "react";
import cc from "./styles/classChain";

class Header extends Component {
	render() {
		return (
			<h1 className={cc("header", "header")}>
				<span style={{ color: "var(--dark)" }}>frety</span>
				<span style={{ color: "var(--main)" }}>frety</span>
				<span style={{ color: "var(--highlight)" }}>frety</span>
			</h1>
		);
	}
}

export default Header;
