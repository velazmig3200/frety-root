import React, { Component } from "react";
import cc from "./styles/classChain";
import { tabData } from "./data";

class PageDisplay extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayedItems: [0]
		};
	}

	randomItem() {
		let keys = Object.keys(tabData);
		let length = keys.length;
		let randomInt = Math.floor(Math.random() * length);
		return keys[randomInt];
	}

	render() {
		const { Artist, Song, dataPointer } = this.props;
		const { searchBar } = this.state;
		if (dataPointer == Artist || dataPointer == Song) {
			return (
				<div>
					<input
						className={cc("page", "searchBar")}
						placeholder={`search ${dataPointer}`}
					/>
					<br />

					<section>
						<br />
						<p>{this.randomItem()}</p>
					</section>
					<section>
						<br />
						<p>{this.randomItem()}</p>
					</section>
				</div>
			);
		}
		return (
			<div>
				<p>{dataPointer} = PageDisplay data pointer</p>
			</div>
		);
	}
}

export default PageDisplay;
