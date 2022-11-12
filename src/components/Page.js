import React, { Component } from "react";
import PageWindow from "./PageWindow";
import cc from "./styles/classChain";

class Page extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activePage: "",
			page1: "Feel Good Inc",
			page2: "Pumped Up Kicks"
		};
	}

	click(x) {
		x == this.state.activePage
			? this.setState({ activePage: "" })
			: this.setState({ activePage: x });
	}

	render() {
		const { Artist, Song } = this.props;
		const { page1, page2, activePage } = this.state;
		return (
			<div>
				<main className={cc("page", "pageContainer")}>
					<nav>
						<p
							onClick={() => this.click(Artist)}
							className={cc(
								"page",
								`page ${activePage == Artist}?active`
							)}>
							{Artist}
						</p>
						<p
							onClick={() => this.click(Song)}
							className={cc(
								"page",
								`page ${activePage == Song}?active`
							)}>
							{Song}
						</p>
						<p
							onClick={() => this.click(page1)}
							className={cc(
								"page",
								`${page1.trim() != ""}?page 
								${activePage == page1}?active`
							)}>
							{page1}
						</p>
						<p
							onClick={() => this.click(page2)}
							className={cc(
								"page",
								`${page2.trim() != ""}?page 
								${activePage == page2}?active`
							)}>
							{page2}
						</p>
					</nav>

					<section>
						<PageWindow
							Artist={Artist}
							Song={Song}
							activePage={activePage}
						/>
					</section>
				</main>
			</div>
		);
	}
}

export default Page;
