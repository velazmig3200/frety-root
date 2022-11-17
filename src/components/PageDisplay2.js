import React, { Component } from "react";
import cc from "./styles/classChain";
import { tabData } from "./data";
import { musicData } from "./data2.js";

class PageDisplay extends Component {
	//variables (should be moved into state)
	result = [];
	result2 = [];
	elements = [];

	//get random song/artist items, add to elements[] and return them
	randomItem(dataPointer, len) {
		let getArtist = input => musicData.list.getArtist(input);
		let itemList = input => musicData.list[dataPointer](input);
		let randomInt1 = Math.floor(Math.random() * itemList("key").length);
		let item1 = {
			name: itemList("key")[randomInt1],
			...itemList()[itemList("key")[randomInt1]]
		};
		// "!.find()" returns true if it is a unique item
		!this.result.find(e => e.name == item1.name) && this.result.push(item1);

		if (this.result.length < len) {
			this.randomItem(dataPointer, len);
		} else {
			for (let i = 0; i < this.result.length; i++) {
				if (dataPointer == "song") {
					this.result[i].image = getArtist(this.result[i].name).image;
				}
				this.elements[i] = (
					<div
						key={i}
						className={cc("page", "listItem")}
						onClick={() => this.props.clickItem(this.result[i].name)}>
						<img
							loading="lazy"
							src={this.result[i].image}
							className={cc("page", "listItemImg")}></img>
						<p>{this.result[i].name}</p>
					</div>
				);
			}
		}
	}

	search(dataPointer, inputValue) {
		let itemList = input => musicData.list[dataPointer](input);
		let getArtist = input => musicData.list.getArtist(input);
		let maxLength1 = 20;
		itemList("key").length > 20 ? (maxLength1 = 20) : (maxLength1 = itemList("key").length);
		for (let i = 0; i < maxLength1; i++) {
			if (itemList("key")[i].toLowerCase().includes(inputValue.toLowerCase())) {
				let source;
				dataPointer == "artist"
					? (source = itemList()[itemList("key")[i]].image)
					: (source = getArtist(itemList("key")[i]).image);
				this.elements.push(
					<div
						key={i}
						className={cc("page", "listItem")}
						onClick={() => this.props.clickItem(this.result[i].name)}>
						<img loading="lazy" src={source} className={cc("page", "listItemImg")}></img>
						<p>{itemList("key")[i]}</p>
					</div>
				);
			}
		}
		return this.elements;
	}

	render() {
		const { artist, song, dataPointer, handleChange, value } = this.props;
		//reset arrays for re-render
		this.result = [];
		this.elements = [];
		//for default tabs, "artist" and "song"
		if (dataPointer == song || dataPointer == artist) {
			if (value == "") {
				this.randomItem(dataPointer, 4);
			} else {
				this.search(dataPointer, value);
			}
			return (
				<section className={cc("page", "pageWindow")}>
					<input
						type="text"
						value={value}
						onChange={handleChange}
						className={cc("page", "searchBar")}
						placeholder={`search ${dataPointer.toLowerCase()}`}
					/>
					<br />
					<div>{this.elements}</div>
				</section>
			);
		}
		//for other, not default, tabs
		if (Object.keys(musicData).includes(dataPointer)) {
			return <p style={{ color: "var(--highlight2)" }}>artist: {dataPointer}</p>;
		}
		return <p style={{ color: "var(--highlight2)" }}>song: {dataPointer}</p>;
	}
}

export default PageDisplay;
