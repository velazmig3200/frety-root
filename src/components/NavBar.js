import React, { useState, useEffect } from "react";
import cc from "./styles/classChain";

function NavBar({ tabs, activePage, setActivePage }) {
	let elements = [];

	for (let i in tabs) {
		elements.push(
			<p
				key={i}
				className={cc("page", `navTab ${activePage == tabs[i]}?active1`)}
				onClick={() => {
					if (activePage == tabs[i]) {
						setActivePage("");
					} else {
						setActivePage(tabs[i]);
					}
				}}>
				{tabs[i][0].toUpperCase()}
				{tabs[i].slice(1, tabs[i].length)}
			</p>
		);
	}

	return <nav className={cc("page", "navBar center")}>{elements}</nav>;
}

export default NavBar;
