
import React, { Component } from 'react';


const { compose } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithAMarkerWithLabel = compose(
    withScriptjs,
    withGoogleMap
)

(props =>

    <div>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            <MarkerWithLabel
                position={{ lat: -34.397, lng: 150.644 }}
                // position={this.props.center}
                labelAnchor={new window.google.maps.Point(0, 0)}
                labelStyle={{backgroundColor: "Green", fontSize: "12px", padding: "12px"}}>


                <div> Hi </div>

            </MarkerWithLabel>
        </GoogleMap>


    </div>


);


export {MapWithAMarkerWithLabel}



