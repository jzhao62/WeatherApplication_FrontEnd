import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,OverlayView } from "react-google-maps"


const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

/**
 * Marker prototype
 */
class SmallMarker extends React.PureComponent{

    constructor(props){
        super(props)
        this.state = {
            location : props.location,
            text : props.txt,
            weather: props.weather
        }
    }


    render(){
        return(
            <MarkerWithLabel
                position={this.state.location}
                labelAnchor={new window.google.maps.Point(0, 0)}
                labelStyle={{backgroundColor: "Green", fontSize: "12px", padding: "10px", opacity : 0.7}}>
                <div>
                    {this.state.text}
                    <br/>
                    {this.state.weather}
                    </div>
            </MarkerWithLabel>
        )
    }




}


/**
 * Mark multiple weather spots simultaneoulsy on an existing map
 */
class ClusterMarker extends React.PureComponent{

    constructor(props){
        super(props)
        this.state = {
            data : []
        }

    }


    componentDidMount(){



        this.setState({
            data : this.props.inputData
        })

    }


    render() {

        const movieItems = [];

         console.log(this.state.data)


        for (var i=0; i < this.state.data.length; i++) {

            var lat = this.state.data[i].lat;
            var lon = this.state.data[i].lon;
            var place = this.state.data[i].place;
            var weather = this.state.data[i].weather;

            const p = {
                lat : lat,
                lng : lon
            }


            movieItems.push(<SmallMarker location = {p}
                                          txt = {place}
                                            weather = {weather.main + " " + weather.description}/>);
        }


        return (
            <div>
                {movieItems}

            </div>
        )
    }
}






export {MarkerWithLabel, SmallMarker, ClusterMarker}