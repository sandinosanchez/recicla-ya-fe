import React, { Component } from 'react'
import Post from './Post';
export default class ListarPost extends Component {

    state={
        data:[
                {   
                    id:1,
                    img_user:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    user:"Lucia Monzón",
                    titulo:"Planteritos",
                    img:"https://www.mundojardineria.info/wp-content/uploads/2015/12/como-hacer-macetas-caseras-con-botellas.jpg",
                    descripcion:"Facil y practicos panteritos echos con botellas plasticas",
                },

            ]
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                {
                    this.state.data.map((datos)=>{
                        return(
                            <Post key={datos.id} img_user={datos.img_user} user={datos.user} titulo={datos.titulo} img={datos.img} descripcion={datos.descripcion} />
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
