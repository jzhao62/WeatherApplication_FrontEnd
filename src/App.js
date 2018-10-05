import React, { Component } from 'react';

import  {MyDirectionRender} from "./models/Marker/MyDirectionRender";
import {MyCoordinateMarker, MyMapComponent} from "./models/Marker/MapMarker";
import logo from './logo.svg';
import './App.css';
import PopOver from './models/PopOver'

class App extends Component {

    state = {
        color: 'skyblue',
        value: ' ',
        start_location : ' ',
        end_location : ' '
    }



    render() {


        const style = {
            padding: 10,
        }



        return (

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to use W-T App!</h1>

                <div>
                    <br></br>
                    <PopOver input = {'Instruction'}/>
                </div>




                <div style={style}>
                    <MyDirectionRender/>
                </div>







            </header>


        )
    }
}



export default App;


