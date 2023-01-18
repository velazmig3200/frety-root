import React, { useState } from "react";
import { musicData } from "./data2.js";
import cc from "./styles/classChain";

import DisplayCards from "./DisplayCards";
import SearchBar from "./SearchBar";
import DisplaySongInfo from "./DisplaySongInfo.js";
import NavBar from "./NavBar.js";
import DisplayTab from "./DisplayTab.js";

function Page2({ activePage, setActivePage, tabs, setTabs }) {
	const [value, setValue] = useState("");
	const [instrument, setInstrument] = useState(""); //currently active instrument

	//default page
	if (activePage == "") {
		return (
			<div className={cc("page", "pageContainer1")}>
				<br />
				<p>
					Click on the tabs at the top to search artists, songs, or view recent tabs.
				</p>
			</div>
		);
	}

	//if it's not a song ("artist", "song", or a specific artist)
	if (!musicData.list.song("key").includes(activePage)) {
		return (
			<div className={cc("page", "pageContainer")}>
				<SearchBar activePage={activePage} value={value} setValue={setValue} />
				<DisplayCards
					activePage={activePage}
					setActivePage={setActivePage}
					value={value}
					tabs={tabs}
					setTabs={setTabs}
				/>
			</div>
		);
	}

	//if it's a song, displayTab
	const getArtist = (searchItem, key) =>
		musicData.list.getArtist(searchItem, key); //getArtist
	const getAlbum = (searchItem, key) => musicData.list.getAlbum(searchItem, key); //getAlbum
	const songPath =
		musicData[getArtist(activePage, "key")]["album"][getAlbum(activePage, "key")][
			"song"
		][activePage]; //songPath
	const tabPath = songPath[instrument]; //tabPath

	return (
		<div className={cc("page", "pageContainer1")}>
			<DisplaySongInfo activePage={activePage} />
			<NavBar //navBar for instruments
				tabs={[...Object.keys(songPath)]} //get instruments
				activePage={instrument}
				setActivePage={setInstrument}
			/>
			<DisplayTab tab={tabPath} /> {/*current tab*/}
		</div>
	);
}

export default Page2;
