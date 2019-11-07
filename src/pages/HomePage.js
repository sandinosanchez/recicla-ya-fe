import React from 'react';
import Navbars from '../components/NavBars';
import ListarPost from '../components/ListarPost';
import '../css/post.css';

export default class HomePage extends React.Component{

	state = {
      loading: true,
      error: null, 
      data: undefined
    };

    

	render(){
		return(
			<div>
				<Navbars/>
			    <ListarPost/>
			</div>
		);
	}
}