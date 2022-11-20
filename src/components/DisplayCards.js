import React, { useState, useEffect } from "react";
import { musicData } from "./data2";
import cc from "./styles/classChain";

function DisplayCards({ activePage, value }) {
	const [page, setPage] = useState(activePage);
	let itemList = [];
	let result = [];
	value = value.toLowerCase();

	useEffect(() => {
		page != activePage && setPage(activePage);
	}, [activePage, page]);

	function getItemList(obj, key) {
		const randomInt = Math.floor(Math.random() * key.length);
		let maxLength = 20;
		let image;
		key.length < maxLength && (maxLength = key.length);

		if (activePage == "song") {
			image = musicData.list.getAlbum(key[randomInt]).image;
		} else {
			image = obj[key[randomInt]].image;
		}

		if (itemList.length < maxLength) {
			if (!itemList.find(e => e.name == key[randomInt])) {
				itemList = [...itemList, { name: key[randomInt], image: image }];
			}
			getItemList(obj, key);
		} else {
			getElements(itemList);
		}
	}

	function getElements(itemList) {
		for (let i in itemList) {
			result[i] = (
				<div key={i} className={cc("page", "card")}>
					<img src={itemList[i].image} className={cc("page", "cardImage")}></img>
					<p>{itemList[i].name}</p>
				</div>
			);
		}
	}

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
				console.log("artist:", activePage);
		}

		key.length > 0 && getItemList(obj, key);
		return <section className={cc("page", "cardContainer")}>{result}</section>;
	}

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
			console.log(activePage);
			break;
	}

	return <section className={cc("page", "cardContainer")}>{result}</section>;
}

export default DisplayCards;
