import React, { Component } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import PageWindow from "./components/PageWindow";
import cc from "./components/styles/classChain";
import ClickPage from "./components/ClickPage";

class App extends Component {
	elements = [];
	active = "Artist";

	addPage(x) {
		let xSplit = x.trim().split(",");
		if (xSplit == "," || xSplit == "") {
			return;
		}
		for (let i = 0; i < xSplit.length; i++) {
			i == xSplit.length - 1
				? (this.elements[this.elements.length + i] = (
						<Page
							key={Math.random()}
							pageName={xSplit[i]}
							// active={this.active}
							lastEL={true}
						/>
				  ))
				: (this.elements[this.elements.length + i] = (
						<Page
							key={Math.random()}
							pageName={xSplit[i]}
							// active={this.active}
						/>
				  ));
		}
		// return this.elements;
	}

	render() {
		return (
			<div>
				<Header />
				<main className={cc("page", "pageContainer")}>
					<nav style={{ display: "flex" }}>
						{this.addPage("feel good inc,pumped up kicks")}
						<Page pageName="Artist" active={this.active} />
						<Page
							pageName="Song"
							active={this.active}
							lastEL={this.elements.length == 0}
						/>
						{this.elements}
					</nav>

					<section>
						<PageWindow />
					</section>
				</main>
			</div>
		);
	}
}

export default App;
