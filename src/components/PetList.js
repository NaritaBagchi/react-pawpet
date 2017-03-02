import React, { Component } from 'react';
import Pet from './Pet.js';

const tempPetList = [{
						"key": 1,
						"breed": "Labradors",
						"img": "",
						"tag": "Dog",
						"description": ""
					},{
						"key": 2,
						"breed": "Beagles",
						"img": "",
						"tag": "Dog",
						"description": ""
					},{
						"key": 3,
						"breed": "Mastiff",
						"img": "",
						"tag": "Dog",
						"description": ""
					},{
						"key": 4,
						"breed": "Conure",
						"img": "",
						"tag": "Bird",
						"description": ""
					},{
						"key": 5,
						"breed": "Lovebird",
						"img": "",
						"tag": "Bird",
						"description": ""
					}];

export default () => {

	const petList = tempPetList.map((pet) => {
		return <Pet/>
	});

	return (
		<ul>
			{petList}
		</ul>
	);
}
