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
import Card1 from './Card1';
import {CardData} from './CardData';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar"

const styles = {
  width: 200,
  height: 200,
  margin: 25
}
export default class Demo extends Component {
    render(){
        return(
          <div>
            <NavBar/>
            <Grid container justify = "center" align Items = "center">
              <Avatar
                style = {styles}
                src="https://i.imgur.com/nTsc3jv.png"
              />
              <Avatar
                style = {styles}
                src="https://i.imgur.com/xIATfWd.jpg"
              />
              <Avatar
                style = {styles}
                src="https://i.imgur.com/ucAAVKT.jpg"
              />
              <Avatar
                style = {styles}
                src="https://i.imgur.com/963gGR7.jpg"
              />
              </Grid>
              <hr/>
            <Grid container spacing={10}   style={{ minHeight: '70vh' }}   justify="center"   alignItems="center">
            <Grid item md={3}>
            <Card1 CardData={CardData[0]}/>
            </Grid>
            <Grid item md={3}>
            <Card1 CardData={CardData[2]}/>

            </Grid>
            <Grid item md={3}>
            <Card1 CardData={CardData[1]}/>

          </Grid>
          </Grid>
            </div>
        )
    }

}
