import React, { Component } from 'react';

export default (props) => {

	return (
			<div className='row'>
				<div className='col-md-6'>
					<img className='img-rounded' src={props.pet.img} width='340' height='300'/>
				</div>
				<p className='col-md-6 text-right'>{props.pet.description}</p>
			</div>
	);
}
