import React, { Component } from 'react'

class work extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            name: ''
        }
    }

    Handler = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    
    onsubmit(){
        alert(this.state.name)
    }
    
    render() {
        return (
            <div>
                <input  type="text" onChange={this.Handler}></input>
            
                <br/>
            
                <button  onClick={()=> this.onsubmit()}>Get Value</button>
            </div>
        )
    }
}

export default work
