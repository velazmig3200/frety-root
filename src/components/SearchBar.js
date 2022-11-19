import React, { useState } from "react";
import cc from "./styles/classChain";

function SearchBar({ activePage }) {
	const [value, setValue] = useState("");
	const [page, setPage] = useState(activePage);
	if (page != activePage) {
		setPage(activePage);
		setValue("");
	}

	return (
		<input
			type="text"
			placeholder={`search ${activePage}`}
			className={cc("page", "searchBar1")}
			value={value}
			onChange={e => setValue(e.target.value)}></input>
	);
}

export default SearchBar;
