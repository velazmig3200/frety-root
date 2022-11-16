import React, { Component } from "react";
import cc from "./styles/classChain";
import { tabData } from "./data";

class PageDisplay extends Component {
	//variables (should be moved into state)
	result = [];
	elements = [];

	//get random song/artist items, add to elements[] and return them
	randomItem(dataPointer, len) {
		//path to random item
		let keys = Object.keys(tabData);
		let randomInt = Math.floor(Math.random() * keys.length);
		let item = tabData[keys[randomInt]]["songInfo"][dataPointer];
		//if item is !included already in result[], push(item)
		!this.result.includes(item) && this.result.push(item);

		//if (result.length < len) call again, else consolidate elements[] and result[]
		if (this.result.length < len) {
			this.randomItem(dataPointer, len);
		} else {
			for (let i = 0; i < this.result.length; i++) {
				this.elements[i] = (
					<div
						key={Math.random()}
						className={cc("page", "randomItem")}
						onClick={() => this.props.clickItem(this.result[i])}>
						<p>{this.result[i]}</p>
					</div>
				);
			}
			return this.elements;
		}
	}

	render() {
		const { Artist, Song, dataPointer } = this.props;
		//reset arrays for re-render
		this.result = [];
		this.elements = [];
		//for default tabs, "Artist" and "Song"
		if (dataPointer == Song || dataPointer == Artist) {
			this.randomItem(dataPointer, 3);
			return (
				<section>
					<input
						className={cc("page", "searchBar")}
						placeholder={`search ${dataPointer.toLowerCase()}`}
					/>
					<br />
					{this.elements}
				</section>
			);
		}
		//for other, not default, tabs
		if (Object.keys(tabData).includes(dataPointer.toLowerCase())) {
			return <p style={{ color: "var(--highlight2" }}>Song: {dataPointer}</p>;
		}
		return <p style={{ color: "var(--highlight2" }}>Artist: {dataPointer}</p>;
	}
}

export default PageDisplay;
