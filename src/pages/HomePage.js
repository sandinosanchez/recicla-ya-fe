import React from 'react';

export default class HomePage extends React.Component{

	state = {
      loading: true,
      error: null, 
      data: undefined
    };

    

	render(){
		return(
			<div>
				<h1> LA PAGINA PERRO </h1>
			</div>
		);
	}
}