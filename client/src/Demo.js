import React, {Component} from 'react';
import NavBar from "./NavBar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class Demo extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <Card>
                <Card/>
            </div>
        )
    }

}
