import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const AnimeLink = styled.a`
    text-decoration: none;  
`;
export default class Card1 extends Component {
    render() {
        return (
            <Card style={{maxWidth: 320}}>
                <CardActionArea>
                    <CardMedia style={{objectFit: "cover"}}
                               component="img"
                               alt={this.props.title}
                               height="200"
                               image={this.props.CardData.image}
                               title={this.props.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.CardData.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.CardData.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <AnimeLink href={this.props.CardData.showlink}>
                        <Button variant="contained" color="primary" size="large">
                            Watch Now
                        </Button>
                    </AnimeLink>
                    <AnimeLink href={this.props.CardData.learnlink}>
                        <Button variant="contained" color="primary" size="large">
                            Learn More
                        </Button>
                    </AnimeLink>
                </CardActions>
            </Card>



  render(){
      //const { classes } = props;
    return(
      <Card style={{maxWidth:320}}>
        <CardActionArea>
          <CardMedia style={{objectFit: "cover"}}
            component="img"
            alt={this.props.CardData.alt}
            height="180"
            image={this.props.CardData.image}
            title={this.props.CardData.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {this.props.CardData.title}
            </Typography>
            <Typography component="p">
            {this.props.CardData.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href={this.props.CardData.showlink}>
            <Button variant="contained" color="primary" size="large">
              Watch Now
            </Button>
          </a>
          <a href={this.props.CardData.learnlink}>
            <Button variant="contained" color="primary" size="large">
              Learn More
            </Button>
          </a>
        </CardActions>
      </Card>

    );
  }

}

