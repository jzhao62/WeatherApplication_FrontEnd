
import { Button, Fade } from 'reactstrap';
import { Table } from 'reactstrap';
import React, { Component } from 'react';





class Sample_get extends Component {


    constructor(props){

        super(props);
        this.state = {data :[]}
    }




    handleClick= () => {
        fetch('/users',{
            method:'GET',

        })
        .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    data : json
                })
            })

    }

    render() {

        console.log(this.state.data)

        return (
            <div>
                <Button color="primary" onClick={this.handleClick}>
                    primary
                </Button>{' '}

                {console.log(this.state.data)}


            </div>





        );
    }
}

export default Sample_get
