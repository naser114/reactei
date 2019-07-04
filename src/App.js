import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import About from "./component/about";
import Projects from "./component/projects";
import Home from './component/home'


export default class App extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
        <div>
          <NavBar/>
          <switch>
            <Redirect exact path="\" to='/home'/>
       <Route  exact path="/home"  component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/projects" e component={Projects}/>
          </switch>
          </div>
         
      </BrowserRouter>
     
    
    );
  }
}

