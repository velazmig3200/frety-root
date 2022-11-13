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
					<section key={Math.random()} style={{ color: "var(--white" }}>
						<br />
						<p>{this.result[i]}</p>
					</section>
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
					<section key={Math.random()} style={{ color: "var(--white" }}>
						<br />
						<p>{this.result[i]}</p>
					</section>
				);
			}
			return this.elements;
		}
	}

	render() {
		const { Artist, Song, dataPointer } = this.props;
		this.result = [];
		if (dataPointer == Song) {
			this.randomSongItem(4);
			return (
				<section>
					<input className={cc("page", "searchBar")} placeholder={`search ${dataPointer}`} />
					<br />
					<section style={{ color: "var(--highlight2" }}>
						<br />
						<p>debug: {dataPointer}</p>
					</section>
					{this.elements}
				</section>
			);
		} else if (dataPointer == Artist) {
			this.randomArtistItem(3);
			return (
				<section>
					<input className={cc("page", "searchBar")} placeholder={`search ${dataPointer}`} />
					<br />
					<section style={{ color: "var(--highlight2" }}>
						<br />
						<p>debug: {dataPointer}</p>
					</section>
					{this.elements}
				</section>
			);
		}
		return <p style={{ color: "var(--highlight2" }}>debug: {dataPointer} = dataPointer</p>;
	}
}

export default PageDisplay;
