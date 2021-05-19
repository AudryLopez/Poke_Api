import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../Header/header.js";
import Pokemon from "components/Pokemon/Pokemon"
import Footer from "../footer/Footer";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Parallax from "../Grid/Parallax.js";
// sections for this page
import HeaderLinks from "../Header/header";
import styles from "./components";
import info from "components/Card/info";

const useStyles = makeStyles(styles);

export default function Components(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<Header
				brand="Pokédex"
				rightLinks={<HeaderLinks />}
				fixed
				color="transparent"
				changeColorOnScroll={{
					height: 400,
				}}
				{...rest}
			/>
			<Parallax image={require("../../assets/img/pk5.png")}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand}>
								<h1 className={classes.title}>Pokédex</h1>
								<h3 className={classes.subtitle}>Atrapalos a todos</h3>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<Pokemon/>
			<Footer />
		</div>
	);
}
