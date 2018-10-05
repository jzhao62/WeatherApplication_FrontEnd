import React, { Component } from 'react';


class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldVal: ""
        }
    }

    onUpdate = (val) => {
        this.setState({
            fieldVal: val
        })
    };

    render() {
        return (
            <div>
                <h2>Parent</h2>
                Value in Parent Component State: {this.state.fieldVal}
                <br/><Child reflect={this.onUpdate} />
                <br /><OtherChild passedVal={this.state.fieldVal} />
            </div>
        )
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldVal: " "
        }

        this.updateY = this.update.bind(this)
    }

    update(event){
        this.setState({
            fieldVal : this.refs.LOL.value
        })

        console.log("current input val " + this.state.fieldVal);
        this.props.reflect(this.state.fieldVal);

    }


    render() {
        return (
            <div>
                <h4>Child</h4>
                <input
                    type="text"
                    placeholder="type here"
                    ref = "LOL"
                    onChange={this.updateY}/>
                    {this.state.fieldVal}

            </div>
        )
    }
}

class OtherChild extends React.Component {
    render() {
        return (
            <div>
                <h4>OtherChild</h4>
                Value in OtherChild Props: {this.props.passedVal}
            </div>
        )
    }
}

export {Parent}
