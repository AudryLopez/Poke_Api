import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";



const cardStyle = makeStyles(() => ({
  root: {
    maxWidth: 240,
    minHeight: 260,
    maxHeight: 260,
    "@media (max-width: 450px)": {
      minWidth: 200,
    },
  },
  imgType: {
    maxHeight: "24px",
  },
  image: {
    marginTop: "8px",
    width: "100%",
    maxHeight: "120px",
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
