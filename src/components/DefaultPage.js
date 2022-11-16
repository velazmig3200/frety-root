import React, { Component } from "react";
import cc from "./styles/classChain";

class DefaultPage extends Component {
	render() {
		return (
			<div className={cc("page", "defaultPage")}>
				<p style={{ color: "var(--highlight)" }}>frety is now gluten free!</p>
				<br />
				<p>
					Click on the tabs at the top to search artists, search songs, or view recent tabs.
				</p>
			</div>
		);
	}
}

export default DefaultPage;
