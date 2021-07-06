import React, { useState, useEffect } from "react";
import Card from "components/Cards/cards";
import { Grid } from "@material-ui/core";

function Cards(url) {
	const [items, setItems] = useState([])
	const [isLoaded, setIsLoaded] = useState(false);
	const  index  = url.url;
	console.log(index)

	const getdata = async Url => {
		const data = await fetch(Url);
		return await data.json();
	};

	useEffect(async  => {
		const response = await getdata(index);
		const pokemons = [response].map((result) => ({
			Img: result.sprites.other.dream_world.front_default,
			name: result.name,
			types: result.types,
		}));
		setIsLoaded(true);
		setItems(pokemons);
	}, []);



	if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return(
			items.map((pokemon, id) => {
							return (
								<Grid
									key={id}
									item
									sm={8}
									md={4}>
									<Card
										key={id}
										name={pokemon.name}
										Img={pokemon.Img}
										types={pokemon.types}
									/>
								</Grid>
							);})
		)}
}
export default Cards;
