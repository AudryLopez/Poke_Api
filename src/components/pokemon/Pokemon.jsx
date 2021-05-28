import React, { useEffect, useState } from "react";
import {
	Grid
} from "@material-ui/core";

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

	useEffect(() => {
		getdata(`${REACT_APP_POKEAPI}?limit=15`).then((error) => {
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
			<Grid item container justify="space-around">
				<Grid item container xs={12} sm={8}>
					<Grid container spacing={2}>
						{items.map((pokemon, id)=>{
							return (<h1 key={id}>{pokemon.name}</h1>) 
							})}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default Pokemon;
