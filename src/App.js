import React, { Component, useState } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import Page2 from "./components/Page2";
import NavBar from "./components/NavBar";
import cc from "./components/styles/classChain";

function App() {
	const [activePage, setActivePage] = useState("");

	return (
		<div className={cc("header", "")}>
			<div className={cc("header", "bgImageContainer")}>
				<img
					className={cc("header", "backgroundImage")}
					src="https://toppng.com//public/uploads/preview/guitar-strings-neck-guitar-frets-blur-115702405187ynykwgayv.jpg"></img>
			</div>
			<Header />
			<NavBar
				tabs={["artist", "song"]}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
			<Page2 activePage={activePage} />

			{/* <Page artist="artist" song="song" /> */}
		</div>
	);
}

export default App;
