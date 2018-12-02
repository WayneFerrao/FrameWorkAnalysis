import React, {Component} from 'react';
import NavBar from "./NavBar";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar"
import Footer from './Footer';
import styled from 'styled-components';
import Card1 from './Card1'

const styles = {
    width: 200,
    height: 200,
    margin: 25
}

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animeData: []
        }
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(animeData => this.setState({animeData}));
    }

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
                        src="https://media.giphy.com/media/EW88XznThDJJK/giphy.gif"
                    />
                    <Avatar
                        style={styles}
                        src="https://i.gifer.com/67XC.gif"
                    />
                    <Avatar
                        style={styles}
                        src="http://gif-finder.com/wp-content/uploads/2016/02/Death-Note-Gif-Light-Yagami-Kira-Evil-Laughing.gif"
                    />
                    <Avatar
                        style={styles}
                        src="https://thumbs.gfycat.com/HighlevelEarnestGander-max-1mb.gif"
                    />
                </Grid>
                <hr/>
                <Grid container spacing={8} style={{minHeight: '70vh'}} justify="center" alignItems="center">
                    {this.state.animeData.map((anime, key) => {
                            if (key < 3) {
                                return (
                                    <Grid item md={3}>
                                        <Card1 CardData = {anime}/>
                                    </Grid>
                                )
                            }
                        }
                    )}
                </Grid>
                <Grid container spacing={8} style={{minHeight: '70vh'}} justify="center" alignItems="center">
                    {this.state.animeData.map((anime, key) => {
                            if (key > 2 ) {
                                return (
                                    <Grid item md={3}>
                                        <Card1 CardData = {anime}/>
                                    </Grid>
                                )
                            }
                        }
                    )}
                </Grid>
                <Footer/>
            </div>
        )
    }

}
