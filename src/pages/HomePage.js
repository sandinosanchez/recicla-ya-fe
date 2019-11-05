import React from 'react';
import CreatePost from '../components/CreatePost';
import PostView from '../components/PostView';
import Navbars from '../components/NavBars';
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
			    <div className="container gedf-wrapper">
			        <div className="row">
			            <div className="col-md-8 gedf-main">
			            	<CreatePost />
			                
			        	</div>
					</div>
					<PostView />
				</div>
			</div>
		);
	}
}