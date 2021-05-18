import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Parallax from "../Grid/Parallax.js";
// sections for this page
import HeaderLinks from "../header/header";


import styles from "./components";

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
					color: "white",
				}}
				{...rest}
			/>
			<Parallax image={require("../../assets/img/pk6.jpg")}>
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
			<Footer />
		</div>
	);
}
