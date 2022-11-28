import React from "react";
import cc from "./styles/classChain";

function DisplayTab({ tab }) {
	if (!tab) return;

	let elements = [];
	const keys = Object.keys(tab);
	const values = Object.values(tab);
	console.log(keys, values);

	for (let i in keys) {
		elements.push(
			<p key={i}>
				{keys[i]}
				{values[i]}
			</p>
		);
	}

	return (
		<div className={cc("page", `${elements.length > 0}?tabContainer`)}>
			{elements}
		</div>
	);
}

export default DisplayTab;
