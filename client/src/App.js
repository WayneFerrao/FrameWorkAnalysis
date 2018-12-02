import React, {Component} from 'react';
import reactImg from './assets/reactImg.png';
import nodeJsImg from './assets/nodejs.png';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import PageTutorial from "./PageTutorial";
import FWInstallation from "./FWInstallation";
import Demo from "./Demo";
import Conclusion from "./Conclusion";
import Credits from "./Credits";
import styled, {keyframes} from 'styled-components';


const ReactRotate = keyframes`
    from {
        transform: rotate(360deg);
        opacity: 0;
        transform: rotate(0deg);
    }
    to {
        margin-left:3%;
        transform: rotate(360deg);
    }
`;
const nodeJSSlide = keyframes`
   from {
        transform: rotate(0deg);
        opacity: 0;
        margin-left: -0%;
    }
    to {
        margin-left:3%;
        opacity: 1;
    }
`;
const nodeQAnim = keyframes`
    0% {
        top: -200px;
        opacity: 0;
        margin-top: 1%;
    }
    100% {
        top: 0px;
        margin-top: 5%;
        opacity: 1;
    }

`;
const reactQAnim = keyframes`
    0% {
        margin-top: 1%;
        opacity: 0;
        font-size: 2.0vw;
    }
    100% {
        margin-right: 5%;
        opacity: 1;
        font-size: 3.1vw;
    }

`;
const ReactImage = styled.img`
    width: 45%;
    height:10%;
    margin:3%;
    animation: ${ReactRotate} 1.5s linear normal;
`;

const NodeJsImage = styled.img`
    width: 40%;
    height:45%;
    margin-top:5%;
    margin-left: 9%;
    animation: ${nodeJSSlide} 1.5s linear normal;
`;
const Banner = styled.div`
    display: inline-block;
    width: 100%;
    height: 28vh;
    background-color: #202020;

`;
const ReactHypeQuote = styled.h1`
    color: 	#60DBFB;
    font-family: 'Roboto';
    font-weight: 300;
    margin-top: 5%;
    margin-right: 5%;
    font-size: 3.1vw;
    animation: ${reactQAnim} 1.5s linear normal;
`;
const NodeHypeQuote = styled.h1`
    color: #78B561
    font-family: 'Roboto';
    font-weight: 300;
    margin-top: 5%;
    margin-left: 9%;
    margin-right: 18%;
    font-size: 3.1vw;
    animation: ${nodeQAnim} 1.5s linear normal;
`;
const Container = styled.div`
    display: block;
   margin-bottom: 0;
   height: 70vh;
`;
const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const FWContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
const IndividualContainer = styled.div`
    margin-left: 4%;
    width: 55%;
`;
const ProConWhy = styled.h1`
    font-family: 'Roboto';
    font-weight: 700;
`;
const PCWPoint = styled.h2`
    font-family: 'Roboto';
    font-weight: 300;
`;


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerState: false,
        }
    }

    render() {

        const Home = () => (
                <div>
                    <NavBar/>
                    <br/>
                    <Container>
                        <ImgContainer>
                            <NodeJsImage src={nodeJsImg}/>
                            <ReactImage src={reactImg}/>
                        </ImgContainer>
                    </Container>
                    <Banner>
                        <ImgContainer>
                            <NodeHypeQuote> Simple & Versatile</NodeHypeQuote>
                            <ReactHypeQuote> Highly Dynamic & Responsive</ReactHypeQuote>

                        </ImgContainer>

                    </Banner>
                    <FWContentContainer>
                        <IndividualContainer>
                            <ProConWhy>Pros</ProConWhy>
                            <PCWPoint>
                                So react is pretty lit. It has a cool DOM( document object model) that allows for like hot
                                reloading.
                            </PCWPoint>
                        </IndividualContainer>
                        <IndividualContainer>
                            <ProConWhy>Pros</ProConWhy>
                        </IndividualContainer>
                    </FWContentContainer>
                    <Footer/>
                </div>

            )
        ;
        return (
            <Router>
                <div>
                    <Route exact path='' component={Home}/>
                    <Route exact path='/Tutorial' component={PageTutorial}/>
                    <Route exact path='/Installation' render={(props) => <FWInstallation/>}/>
                    <Route exact path='/DemoPage' render={(props) => <Demo/>}/>
                    <Route exact path='/Conclusion' render={(props) => <Conclusion/>}/>
                    <Route exact path='/Credits' render={(props) => <Credits/>}/>
                </div>
            </Router>

        );
    }
}
