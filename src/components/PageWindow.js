import React, { Component } from "react";
import ListItem from "./ListItem";
import DefaultPage from "./DefaultPage";
import cc from "./styles/classChain";

class PageWindow extends Component {
	render() {
		const { activePage } = this.props;
		if (activePage == "") {
			return <DefaultPage />;
		}
		return (
			<div className={cc("page", "pageWindow")}>
				<p style={{ color: "var(--highlight2)" }}>{activePage}</p>
				<br />
				<ListItem dataPointer={activePage} />
			</div>
		);
	}
}

export default PageWindow;
