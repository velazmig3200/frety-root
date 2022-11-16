import React, { Component } from "react";
import cc from "./styles/classChain";
import { tabData } from "./data";

class PageDisplay extends Component {
	//variables (should be moved into state)
	result = [];
	elements = [];
	pointerTracker = this.props.Artist;

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
						className={cc("page", "listItem")}
						onClick={() => this.props.clickItem(this.result[i])}>
						<p>{this.result[i]}</p>
					</div>
				);
			}
			return this.elements;
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
						<p key={Math.random()} className={cc("page", "listItem")}>
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
					<p key={Math.random()} className={cc("page", "listItem")}>
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
				<section>
					<input
						type="text"
						value={value}
						onChange={handleChange}
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
