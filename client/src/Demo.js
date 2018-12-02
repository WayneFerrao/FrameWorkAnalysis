import React, {Component} from 'react';
import NavBar from "./NavBar";
import Card1 from './Card1';
import {CardData} from './CardData';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar"
import Footer from './Footer';
import styled from 'styled-components';


const styles = {
    width: 200,
    height: 200,
    margin: 25
}
const CodeBlock = styled.section`
  padding: 2em;
  background: #C0C0C0;
  border-radius: 7px;
`;
const StyledH2 = styled.h2`
    padding-top: 10%;
    margin-top: -10%;
    color: #7997d6;
    font-family: Roboto;
`
const StyledH1 = styled.h1`
    padding-top: 10%;
    margin-top: -10%;
    color: #5b73b4;
    font-size: 40px;
    font-family: Roboto;
`
const StyledP = styled.p`
    font-size: 20px;
    font-family: Roboto;
    margin-top: -1%;

`
export default class Demo extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid container justify="center" align Items="center">
                <StyledH1>Demo Page</StyledH1>
                </Grid>
                <Grid container justify="center" align Items="center">
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
                <br/>
                <Grid container justify="center" align Items="center">
                <StyledH2>Top 3 Animes</StyledH2>
                </Grid>
                <Grid container justify="center" align Items="center">
                <div style={{padding: '0% 12% 0%'}}>
                <StyledP>
                These are the undisputed top 3 animes of all time. We have discussed for countless minutes about the top 3 animes, and have eliminated
                over 5000 other animes that were on our list. We have narrowed them down to the following animes with a perfect score of 5/7:
                </StyledP>
                </div>
                </Grid>
                <br/>
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
