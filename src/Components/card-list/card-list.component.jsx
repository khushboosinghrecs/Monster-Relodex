import React from "react";

import "./cardlist.css"
import {Card} from "../Card/card.component";

export const CardList = props=>{
    console.log(props+ "jbbbfgdogtttttttttioidl")
return(<div className="card-list">{props.monster.map( monster=>(
        <Card key ={monster.id} monster={monster}/>
       ))}
       </div>)
};