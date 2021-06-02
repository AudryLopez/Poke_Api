import {

	makeStyles,

} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	img:{
		height:"24px"
	},
	margin: {
		margin: theme.spacing(1),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

export default useStyles;
