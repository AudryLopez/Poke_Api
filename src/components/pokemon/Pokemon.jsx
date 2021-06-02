import React, { useEffect, useState } from "react";
import {
	Grid
} from "@material-ui/core";
import Cards from "components/Cards/Card"

function Pokemon() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const { REACT_APP_POKEAPI } = process.env

	const getdata = async (url)=>{
		const data = await fetch(url)
		const response = await data.json()
		setItems(response.results)
		setIsLoaded(true);
	}

	console.log(REACT_APP_POKEAPI);

	useEffect( () => {
		getdata(`${REACT_APP_POKEAPI}?limit=151`)
			.then((error) => {
				setIsLoaded(true);
				setError(error);
		});
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<Grid item spacing={4} container justify="space-around">
				<Grid item container xs={7} sm={7}>
					<Grid  container spacing={2}>
						{items.map((pokemon, id) => {
							return <Cards key={id} url={pokemon.url} />;
						})}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default Pokemon;
