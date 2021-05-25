import {
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
} from "assets/jss/material-kit-react.js";
import "@fontsource/nunito-sans"; 

const typographyStyle = {
	defaultFontStyle: {
		...defaultFont,
		fontSize: "14px",
	},
	defaultHeaderMargins: {
		marginTop: "20px",
		marginBottom: "10px",
		fontFamily: "Nunito Sans",
	},
	quote: {
		padding: "10px 20px",
		margin: "0 0 20px",
		fontSize: "17.5px",
		borderLeft: "5px solid #eee",
		fontFamily: "Nunito Sans",
	},
	quoteText: {
		margin: "0 0 10px",
		fontFamily: "Nunito Sans",
	},
	quoteAuthor: {
		display: "block",
		fontSize: "80%",
		lineHeight: "1.42857143",
		color: "#777",
		fontFamily: "Nunito Sans",
	},
	mutedText: {
		color: "#777",
	},
	primaryText: {
		color: primaryColor,
		fontFamily: "Nunito Sans",
	},
	infoText: {
		color: infoColor,
		fontFamily: "Nunito Sans",
	},
	successText: {
		color: successColor,
		fontFamily: "Nunito Sans",
	},
	warningText: {
		color: warningColor,
		fontFamily: "Nunito Sans",
	},
	dangerText: {
		color: dangerColor,
		fontFamily: "Nunito Sans",
	},
	smallText: {
		fontSize: "65%",
		fontWeight: "400",
		lineHeight: "1",
		color: "#777",
		fontFamily: "Nunito Sans",
	},
};

export default typographyStyle;
