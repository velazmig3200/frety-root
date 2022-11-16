import React, { Component } from "react";
import cc from "./styles/classChain";
import { tabData } from "./data";

class PageDisplay extends Component {
	result = [];
	elements = [];

	randomSongItem(len) {
		let keys = Object.keys(tabData);
		let randomInt = Math.floor(Math.random() * keys.length);
		let song = tabData[keys[randomInt]]["songInfo"]["Song"];
		!this.result.includes(song) && this.result.push(song);

		if (this.result.length < len) {
			this.randomSongItem(len);
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

	randomArtistItem(len) {
		let keys = Object.keys(tabData);
		let randomInt = Math.floor(Math.random() * keys.length);
		let Artist = tabData[keys[randomInt]]["songInfo"]["Artist"];
		!this.result.includes(Artist) && this.result.push(Artist);

		if (this.result.length < len) {
			this.randomArtistItem(len);
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
		this.result = [];
		this.elements = [];
		//for default tabs, "Artist" and "Song"
		if (dataPointer == Song || dataPointer == Artist) {
			dataPointer == Song ? this.randomSongItem(4) : this.randomArtistItem(3);
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
