import React from 'react';
import {Link} from 'react-router-dom';
export default class PostView extends React.Component {
    estilos(){
        return{
            style:"width: 18rem;"
        }
    }
	render(){
        const {img_user,user,titulo,img,descripcion}=this.props;
		return(
            <div className="col-sm-4">
                <div className="card my-3" style={this.estilos()}>
                    <div className="d-flex flex-row">
                        <div>
                        <img src={img_user} className="rounded-circle m-2" alt="..." width="70px" />
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="card-title" >{titulo}</h5>
                            <h6>{user}</h6>
                        </div>
                    </div>
                    
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">{descripcion}</p>
                        <Link to="#" className="btn btn-primary">Descripción</Link>
                    </div>
                </div>
            </div>
			
		);
	}
}