
import { Button, Fade } from 'reactstrap';
import { Table } from 'reactstrap';
import React, { Component } from 'react';





class Sample_post extends Component {
    state = {users: []}

    handleSendClick= () => {
        fetch('/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                'start':'Jingyi',
                'end' : 'GOOD'
            })
        })
            // .then(res => res.json())
            // .then(users => this.setState({ users }));
            .then((response)=> response.json)
            .then((responseJsonData)=> {
                alert("SUCCESS post")
            })
            .then()
    }

    render() {
        return (
        <div>
            <Button color="primary" onClick={this.handleSendClick}>
                primary
            </Button>{' '}

        </div>





    );
    }
}

export default Sample_post
