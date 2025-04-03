import React, { useState } from "react";
const SearchBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [searchText, setSearchText] = useState("");
        const toogleSearchBar=()=>{
            setIsVisible(!setIsVisible)
        };
        return(
            <div>
                {isVisible&&(
                    <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search..."
                    style={{ padding: "8px", borderRadius: "5px", border: "1px solid gray" }}
                  />
                )}
            </div>
        )
    }
    export default SearchBar;