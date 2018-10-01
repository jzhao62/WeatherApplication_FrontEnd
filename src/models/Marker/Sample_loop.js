



import React, { Component } from 'react';

class Loop_Render extends Component{


    constructor(props){
        super(props)
    }


    render() {

        const movieItems = [];



        for (var i=0; i < Object.keys(this.props.person).length; i++) {
            movieItems.push(<div> {Object.values(this.props.person)[i]['name']}</div>);
        }


        return (
            <div>
                {
                    movieItems
                }

            </div>
        )
    }






}

export {Loop_Render}