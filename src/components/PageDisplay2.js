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
		let dataPointer1 = dataPointer.toLowerCase();
		let getArtist = input => musicData.list.getArtist(input);
		let itemList = input => musicData.list[dataPointer1](input);
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
				if (dataPointer == "Song") {
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

	getArtistList(items) {
		let keys = Object.keys(tabData);
		for (let i = 0; i < keys.length; i++) {
			let Artist = tabData[keys[i]]["songInfo"]["Artist"];
			if (!items.includes(Artist)) {
				items.push(Artist);
			}
		}
		return items;
	}

	search(dataPointer, inputValue) {
		let keys = Object.keys(tabData);
		let maxLength;
		let items = [];
		if (dataPointer == "Song") {
			keys.length > 20 ? (maxLength = 20) : (maxLength = keys.length);
			for (let i = 0; i < maxLength; i++) {
				if (keys[i].includes(inputValue.toLowerCase())) {
					this.elements.push(
						<p key={i} className={cc("page", "listItem")}>
							{tabData[keys[i]]["songInfo"][dataPointer]}
						</p>
					);
				}
			}
			return this.elements;
		}
		this.getArtistList(items);
		items.length > 20 ? (maxLength = 20) : (maxLength = items.length);
		for (let i = 0; i < maxLength; i++) {
			if (items[i].toLowerCase().includes(inputValue.toLowerCase())) {
				this.elements.push(
					<p key={i} className={cc("page", "listItem")}>
						{items[i]}
					</p>
				);
			}
		}
		return this.elements;
	}

	render() {
		const { Artist, Song, dataPointer, handleChange, value } = this.props;
		//reset arrays for re-render
		this.result = [];
		this.elements = [];
		//for default tabs, "Artist" and "Song"
		if (dataPointer == Song || dataPointer == Artist) {
			if (value == "") {
				this.randomItem(dataPointer, 3);
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
			return <p style={{ color: "var(--highlight2)" }}>Artist: {dataPointer}</p>;
		}
		return <p style={{ color: "var(--highlight2)" }}>Song: {dataPointer}</p>;
	}
}

export default PageDisplay;
