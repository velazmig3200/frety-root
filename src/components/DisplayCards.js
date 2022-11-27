import React, { useState, useEffect } from "react";
import { musicData } from "./data2";
import cc from "./styles/classChain";

function DisplayCards({ activePage, setActivePage, value, tabs, setTabs }) {
	const [page, setPage] = useState(activePage);
	let itemList = [];
	let elements = [];
	value = value.toLowerCase();

	useEffect(() => {
		page != activePage && setPage(activePage);
	}, [activePage, page]);

	function getItemList(obj, keys) {
		const randomInt = Math.floor(Math.random() * keys.length);
		let maxLength = 20;
		let image;
		keys.length < maxLength && (maxLength = keys.length);

		if (activePage == "song" || musicData.list.song("key").includes(keys[0])) {
			image = musicData.list.getAlbum(keys[randomInt]).image;
		} else {
			image = obj[keys[randomInt]].image;
		}

		if (itemList.length < maxLength) {
			if (!itemList.find(e => e.name == keys[randomInt])) {
				itemList = [...itemList, { name: keys[randomInt], image: image }];
			}
			getItemList(obj, keys);
		} else {
			//get elements
			for (let i in itemList) {
				elements[i] = (
					<div
						key={i}
						className={cc("page", "card")}
						onClick={() => {
							if (!tabs.includes(itemList[i].name)) {
								let newTabs = tabs.slice(0, 1);
								setTabs([itemList[i].name, ...newTabs]);
							}
							setActivePage(itemList[i].name);
						}}>
						<img src={itemList[i].image} className={cc("page", "cardImage")}></img>
						<p>{itemList[i].name}</p>
					</div>
				);
			}
		}
	}

	//search functionality
	if (value != "") {
		let obj = {};
		let key = [];
		let maxLength = 20;
		const list = musicData.list;

		switch (activePage) {
			case "artist":
				list.artist("key").forEach(e => {
					e.toLowerCase().includes(value) && key.length < maxLength && key.push(e); //key
				});
				key.forEach(e => (obj = { ...obj, ...{ [e]: musicData[e] } })); //obj
				break;
			case "song":
				list.song("key").forEach(e => {
					e.toLowerCase().includes(value) && key.length < maxLength && key.push(e); //key
				});
				key.forEach(e => (obj = { ...obj, ...{ [e]: musicData.list.song()[e] } }));
				break;
			default:
				console.log(activePage, musicData[activePage]);
		}

		key.length > 0 && getItemList(obj, key);
		return <section className={cc("page", "cardContainer")}>{elements}</section>;
	}

	//regular display
	switch (activePage) {
		case "artist":
			const artist = key => musicData.list.artist(key);
			getItemList(artist(), artist("key"));
			break;
		case "song":
			const song = key => musicData.list.song(key);
			getItemList(song(), song("key"));
			break;
		default:
			let obj = {};
			let keys = [];
			for (let i in musicData[activePage]["album"]) {
				let path = musicData[activePage]["album"][i].song;
				obj = { ...obj, ...path }; //obj
				keys = [...keys, ...Object.keys(path)]; //key
			}
			getItemList(obj, keys);
			break;
	}

	return <section className={cc("page", "cardContainer")}>{elements}</section>;
}

export default DisplayCards;
