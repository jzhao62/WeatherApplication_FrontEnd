import React, { Component } from 'react';


import {Card}from './models/card.js'
import  {MyDirectionRender} from "./models/Marker/MyDirectionRender";
import {MyCoordinateMarker, MyMapComponent} from "./models/Marker/MapMarker";






class App extends Component {

    state = {
        color: 'skyblue',
        value: ' ',
        start_location : ' ',
        end_location : ' '
    }






    render() {


        const style = {
            padding: 40,
        }



        return (
            <div style={style}>

                <Card />


                <MyDirectionRender/>


            </div>
        )
    }
}



export default App;


