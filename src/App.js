import React, { Component } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import cc from "./components/styles/classChain";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Page Artist="Artist" Song="Song" page1="" page2="" />
			</div>
		);
	}
}

export default App;
