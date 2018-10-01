import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;














class SimpleMap extends Component {


    //  static defaultProps = {
    //     center: {
    //         lat: 59.95,
    //         lng: 30.33
    //     },
    //     zoom: 11
    // };

    constructor(props){
        super(props)


        this.state = {center : [], zoom : ' '};

    }


    // componentDidMount() {
    //     this.setState({
    //         location : props.location
    //     })
    // }




    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyDIdbrirI6DL4bNnn4UNVyKDxFYHj8hWVE' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    <AnyReactComponent
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                        text={'WTF'}/>
                </GoogleMapReact>
            </div>
        );
    }
}








export  {SimpleMap};