
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const CA = {
    lat: 33.8120918,
    lng: -117.9189742
}

const Chicago = {
    lat : 41.8525800,
    lng : -87.6514100

}


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {start : ' ',
                      end : ' '};

        this.updateX = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

        this.startRef = React.createRef();
        this.endRef = React.createRef();

    }

    update(event) {
        this.setState({
            start : this.startRef.value,
            end : this.endRef.value
        });
    }



    handleSubmit(event) {
        // alert('A Pair was about to be submitted: ' + this.state.start + " " + this.state.end);
        event.preventDefault();


        fetch('/xr/update_coordinate',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                'start_city':this.state.start,
                'end_city' : this.state.end

            })
        })
            .then(res => res.json())
            .then(json => {
                console.log("Triggered Coordinates update");
                this.props.trigger(json)
            })


//



        fetch('/xr/handle_input',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                'start':this.state.start,
                'end' : this.state.end
            })
        })

            .then(res => res.json())
            .then(json => {
                console.log("Triggered weather update")
                console.log("weather data " + json)

                if(json == 'data all saved to DB, DB closed'){
                    console.log("pause in rendering frontend")
                    alert("Weather Data fetched")
                }
                else{
                    this.props.reflect(json)
                }



            })


    }

    render() {
        return (


            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Start:</Label>
                    <Input type="text"
                           innerRef = {input => (this.startRef = input)}
                           placeholder="Your starting locatoin"
                            onChange = {this.updateX}/>
                    {this.state.start}
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">End:</Label>
                    <Input type="text"
                           innerRef ={input => (this.endRef = input)}
                           placeholder="Your ending location"
                           onChange = {this.updateX}/>
                    {this.state.end}
                </FormGroup>
                <Button onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>

        );
    }
}

export default NameForm