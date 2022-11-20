import React, { useState, useEffect } from "react";
import cc from "./styles/classChain";

function SearchBar({ activePage, value, setValue }) {
	// const [value, setValue] = useState("");
	useEffect(() => {
		setValue("");
	}, [activePage]);
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
