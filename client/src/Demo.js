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
import Card2 from './Card2';
import {CardData} from './CardData';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


export default class Demo extends Component {
    render(){
        return(
          <div>
            <NavBar/>
            <Grid container spacing={10}   style={{ minHeight: '100vh' }}   justify="center"   alignItems="center"
>
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
