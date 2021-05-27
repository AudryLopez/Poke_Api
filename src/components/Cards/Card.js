import React, { useState, useEffect } from "react";
import Card from "components/Cards/cards";

function Cards() {
	const url = "https://pokeapi.co/api/v2/pokemon/2/";
	const [items, setItems] = useState()
	const [isLoaded, setIsLoaded] = useState(false);

	const getdata = async url => {
		const data = await fetch(url);
		return await [data.json()];
	};

	useEffect(async() => {
		
		const response = await getdata(url);
		
		const pokemons = response.map((result) => ({
			name: result.name,
			Img: result.sprites.other.dream_world.front_defaul,
		}));
		console.log(pokemons)
		setIsLoaded(true);
		setItems(pokemons);
		
	}, []);

	if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
		items.map((pokemon, id)=>{
			return <Card key={id} pokemon={pokemon}/>
	}))
}
}
export default Cards;
