import React, { Component } from 'react'


class Card extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = {curr_color : 1}
    //     this.onClickEffect = this.handleClick().bind(this);
    //
    // }
    //
    //
    // handleClick(){
    //     this.setState(state => ({
    //         curr_color: state.curr_color + 2
    //     }));
    //     console.log('Color changed to ' + this.state.curr_color)
    // }
    //
    // render() {
    //     const style = {
    //         // padding: 20,
    //         // textAlign: 'center',
    //         // color: 'white',
    //         // backgroundColor: this.state.curr_color
    //     }
    //
    //     return (
    //
    //         <div style={style}>
    //             {/*{this.props.children}*/}
    //
    //             <button onClick={this.onClickEffect}>
    //                 Click to randomize color;
    //             </button>
    //         </div>
    //     )
    // }




    constructor(props) {
        super(props);
        this.state = {color: randomColor()};

        // This binding is necessary to make `this` work in the callback
        this.onClickEffect = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            color: randomColor()
        }));
    }

    render() {

            const style = {
                padding: 20,
                textAlign: 'center',
                color: 'white',
                backgroundColor: this.state.color
            }


        return (

            <div style={style}>
                <button onClick={this.onClickEffect}>
                    {'Curr Color ' + this.state.color}
                </button>
            </div>
        );
    }

}


const randomColor = () => '#' + Math.random().toString(16).substr(-6)


export {Card};