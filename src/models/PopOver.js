import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class PopOver extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
            txt : ''
        };
    }


    componentDidMount(){
        this.setState({
            txt : this.props.input
        })
    }


    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <div>
                <Button id="Popover1" onClick={this.toggle}>
                    {this.state.txt}
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>
                        Type in your travel starting city & ending city, the app will return today's en-route weather


                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}