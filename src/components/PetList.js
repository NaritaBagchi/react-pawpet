import React, { Component } from 'react';
import PetNail from './PetNail.js';

export default (props) => {

	const petList = props.tempPetList.map((pet) => {
		return <PetNail key={pet.id} pet={pet} onPetNailSelection={props.onPetNailSelection}/>
	});

	return (
			<div className='col-md-3 list-group'>
				{petList}
			</div>
	);
}
