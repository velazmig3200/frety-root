import React, { Component } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import cc from "./components/styles/classChain";

class App extends Component {
	render() {
		return (
			<div className={cc("header", "backgroundImage")}>
				<Header />
				<Page Artist="Artist" Song="Song" />
			</div>
		);
	}
}

export default App;
