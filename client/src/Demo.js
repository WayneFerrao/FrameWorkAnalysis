import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NavBar from "./NavBar";

const styles = {
  card: {
    maxWidth: 310
  },
  media: {
    objectFit: "cover"
  }
};

export default class Demo extends Component {
    render(){
        return(
            <div>
            <NavBar/>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Boku no Hero Academia"

                  height="180"
                  image="https://images-na.ssl-images-amazon.com/images/I/91kjVOEopVL._SY606_.jpg"
                  title="Boku no Hero Academia"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boku no Hero Academia
                  </Typography>
                  <Typography component="p">
                    A superhero-loving boy without any powers is determined to enroll in
                    a prestigious hero academy and learn what it really means to be a
                    hero.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href="https://www.crunchyroll.com/my-hero-academia">
                  <Button variant="contained" color="primary" size="large">
                    Watch Now
                  </Button>
                </a>
                <a href="https://myanimelist.net/anime/31964/Boku_no_Hero_Academia?q=boku%20no%20hero">
                  <Button variant="contained" color="primary" size="large">
                    Learn More
                  </Button>
                </a>
              </CardActions>
            </Card>
            </div>
        )
    }

}
