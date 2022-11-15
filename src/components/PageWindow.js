import React, { Component } from "react";
import PageDisplay from "./PageDisplay";
import DefaultPage from "./DefaultPage";
import cc from "./styles/classChain";

class PageWindow extends Component {
	render() {
		const { Artist, Song, activePage, clickSongItem } = this.props;
		if (activePage == "") {
			return <DefaultPage />;
		}
		return (
			<div className={cc("page", "pageWindow")}>
				<PageDisplay
					Artist={Artist}
					Song={Song}
					dataPointer={activePage}
					clickSongItem={clickSongItem}
				/>
			</div>
		);
	}
}

export default PageWindow;
