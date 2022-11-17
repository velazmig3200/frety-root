import React, { Component } from "react";
import { useState } from "react";
import PageWindow from "./PageWindow";
import cc from "./styles/classChain";

function Page({ Artist, Song }) {
	//state hooks/variables
	//const [[variable name], [setter function name]] = useState([default value])
	const [activePage, setActivePage] = useState("");
	const [page1, setPage1] = useState("");
	const [page2, setPage2] = useState("");
	const [songItemToggle, setSongItemToggle] = useState(false);
    const [inputValue, setInputValue] = useState("");

	//onClick: set [activePage] to the navTab that was clicked
	function clickNav(clickedNavTab) {
        setInputValue("");
		clickedNavTab == activePage ? setActivePage("") : setActivePage(clickedNavTab);
	}

	//song/artist item onclick: add respective navTab
	function newNavTab(clickedItem) {
		//check for previous value; already opened tabs, else new navTab
		if (clickedItem == page1 || clickedItem == page2) {
			clickedItem == page1 ? setSongItemToggle(true) : setSongItemToggle(false);
			setActivePage(clickedItem);
		} else if (songItemToggle == false) {
			setPage1(clickedItem);
			setActivePage(clickedItem);
			setSongItemToggle(!songItemToggle);
		} else {
			setPage2(clickedItem);
			setActivePage(clickedItem);
			setSongItemToggle(!songItemToggle);
		}
	}

    function handleChange(event) {
		setInputValue(event.target.value);
	}

	return (
		<main className={cc("page", "pageContainer")}>
			<nav className={cc("page", "center")}>
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

			<section style={{height: "100%"}}>
				<PageWindow
					Artist={Artist}
					Song={Song}
					activePage={activePage}
					clickItem={clickedItem => newNavTab(clickedItem)}
                    handleChange={value => handleChange(value)}
                    value={inputValue}
				/>
			</section>
		</main>
	);
}

export default Page;
