import React, { Component } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import cc from "./components/styles/classChain";

class App extends Component {
	render() {
		return (
			<div className={cc("header", "topDiv")}>
				<img
					className={cc("header", "backgroundImage")}
					src="https://toppng.com//public/uploads/preview/guitar-strings-neck-guitar-frets-blur-115702405187ynykwgayv.jpg"></img>
				<Header />
				<Page Artist="Artist" Song="Song" />
			</div>
		);
	}
}

export default App;
