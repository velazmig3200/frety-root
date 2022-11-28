import React, { useState, useEffect } from "react";
import cc from "./styles/classChain";

function NavBar({ tabs, defaultTabs, activePage, setActivePage }) {
	let elements = [];

	//for default tabs, "artist", "song"
	if (defaultTabs) {
		for (let i = 0; i < defaultTabs.length; i++) {
			elements.push(
				<p
					key={elements.length}
					className={cc("page", `navTab ${activePage == defaultTabs[i]}?active1`)}
					onClick={() => {
						if (activePage == defaultTabs[i]) {
							setActivePage("");
						} else {
							setActivePage(defaultTabs[i]);
						}
					}}>
					{defaultTabs[i][0].toUpperCase()}
					{defaultTabs[i].slice(1, defaultTabs[i].length)}
				</p>
			);
		}
	}

	//for added tabs
	for (let i in tabs) {
		elements.push(
			<p
				key={elements.length}
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
