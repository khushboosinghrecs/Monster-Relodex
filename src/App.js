

import './App.css';
import { Component } from 'react';
import React from "react";
import { CardList } from "./Components/card-list/card-list.component"
import { SearchBox }  from "./Components/search-box/searchbox"


class App extends Component{
  constructor(){
    super();
    this.state={
      monster:[],
      searchfield:'',
    };
  }
  componentDidMount()
  {
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(response=>response.json())
   .then(users=>this.setState({monster:users}))
  // .then(user=>console.log(user))
  console.log(this.state.monster +"hkbkh")
  console.log("hoihoi");
  }

  render(){
console.log("render");
const {monsters, searchfield}=this.state;
console.log(this.state.monster);
let filteredMonster =monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return(

      <div className="App">
        {/* <input type="search" placeholder="search monster"  onChange={e=> this.setState({searchfield:e.target.value})}/> */}
         <SearchBox placeholder="search monsters" handleChange ={e=> this.setState({searchfield:e.target.value})}/>
    {/* <CardList monster ={this.state.monster}/> */}

    <CardList monster={filteredMonster} />

      </div>
    )
  }
}


export default App;
