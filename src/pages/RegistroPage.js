import React, { Component } from 'react'
import RegistroForm from '../components/RegitroForm';
export default class RegistroPage extends Component {
    state={
        data:{}
    }

    hendlerChange=(e)=>{
        this.setState({
            data:{...this.state.data,
            [e.target.name]:e.target.value
            }
        });
    }

    hendlerSubmitRegistro=()=>{
        console.log(this.state.data);
    }

    render() {
        return (
            <div>
                <RegistroForm hendlerChange={this.hendlerChange} hendlerSubmitRegistro={this.hendlerSubmitRegistro} />  
            </div>
        )
    }
}
