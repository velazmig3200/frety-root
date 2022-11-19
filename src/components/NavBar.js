import React, { useState } from "react";
import cc from "./styles/classChain";

function NavBar({ tabs, activePage, setActivePage }) {
	const [elements, setElements] = useState([]);

	function clickTab(tabName) {
		setElements([]);
		if (activePage == tabName) {
			setActivePage("");
			return;
		}
		setActivePage(tabName);
	}

	for (let i in tabs) {
		elements.push(
			<p
				key={i}
				className={cc("page", `navTab ${activePage == tabs[i]}?active1`)}
				onClick={() => clickTab(tabs[i])}>
				{tabs[i][0].toUpperCase()}
				{tabs[i].slice(1, tabs[i].length)}
			</p>
		);
	}

	return <nav className={cc("page", "navBar center")}>{elements}</nav>;
}

export default NavBar;
