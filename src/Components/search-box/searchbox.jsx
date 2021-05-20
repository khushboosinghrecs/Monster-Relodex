import React from "react";

import './searchbox.css'

 export const SearchBox =({ placeholder, handleChange})=>{
         console.log(placeholder+ " uiiiiiiiiiiiiiii "+ handleChange);
         return (
                 <>
                 <h1>khushi</h1>
        <input className="search" type="search" placeholder={placeholder}  onChange={handleChange}/>
        </> )
}