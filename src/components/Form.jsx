import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:"Ratul Das"
        }
    }
    changeHandler = (e) => {
        console.log(this.state)
        const username = e.target.value
        this.setState({username})
    }
    render() {
        return (
            <div>
                <form>
                <input type="text" name='username' value={this.state.username} onChange={this.changeHandler}/>
                </form>
                <h1>{this.state.username}</h1>
            </div>
        )
    }
}

export default Form;