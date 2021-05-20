import { makeStyles } from "@material-ui/core/styles";



const cardStyle = makeStyles((theme) => ({
	root: {
		maxWidth: 275,
	},
  imgen:{
    maxHeight: "24px",
  },
	media: {
		maxHeight: 30,
		paddingTop: "100%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},

}));
export default cardStyle;
