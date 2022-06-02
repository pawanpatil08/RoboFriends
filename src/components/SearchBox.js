import React from "react";

const SearchBox = ({searchField,onSearchChange}) => {
    return (
        <div className="pa2">
            <input type="search"
            className="pa3 ba b--green bg-lightest-blue"
                placeholder="Search Robots" 
                onChange={onSearchChange}/>
        </div>
    );
}
export default SearchBox;