import React, { useState } from "react";
import DisplayCards from "./DisplayCards";
import SearchBar from "./SearchBar";
import { musicData } from "./data2.js";
import cc from "./styles/classChain";

function Page2({ activePage, setActivePage, tabs, setTabs }) {
	const [value, setValue] = useState("");
	//default page
	if (activePage == "") {
		return (
			<div className={cc("page", "pageContainer1")}>
				<br />
				<p>
					Click on the tabs at the top to search artists, search songs, or view
					recent tabs.
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

	//if it's a song
	return (
		<div className={cc("page", "pageContainer1")}>
			<p style={{ color: "var(--highlight2" }}>{activePage}</p>
		</div>
	);
}

export default Page2;
