import React, { useState } from "react";
import './SearchBar.css'

function SearchBar(props){
    
    let input = (event) => {
        var lowerCase = event.target.value.toLowerCase();
        props.inputHandler(lowerCase);
    };

    return (
        
        <input type='input' placeholder="Search Book" onChange={input}/>
    );
}

export default SearchBar;