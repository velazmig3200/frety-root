import React, { Component } from "react";
import { useState } from "react";
import PageWindow from "./PageWindow";
import cc from "./styles/classChain";

function Page({ Artist, Song }) {
	const [activePage, setActivePage] = useState("");
	const [page1, setPage1] = useState("");
	const [page2, setPage2] = useState("");
	const [songItemToggle, setSongItemToggle] = useState(false);

	function clickNav(x) {
		x == activePage ? setActivePage("") : setActivePage(x);
	}

	function songItem(x) {
		if (x == page1 || x == page2) {
			x == page1 ? setSongItemToggle(true) : setSongItemToggle(false);
			setActivePage(x);
		} else if (songItemToggle == false) {
			setPage1(x);
			setActivePage(x);
			setSongItemToggle(!songItemToggle);
		} else {
			setPage2(x);
			setActivePage(x);
			setSongItemToggle(!songItemToggle);
		}
	}

	return (
		<main className={cc("page", "pageContainer")}>
			<nav>
				<p
					onClick={() => clickNav(Artist)}
					className={cc("page", `${Artist != ""}?page ${activePage == Artist}?active`)}>
					{Artist}
				</p>
				<p
					onClick={() => clickNav(Song)}
					className={cc("page", `${Song != ""}?page ${activePage == Song}?active`)}>
					{Song}
				</p>
				<p
					onClick={() => clickNav(page1)}
					className={cc("page", `${page1 != ""}?page ${activePage == page1}?active`)}>
					{page1}
				</p>
				<p
					onClick={() => clickNav(page2)}
					className={cc("page", `${page2 != ""}?page ${activePage == page2}?active`)}>
					{page2}
				</p>
			</nav>

			<div>
				<PageWindow
					Artist={Artist}
					Song={Song}
					activePage={activePage}
					clickItem={x => songItem(x)}
				/>
			</div>
		</main>
	);
}

export default Page;
