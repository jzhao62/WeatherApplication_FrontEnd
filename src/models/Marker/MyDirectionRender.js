
//https://tomchentw.github.io/react-google-maps/#installation

import React from "react";
import {SmallMarker, MarkerWithLabel,ClusterMarker} from '/home/jingyi/WebstormProjects/my-app/src/models/Marker/MapMarker.js'
import NameForm from '../../models/userInput.js'

import { Button, Alert } from 'reactstrap';



const { compose, withProps, lifecycle } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} = require("react-google-maps");


const CA = {
    lat: 33.8120918,
    lng: -117.9189742
}

const Chicago = {
    lat : 41.8525800,
    lng : -87.6514100

}




function pop(){

    alert("GOOD")
}



const DirectionsRendererComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDIdbrirI6DL4bNnn4UNVyKDxFYHj8hWVE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {


            console.log(this.props.start + " " + this.props.end + this.props.weather.length)

            const DirectionsService = new window.google.maps.DirectionsService();

            DirectionsService.route({
                origin: this.props.start,
                destination: this.props.end,
                travelMode: window.google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)


(props =>

    <GoogleMap
        defaultZoom={11}
        defaultCenter={props.start}>

        <div>

            {props.directions && <DirectionsRenderer directions={props.directions} />}


            {Object.keys(props.weather).length > 0 && <ClusterMarker inputData = {props.weather} />}


        </div>
    </GoogleMap>
);


class MyDirectionRender extends React.PureComponent {


    constructor(props){
        super(props)
        this.state = {
            start : '',
            end : '',
            weather_data : [],
            b1 : false,
            b2: false
        }


        this.triggerCoordinate= this.triggerCoordinate_update.bind(this);
        this.triggerReflect = this.handleReflect.bind(this)
    }


    reset = () =>{
        this.setState({
            start : '',
            end : '',
            weather_data : [],
            b1 : false,
            b2: false
        })
    }



    handleReflect(json){

        this.setState({
            weather_data : json,
            b2 : json == [] || json == 'NULL' ? false : true
        })
    };


    triggerCoordinate_update(json){
        var geo1 = {lat : json[0][0], lng : json[0][1]};
        var geo2 = {lat : json[1][0], lng : json[1][1]}
        this.setState({
            start : geo1,
            end : geo2,
            b1 : true
        })
    }




    render()
    {

        if((this.state.b1 & this.state.b2) == false){

            console.log("BY default")

            return(

                <div>
                    <Alert color="primary">
                        Please provide valid inputs
                    </Alert>





                    <div>
                        <NameForm reflect = {this.triggerReflect}
                                  trigger = {this.triggerCoordinate}/>

                        <br></br>
                        <Button color = 'danger' onClick={this.reset}>
                            Click to reset
                        </Button>


                    </div>
                </div>
            )
        }

        else{
            return (

                <div>

                    {/*<button onClick={this.triggerWeather}>*/}
                        {/*Fetch Weather Data*/}
                    {/*</button>*/}






                    <div>
                        <NameForm reflect = {this.triggerReflect}
                                  trigger = {this.triggerCoordinate}/>

                        <br></br>
                        <Button color = 'danger' onClick={this.reset}>
                            Click to reset
                        </Button>
                    </div>



                    <DirectionsRendererComponent
                        start={this.state.start}
                        end={this.state.end}
                        weather = {this.state.weather_data}
                        showMarker = {this.state.showMarker}/>




                </div>
            )
        }




    }

}









export {MyDirectionRender}