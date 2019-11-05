import React from 'react'

export default function RegitroLogin(props) {
	const {hendlerSubmitRegistro,hendlerChange}=props
	return (
        <>
            <h1 className="text-center">Sing In</h1>
			<form onSubmit={hendlerSubmitRegistro}  className="container">
				<div className="form-group">
					<label htmlFor="name">Nombre Completo<small className="text-danger" style={{fontSize:"19px"}} >*</small></label>
					<input type="text" className="form-control" onChange={hendlerChange} name="name" id="name" placeholder="Nombre completo" required/>
				</div>
				<div className="form-group">
					<label htmlFor="username">Usuario<small className="text-danger" style={{fontSize:"19px"}}>*</small></label>
					<input type="text" className="form-control" onChange={hendlerChange} name="username" id="username" placeholder="Usuario" required/>
				</div>
                <div className="form-group">
					<label htmlFor="email">Email<small className="text-danger" style={{fontSize:"19px"}}>*</small></label>
					<input type="email" className="form-control" onChange={hendlerChange} name="email" id="email" placeholder="E-mail" required/>
				</div>
                <div className="form-group">
					<label htmlFor="password">Contraseña<small className="text-danger" style={{fontSize:"19px"}}>*</small></label>
					<input type="password" className="form-control" onChange={hendlerChange} name="password" id="password" placeholder="Contraseña" required/>
				</div>
				<button className="btn btn-secundary">Cancelar</button>
				<button type="submit" className="btn btn-primary">Sing In</button>
			</form>
        </>
    )
}
