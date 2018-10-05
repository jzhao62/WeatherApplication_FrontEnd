
import React, { Component } from 'react'


const helpers = {




    helper1: function(){
        alert('BAD')
    },
    helper2: function(props){
       return <h1>Hello, props.name</h1>
    },
    helper3: function(param1, param2){

    }
}

export default helpers;