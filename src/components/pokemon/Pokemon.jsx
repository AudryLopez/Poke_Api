import React, { useEffect, useState } from "react";
import {
	Grid
} from "@material-ui/core";

function Pokemon() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const getdata = async (url)=>{
		const data = await fetch(`${url}`)
		const response = await data.json()
		setItems(response)
		setIsLoaded(true);
	}

	useEffect(() => {
		getdata("https://pokeapi.co/api/v2/pokemon?limit=15")
		.then(
			(error) => {
				setIsLoaded(true);
				setError(error);
			}
		);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<Grid item container justify="space-around">
				<Grid item container xs={12} sm={8}>
					<Grid container spacing={2}>
						{items.map((pokemon)=>(
							<h1 key={pokemon.id}>{pokemon.name}</h1>
						))}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default Pokemon;
