import React, { Component } from 'react';
import PetList from './PetList.js';
import PetDetails from './PetDetails.js';
import PetSupplies from './PetSupplies.js';

const tempPetList = [{
						id: 1,
						breed: "Labrador",
						img: "http://www.lovablelabradors.com/wp-content/uploads/2007/04/labrador-50-634.jpg",
						tag: "Dog",
						description: "A favourite disability assistance breed in many countries, Labradors are frequently trained to aid the blind, those who have autism, to act as a therapy dog and perform screening and detection work for law enforcement and other official agencies. They are prized as sporting and hunting dogs."
					},{
						id: 2,
						breed: "Beagle",
						img: "https://s-media-cache-ak0.pinimg.com/736x/fd/06/db/fd06dbd224c78744c9717d459ae9b422.jpg",
						tag: "Dog",
						description: "The Beagle is a scent hound, developed primarily for hunting hare. With a great sense of smell and their tracking instinct, the Beagle is employed as detection dog for prohibited agricultural imports and foodstuffs in quarantine around the world. The Beagle is intelligent but single-minded. It is a popular pet due to its size, good temper, and lack of inherited health problems."
					},{
						id: 3,
						breed: "Brown English Mastiff",
						img: "http://indybordeauxs.com/wp-content/uploads/2014/11/IMG_4080.jpg",
						tag: "Dog",
						description: "The English Mastiff is a breed of extremely large dog (often known simply as the Mastiff) perhaps descended from the ancient Alaunt and Pugnaces Britanniae, with a significant input from the Alpine Mastiff in the 19th century. Distinguishable by enormous size, massive head, and a limited range of colours, but always displaying a black mask, the Mastiff is noted for its gentle and loving nature. The lineage of modern dogs can be traced back to the early 19th century, but the modern type was stabilised in the 1880s and refined since."
					},{
						id: 4,
						breed: "Conure",
						img: "http://www.wassupmate.com/wp-content/uploads/2015/07/Colorful-Parrots-Wallpaper-Beautiful.jpg",
						tag: "Bird",
						description: "Conures are a diverse, loosely defined group of small to medium-sized parrots. They belong to several genera within a long-tailed group of the New World parrot subfamily Arinae. The term conure is used primarily in bird keeping, though it has appeared in some scientific journals. The American Ornithologists' Union uses the generic term parakeet for all species elsewhere called conure, though Joseph Forshaw, a prominent Australian ornithologist, uses conure."
					},{
						id: 5,
						breed: "Budgerigar",
						img: "http://www.hd-freewallpapers.com/latest-wallpapers/desktop-images-of-colorful-birds-wallpaper.jpg",
						tag: "Bird",
						description: "The budgerigar also known as the common pet parakeet or shell parakeet and informally nicknamed the budgie, is a small, long-tailed, seed-eating parrot. Budgerigars are the only species in the Australian genus Melopsittacus and are found wild throughout the drier parts of Australia where the species has survived harsh inland conditions for the last five million years."
					}];

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPet: tempPetList[0]
		}
	}

	setSelectedPet = (pet) => {
		this.setState({selectedPet: pet})
	}

  render() {
    return (
      <div className='panel panel-default'>
      	<div className="panel-body row">
      		<ul className='col-md-8'>
      			<li><PetDetails pet={this.state.selectedPet}/></li>
      			<li><PetSupplies pet={this.state.selectedPet}/></li>
      		</ul>
      		<PetList tempPetList={tempPetList} onPetNailSelection={this.setSelectedPet}/>
      	</div>
      </div>
    );
  }
}
