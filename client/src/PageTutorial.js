import React, {Component} from 'react';
import Particles from 'react-particles-js';
import NavBar from "./NavBar";
import Footer from './Footer';

import styled from 'styled-components';

const CodeBlock = styled.section`
  padding: 2em;
  background: #C0C0C0;
  border-radius: 7px;
`;
//anchors werent working properly cause of appbar and im too low iq to think of a good solution
const StyledH2 = styled.h2`
    padding-top: 10%;
    margin-top: -10%;
    color: #424242;
    font-family: 'Roboto';
`
const StyledH1 = styled.h1`
    padding-top: 10%;
    margin-top: -10%;
    color: black;
    font-size: 3em;
    font-family: 'Roboto';
`

const Content = styled.p`
    font-family: 'Roboto';

`
export default class PageTutorial extends Component {
    render() {
        return (
            <div>
            <div style={{padding: '6% 19% 2%'}}>
                <NavBar/>
                <StyledH1> Demo Tutorial
                </StyledH1>
                <StyledH2>
                Cards
                </StyledH2>
                <StyledP>
                aoaoaaoo cards
                </StyledP>
                <StyledH2>
                Avatar
                </StyledH2>
                <StyledP>
                asdaskdal; avatar
                </StyledP>
            </div>
            <Footer/>
            </div>
        )
    }

}
