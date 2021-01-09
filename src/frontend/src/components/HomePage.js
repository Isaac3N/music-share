import React, { Component } from 'react';
import CreateRoomPage from "./CreateRoomPage.js";
import RoomJoinPage from "./RoomJoinPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Router>
                <switch>
                    <Route exact path= '/'><p>This is the home page</p> </Route>
                    <Route path ='/create' component={CreateRoomPage}/>
                    <Route path ='/join' component={RoomJoinPage}/>
                </switch>
            </Router>
        );
    }

}
 