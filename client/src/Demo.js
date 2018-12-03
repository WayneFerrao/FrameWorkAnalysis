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
const StyledH2 = styled.h2`
    padding-top: 10%;
    margin-top: -10%;
    color: #7997d6;
    font-weight: 400;
    font-family: 'Roboto';
`;
const Title = styled.h1`

    padding-top: 10%;
    margin-top: -10%;
    color: #5b73b4;
    font-size: 40px;
    font-weight: 700;
    font-family: Roboto;
`;
const StyledP = styled.p`
    font-size: 20px;
    font-weight: 300;
    font-family: 'Roboto';
    margin-top: -1%;

`;

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animeData: []
        }
    }

    componentDidMount() {
        fetch('/confirm').then(res => res.json()).then(animeData => this.setState({animeData}));
    }

    render() {
        return (
            <div>
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid container justify="center" align Items="center">
                    <Title>Demo Page</Title>
                </Grid>
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
                <Grid container justify="center" align Items="center">
                    <StyledH2>Top 6 Animes</StyledH2>
                </Grid>
                <Grid container justify="center" align Items="center">
                    <div style={{padding: '0% 12% 0%'}}>
                        <StyledP>
                            These are the undisputed top  animes of all time. We have discussed for countless minutes
                            over which anime belong on this prestigious list and have eliminated
                            over 5000 other animes that were on our list. We have narrowed them down to the following
                            animes with a perfect score of 5/7:
                        </StyledP>
                    </div>
                </Grid>
                <hr/>
                <Grid container spacing={8} style={{minHeight: '70vh'}} justify="center" alignItems="center">
                    {this.state.animeData.map((anime, key) => {
                            if (key < 3) {
                                return (
                                    <Grid item md={3}>
                                        <Card1 CardData={anime}/>
                                    </Grid>
                                )
                            }
                        }
                    )}
                </Grid>
                <Grid container spacing={8} style={{minHeight: '70vh'}} justify="center" alignItems="center">
                    {this.state.animeData.map((anime, key) => {
                            if (key > 2) {
                                return (
                                    <Grid item md={3}>
                                        <Card1 CardData={anime}/>
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
