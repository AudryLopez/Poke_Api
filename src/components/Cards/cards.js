import React from "react";
import {
  Card,
  Typography,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
//import ShareIcon from "@material-ui/icons/Share";
import Style from "assets/jss/material-kit-react/components/cardsStyle";

function cards(pokemon) {
  const classes = Style();
  const { name, Img, types } = pokemon;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img className={classes.image} src={Img}></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {types.map(({ type }, id) => {
          return (
            <img
              key={id}
              className={classes.imgType}
              src={require(`../../assets/img/types/${type.name}.svg`).default}
              alt="tipo de pokemon"
            />
          );
        })}
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
export default cards;
