import React, { Component } from "react";
import PageDisplay from "./PageDisplay";
import PageDisplay2 from "./PageDisplay2";
import DefaultPage from "./DefaultPage";
import cc from "./styles/classChain";

class PageWindow extends Component {
	render() {
		//if no active page display defaultPage, else show active page
		const { Artist, Song, activePage, clickItem, handleChange, value } = this.props;
		if (activePage == "") {
			return <DefaultPage />;
		}
		return (
			<div>
				<PageDisplay2
					Artist={Artist}
					Song={Song}
					dataPointer={activePage}
					clickItem={clickItem}
					handleChange={handleChange}
					value={value}
				/>
			</div>
		);
	}
}

export default PageWindow;
