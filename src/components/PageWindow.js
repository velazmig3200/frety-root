import React, { Component } from "react";
import PageDisplay from "./PageDisplay";
import DefaultPage from "./DefaultPage";
import cc from "./styles/classChain";

class PageWindow extends Component {
	render() {
		//if no active page display defaultPage, else show active page
		const { Artist, Song, activePage, clickItem } = this.props;
		if (activePage == "") {
			return <DefaultPage />;
		}
		return (
			<div className={cc("page", "pageWindow")}>
				<PageDisplay
					Artist={Artist}
					Song={Song}
					dataPointer={activePage}
					clickItem={clickItem}
				/>
			</div>
		);
	}
}

export default PageWindow;
