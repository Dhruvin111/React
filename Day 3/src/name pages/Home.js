import React, { Component } from 'react'
import Msg from '../component/Title';

class Msg1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            Title: "Introduction",
            Description: "My name is xyz."
        };
    }
    render(){
        return(
            <div>
                <Msg Title= {this.state.Title}></Msg>
                <Msg Description= {this.state.Description}></Msg>

            </div>
        );     
        
    }
     
}
export default Msg1