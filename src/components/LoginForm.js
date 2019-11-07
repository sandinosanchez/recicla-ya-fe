import React from 'react';

export default class LoginForm extends React.Component{

	render(){
		const {hendlerChange,hendlerSubmitLogin,Cancelar}=this.props
		return(
			<div className="container mt-5">
				<h4 className="text-center">Inicia Sesión en Reciclemos</h4>
			<form onSubmit={hendlerSubmitLogin} className="container">
				<div className="form-group">
					<label htmlFor="user">Username</label>
					<input type="text" className="form-control" onChange={hendlerChange} name="username" id="user" placeholder="Username"/>
				</div>
				<div className="form-group">
					<label htmlFor="user">Password</label>
					<input type="password" className="form-control" onChange={hendlerChange} name="password" id="user" placeholder="Password"/>
				</div>
				<button onClick={Cancelar} className="btn btn-secondary ">Cancelar</button>
				<button type="submit" className="btn btn-success mx-1">log In</button>
			</form>
			<div>
				<h3 className="mt-4 text-center">¿No estas Registrado?</h3>
				<div>
					<button type="button" className="btn btn-primary w-100" data-toggle="modal" data-target="#exampleModalCenter">
						Registrate!
					</button>

					<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered" role="document">
							<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalCenterTitle">Registrate</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form action="">
									<div className="form-group">
										<input type="text" className="form-control" name="nombre_completo" id="" placeholder="Nombre Completo"/>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" name="Usuario" id="" placeholder="Usuario"/>
									</div>
									<div className="form-group">
										<input type="email" className="form-control" name="Email" id="" placeholder="Email"/>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" name="Contraseña" id="" placeholder="Contraseña"/>
									</div>
									<div className="form-group d-flex flex-column">
										<label htmlFor="img">Imagen:</label>
										<input type="file" name="nombre_completo" id="img" placeholder="Nombre Completo"/>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
								<button type="button" className="btn btn-primary" data-dismiss="modal">Registrarse</button>
							</div>
							</div>
						</div>
						</div>

				</div>
			</div>
			</div>
		);
	}
}