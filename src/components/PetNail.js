import React, { Component } from 'react';

export default (props) => {
	return (
			<div className='list-group-item' onClick={() => props.onPetNailSelection(props.pet)}>
				<img className='img-rounded' src={props.pet.img} width='150' height='130'/>
			</div>
		);
}
