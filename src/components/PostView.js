import React from 'react';

export default class PostView extends React.Component {

	render(){
		return(
			<div>
				<div className="card gedf-card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mr-2">
                                    <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""></img>
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0">@LeeCross</div>
                                    <div className="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div className="h6 dropdown-header">Configuration</div>
                                        <a className="dropdown-item" href="#">Save</a>
                                        <a className="dropdown-item" href="#">Hide</a>
                                        <a className="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i> 10 min ago</div>
                        <a className="card-link" href="#">
                            <h5 className="card-title"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur
                                deserunt illo esse distinctio.</h5>
                        </a>

                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis nihil, aliquam est, voluptates officiis iure soluta
                            alias vel odit, placeat reiciendis ut libero! Quas aliquid natus cumque quae repellendus. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit!
                            Quos in maiores, soluta doloremque molestiae reiciendis libero expedita assumenda fuga quae.
                            Consectetur id molestias itaque facere? Hic!
                        </p>
                        <div>
                            <span className="badge badge-primary">JavaScript</span>
                            <span className="badge badge-primary">Android</span>
                            <span className="badge badge-primary">PHP</span>
                            <span className="badge badge-primary">Node.js</span>
                            <span className="badge badge-primary">Ruby</span>
                            <span className="badge badge-primary">Paython</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="card-link"><i className="fa fa-gittip"></i> Like</a>
                        <a href="#" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                        <a href="#" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>
			</div>
		);
	}
}