import React from "react";
import { musicData } from "./data2";
import cc from "./styles/classChain";

function DisplaySongInfo({ activePage }) {
	const getArtist = (searchItem, key) =>
		musicData.list.getArtist(searchItem, key);
	const getAlbum = (searchItem, key) => musicData.list.getAlbum(searchItem, key);

	return (
		<section className={cc("page", "songInfoContainer")}>
			<img
				className={cc("page", "songInfoImage")}
				src={getAlbum(activePage).image}></img>
			<div className={cc("page", "details")}>
				<p>{getArtist(activePage, "key")}</p>
				<p>{getAlbum(activePage, "key")}</p>
				<p>{getAlbum(activePage).release}</p>
				<p>{activePage}</p>
			</div>
		</section>
	);
}

export default DisplaySongInfo;
