import React from 'react';
import LoginForm from '../components/LoginForm';
import ImgReciclar from '../images/vector-a-recycle-logo-on-nature-globe.jpg';
export default class LoginPage extends React.Component {
	state={
		data:{}
	}
	Cancelar=(e)=>{
		e.preventDefault();
		this.props.history.push("/")
	}

	// funcion para sacar los datos de los input
 	hendlerChange=(e)=>{
		this.setState({
			data:{
				...this.state.data,
				[e.target.name]:e.target.value
			}
		});
		
		
	}

   hendlerSubmitLogin=async (e)=>{
		e.preventDefault();
		console.log(this.state.data);
		let config={
			method:"POST",
			headers:{
				"content-type":"application/json"
			},
			body:JSON.stringify(this.state.data)
		}
		const respuesta=await fetch("http://localhost:8080/api/auth/signin",config);
		const res=await respuesta.json()
		if(!res.accessToken){
			alert("Usuario y/o Password incorrecto");
		}else{
			localStorage.setItem("Authorization",res.tokenType+" "+res.accessToken);
			this.props.history.push("/")
		}
	}
	estilos() {
		return{
			background:"#fff"
		}
	}

	render(){
		return(
			
			<div className="row" style={this.estilos()}>
				<div className="col-6">
					<img className="container m-3" src={ImgReciclar } alt="" width="100%"/>
				</div>
				<div className="col-6">
					<LoginForm Cancelar={this.Cancelar} hendlerChange={this.hendlerChange} hendlerSubmitLogin={this.hendlerSubmitLogin}/>
				</div>
			</div>	
		);
	}
}