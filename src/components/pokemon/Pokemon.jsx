import React, { useEffect, useState } from "react";
import {
	Grid,
	Card,
	Typography,
	CardHeader,
	CardContent,
} from "@material-ui/core";
import Style from "./pokemonStyle";

function Pokemon() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const classes = Style();

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems([result.results]);
				},
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
						{items.map((pokemon) => {
							<p>{pokemon}</p>
						})}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default Pokemon;
