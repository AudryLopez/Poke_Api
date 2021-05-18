import { container } from "../../assets/jss/material-kit-react";
import "@fontsource/nunito";

const componentsStyle = {
	container,
	brand: {
		color: "#FFFFFF",
		textAlign: "left",
		fontFamily: "nunito",
	},

	title: {
		fontSize: "4.2rem",
		fontWeight: "600",
		color: "black",
		display: "inline-block",
		position: "relative",
		fontFamily: "nunito",
	},
	subtitle: {
		opacity: 1,
		fontSize: "1.5rem",
		maxWidth: "500px",
		margin: "10px 0 0",
		color: "black",
		fontFamily: "nunito",
	},
	main: {
		background: "#FFFFFF",
		position: "relative",
		zIndex: "3",
	},
	mainRaised: {
		margin: "-60px 30px 0px",
		borderRadius: "6px",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
	},
	link: {
		textDecoration: "none",
	},
	textCenter: {
		textAlign: "center",
		fontFamily: "nunito",
	},
	Typography: {
		fontFamily: "nunito",
	},
};

export default componentsStyle;
