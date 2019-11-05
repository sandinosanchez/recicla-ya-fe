import React from 'react';

export default class LoginForm extends React.Component{

	render(){
		const {hendlerChange,hendlerSubmitLogin,Cancelar}=this.props
		return(
			<>
			<h1 className="text-center">Log In</h1>
			<form onSubmit={hendlerSubmitLogin} className="container">
				<div className="form-group">
					<label htmlFor="user">Username</label>
					<input type="text" className="form-control" onChange={hendlerChange} name="username" id="user" placeholder="Username"/>
				</div>
				<div className="form-group">
					<label htmlFor="user">Password</label>
					<input type="password" className="form-control" onChange={hendlerChange} name="password" id="user" placeholder="Password"/>
				</div>
				<button onClick={Cancelar} className="btn btn-secundary">Cancelar</button>
				<button type="submit" className="btn btn-primary">log In</button>
			</form>
			
			</>
		);
	}
}