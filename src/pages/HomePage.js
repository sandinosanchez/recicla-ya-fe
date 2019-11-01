import React from 'react';
import CreatePost from '../components/CreatePost';
import PostView from '../components/PostView';
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
			    <div className="container gedf-wrapper">
			        <div className="row">
			            <div className="col-md-8 gedf-main">
			            	<CreatePost />
			                <PostView />
			        	</div>
					</div>
				</div>
			</div>
		);
	}
}