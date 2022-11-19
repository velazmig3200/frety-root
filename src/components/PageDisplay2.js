import React, { Component } from "react";
import cc from "./styles/classChain";
import { musicData } from "./data2.js";

class PageDisplay extends Component {
	//variables (should be moved into state)
	result = [];
	stackSize = 0;
	elements = [];

	//get random song/artist items, add to elements[] and return them
	randomItem(dataPointer, len) {
		this.stackSize++;
		let getArtist;
		let itemList;
		let randomInt;
		let item;
		if (this.stackSize > 50) {
			console.log(this.stackSize);
			this.stackSize = 0;
			return;
		}
		if (musicData.list.artist("key").includes(dataPointer)) {
			item = this.artistRandomItem(dataPointer);
		} else {
			getArtist = input => musicData.list.getArtist(input);
			itemList = input => musicData.list[dataPointer](input);
			randomInt = Math.floor(Math.random() * itemList("key").length);
			item = {
				name: itemList("key")[randomInt],
				...itemList()[itemList("key")[randomInt]]
			};
		}
		// "!.find()" returns true if it is a unique item
		!this.result.find(e => e.name == item.name) && this.result.push(item);

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

	artistRandomItem(dataPointer) {
		let itemList = () => musicData.list.artist();
		let artistAlbums = itemList()[dataPointer]["album"];
		let artistSongs = [];
		let albumObj = {};
		let item = {};
		// get list of artist songs
		for (let i in artistAlbums) {
			artistSongs = [...artistSongs, ...Object.keys(artistAlbums[i]["song"])];
		}
		// get random artistSong
		let randomInt = Math.floor(Math.random() * artistSongs.length);
		artistSongs[randomInt] == undefined ? (artistSongs[randomInt] = "") : "";
		// get song album object
		for (let i in artistAlbums) {
			if (Object.keys(artistAlbums[i]["song"]).includes(artistSongs[randomInt])) {
				albumObj = { ...artistAlbums[i] };
			}
		}
		item = {
			name: artistSongs[randomInt],
			// ...itemList()[dataPointer], // get artist image / conflicts with album image
			...albumObj
		};
		return item; //return an object with randomItem.name and randomItem.artist.image
	}

	search(dataPointer, inputValue) {
		let itemList;
		let keys;
		let source;
		// if (musicData.list.artist("key").includes(inputValue)) {
		if (dataPointer != "song" && dataPointer != "artist") {
			let artistAlbums = musicData.list.artist()[dataPointer]["album"];
			let artistSongs = {};
			// get list of artist songs
			for (let i in artistAlbums) {
				artistSongs = { ...artistSongs, [i]: artistAlbums[i] };
			}
			// return (itemList = artistSongs);
			itemList = artistSongs;
			keys = Object.keys(itemList);
		} else {
			itemList = input => musicData.list[dataPointer](input);
			keys = Object.keys(itemList());
		}
		let getArtist = input => musicData.list.getArtist(input);
		let maxLength1 = 20;
		keys.length > 20 ? (maxLength1 = 20) : (maxLength1 = keys.length);
		for (let i = 0; i < maxLength1; i++) {
			if (dataPointer != "artist" && dataPointer != "song") {
				Object.keys(itemList[keys[i]].song).forEach(e => {
					if (e.toLowerCase().includes(inputValue.toLowerCase())) {
						source = itemList[keys[i]].image; // image
						let name = e; //name
						this.elements.push(
							<div
								key={name}
								className={cc("page", "listItem")}
								onClick={() => this.props.clickItem(keys[i])}>
								<img loading="lazy" src={source} className={cc("page", "listItemImg")}></img>
								<p>{name}</p>
							</div>
						);
					}
				});
			} else if (keys[i].toLowerCase().includes(inputValue.toLowerCase())) {
				switch (dataPointer) {
					case "artist":
						source = itemList()[keys[i]].image;
						break;
					case "song":
						source = getArtist(keys[i]).image;
						break;
					default:
					// source = itemList[keys[i]].image;
					// source = "";
					// this.result[i].name = "name";
					// console.log(this.result[i]);
				}
				this.elements.push(
					<div
						key={i}
						className={cc("page", "listItem")}
						onClick={() => this.props.clickItem(keys[i])}>
						<img loading="lazy" src={source} className={cc("page", "listItemImg")}></img>
						<p>{keys[i]}</p>
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
		if (!musicData.list.song("key").includes(dataPointer)) {
			value == "" ? this.randomItem(dataPointer, 4) : this.search(dataPointer, value);

			return (
				<section className={cc("page", "pageWindow")}>
					<input
						type="text"
						value={value}
						onChange={handleChange}
						className={cc("page", "searchBar")}
						placeholder={`search ${dataPointer}`}
					/>
					<br />
					<div>{this.elements}</div>
				</section>
			);
		}
		return <p style={{ color: "var(--highlight2)" }}>song: {dataPointer}</p>;
	}
}

export default PageDisplay;
