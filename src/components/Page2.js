import React from "react";
import DisplayCards from "./DisplayCards";
import { musicData } from "./data2.js";
import cc from "./styles/classChain";

function Page2({ activePage }) {
	//default page
	if (activePage == "") {
		return (
			<div className={cc("page", "pageContainer1")}>
				<p style={{ color: "var(--highlight" }}>frety is now gluten free!</p>
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
		return <DisplayCards activePage={activePage} />;
	}

	//if it's a song
	return (
		<div className={cc("page", "pageContainer1")}>
			<p style={{ color: "var(--highlight2" }}>{activePage}</p>
		</div>
	);
}

export default Page2;
