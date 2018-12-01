import React, {Component} from 'react';
import NavBar from "./NavBar";
import Card1 from './Card1';
import {CardData} from './CardData';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar"
import Footer from './Footer';

const styles = {
    width: 200,
    height: 200,
    margin: 25
}
export default class Demo extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <Grid container justify="center" alignItems="center">
                    <Avatar
                        style={styles}
                        src="https://i.imgur.com/nTsc3jv.png"
                    />
                    <Avatar
                        style={styles}
                        src="https://i.imgur.com/xIATfWd.jpg"
                    />
                    <Avatar
                        style={styles}
                        src="https://i.imgur.com/ucAAVKT.jpg"
                    />
                    <Avatar
                        style={styles}
                        src="https://i.imgur.com/963gGR7.jpg"
                    />
                </Grid>
                <hr/>
                <Grid container spacing={10} style={{minHeight: '70vh'}} justify="center" alignItems="center">
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
                <Footer/>
            </div>
        )
    }

}
