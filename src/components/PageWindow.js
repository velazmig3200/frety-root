import React, { Component } from "react";
import PageDisplay from "./PageDisplay";
import DefaultPage from "./DefaultPage";
import cc from "./styles/classChain";

class PageWindow extends Component {
	render() {
		const { Artist, Song, activePage } = this.props;
		if (activePage.trim() == "") {
			return <DefaultPage />;
		}
		return (
			<div className={cc("page", "pageWindow")}>
				<PageDisplay
					Artist={Artist}
					Song={Song}
					dataPointer={activePage}
				/>
			</div>
		);
	}
}

export default PageWindow;
