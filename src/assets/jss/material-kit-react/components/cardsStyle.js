import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";



const cardStyle = makeStyles(() => ({
	root: {
		maxWidth: 240,
		minWidth: 240,
	},
	imgType: {
		maxHeight: "18px",
	},
	image: {
		marginTop: "8px",
		width: "100%",
		maxHeight: "120px",
		minHeight: "120px",
	},
	ShareIcon: {
		height: 12,
	},
	"@global": {
		".MuiTypography-root": {
			color: "#495057",
			fontFamily: "Nunito Sans",
		},
	},
}));
export default cardStyle;
