import React, { Component } from "react";
import cc from "./styles/classChain";
import ClickPage from "./ClickPage";

class Page extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Artist: false,
			Song: true
		};

		this.click = this.click.bind(this);
	}

	click(x) {
		this.setState(state => ({
			...state,
			[x]: !state[x]
		}));
		console.log(this.state);
		// x = "Song";
		// this.setState(state => ({
		// 	...state,
		// 	[x]: !state[x]
		// }));
	}

	// click(x, y) {
	// 	this.setState(
	// 		state => ({
	// 			active: (state.active = y.toString())
	// 		})
	// 		// console.log(x, ":", y)
	// 	);
	// 	this.render();
	// 	// this.setState({ active: y });
	// 	// console.log(x, ":", y);
	// 	// console.log("click: ", this.props.active, ": ", this.props.pageName);
	// }

	render() {
		const { lastEL, pageName } = this.props;
		const { Artist, Song } = this.state;
		// console.log(this.state);
		return (
			<div>
				<p
					onClick={() => this.click(pageName)}
					className={cc(
						"page",
						`border ${!lastEL}?noBorderRight noBorderBottom 
						 ${this.state[pageName]}?active topMargin unselectable`
					)}>
					{pageName}
				</p>
			</div>
		);
	}
}

export default Page;
