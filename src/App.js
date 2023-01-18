import React, { useState } from "react";
import Header from "./components/Header";
import Page2 from "./components/Page2";
import NavBar from "./components/NavBar";
import cc from "./components/styles/classChain";

function App() {
	const [activePage, setActivePage] = useState("");
	const [tabs, setTabs] = useState([]);

	return (
		<div>
			<div className={cc("header", "bgImageContainer")}>
				<img
					className={cc("header", "bgImage")}
					src="https://toppng.com//public/uploads/preview/guitar-strings-neck-guitar-frets-blur-115702405187ynykwgayv.jpg"></img>
			</div>
			<Header />
			<NavBar
				tabs={tabs}
				defaultTabs={["artist", "song"]}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
			<Page2
				activePage={activePage}
				setActivePage={setActivePage}
				tabs={tabs}
				setTabs={setTabs}
			/>
		</div>
	);
}

export default App;
