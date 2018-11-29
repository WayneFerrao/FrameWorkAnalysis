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
import styled, { keyframes } from 'styled-components';


const ReactRotate = keyframes` 
    from {
        transform: rotate(0deg);
        opacity: 0;
    }
    to {
        transform: rotate(360deg);
        opacity: 1;
    }
`;
const nodeJSSlide = keyframes` 
    0% {
        top: -200px;
        margin-right: -100px;
        opacity: 0;
    }
    100% {
        top: 0px;
        margin-right: 0px;
        opacity: 1;
    }
`;
const ReactImage = styled.img`
    width: 45%;
    height:10%;
    margin:3%;
    animation: ${ReactRotate} 2s linear normal;
`;

const NodeJsImage = styled.img`
    width: 40%;
    height:45%;
    margin-top:5%;
    animation: ${nodeJSSlide} 2s linear normal;
`;

const Container = styled.div`
    display: block;
   
`;
const ImgContainer = styled.div`
    display: flex;
    flex-direction: row-reverse; 
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
                            <ReactImage src={reactImg}/>
                            <NodeJsImage src={nodeJsImg}/>
                        </ImgContainer>
                    </Container>
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


