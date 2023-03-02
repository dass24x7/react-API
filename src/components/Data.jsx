import React, { Component } from 'react'
import axios from 'axios';
class Data extends Component {
    getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=> {
            console.log(response);
        }).catch((error)=> {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.getData}>Click to get Data</button>
            </div>
        )
    }
}

export default Data;