import React, { Component } from "react";
import cc from "./styles/classChain";

class PageWindow extends Component {
	render() {
		return (
			<div>
				<p
					style={{ marginTop: "0px", color: "var(--main" }}
					className={cc("page", "border")}>
					Click on the tabs at the top to search artists, search
					songs, or view recent tabs.
				</p>
			</div>
		);
	}
}

export default PageWindow;
