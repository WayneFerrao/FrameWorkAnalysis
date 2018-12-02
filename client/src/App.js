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
        opacity: 0;
        margin-left: 3%;
    }
    to {
        margin-left: 6%;
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
    margin-left:3%;
    animation: ${ReactRotate} 1.5s linear normal;
`;

const NodeJsImage = styled.img`
    width: 40%;
    height:45%;
    margin-top:5%;
    margin-left: 6%;
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
    margin-right: 1%;
    font-size: 3.1vw;
    animation: ${reactQAnim} 1.5s linear normal;
`;
const NodeHypeQuote = styled.h1`
    color: #78B561;
    font-family: 'Roboto';
    font-weight: 300;
    margin-top: 5%;
    margin-left: 9%;
    margin-right: 20%;
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
    margin-left: 3%;
    width: 55%;
    padding-right: 2%;
    border-right:1px solid #eeeeee;
`;
const ProConWhy = styled.h1`
    font-family: 'Roboto';
    font-weight: 500;
`;
const ProConWhySubTitle = styled.h2`
    font-family: 'Roboto';
    color: #424242;
    font-weight: 400;
`;
const PCWPointDiv = styled.div`
 border-bottom:1px solid #eeeeee;
    
`;
const PCWPoint = styled.h3`
    color: #5a5a5a;
    font-family: 'Roboto';
    font-weight: 300;
    font-size:0.95em;
`;
const Vertical = styled.div`
     border-right:1px solid #eeeeee;
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
                            <ProConWhy>What is it?</ProConWhy>
                            <PCWPoint>
                                Node JS is an open-source cross-platform runtime environment, built on Google's V8
                                Javascript engine that runs Javascript code on the server side. It uses an event-driven,
                                non-blocking I/O model that makes it light & efficient. Due to its simplicity, NodeJS is
                                very popular and used frequently by developers for back-end development.
                            </PCWPoint>
                            <PCWPointDiv/>
                            <ProConWhy>Pros</ProConWhy>
                            <ProConWhySubTitle>Incredibly Fast</ProConWhySubTitle>
                            <PCWPoint>
                                NodeJS uses a single thread, the event loop, as opposed to multiple threads to handle all
                                asynchronous I/O operations.
                            </PCWPoint>
                            <ProConWhySubTitle>Easy Coding</ProConWhySubTitle>
                            <PCWPoint>
                                NodeJS lets developers to code in Javascript on both the client & server side of the
                                application.
                                This makes data transport simple & convenient.
                            </PCWPoint>
                            <PCWPointDiv/>
                            <ProConWhy>Cons</ProConWhy>
                            <ProConWhySubTitle>Unstable API</ProConWhySubTitle>
                            <PCWPoint>
                                Unfortunately, NodeJS lacks consistency as its API updates frequently & these changes are
                                often
                                backward-incompatible.
                            </PCWPoint>
                            <ProConWhySubTitle>Unsuitable For Heavy Computing</ProConWhySubTitle>
                            <PCWPoint>
                                NodeJS does not currently support multi-threaded computing. While it can support complicated
                                applications, heavy computations block incoming requests which decreases performance.
                            </PCWPoint>
                        </IndividualContainer>
                        <Vertical/>
                        <IndividualContainer>
                            <ProConWhy>What is it?</ProConWhy>
                            <PCWPointDiv>
                                <PCWPoint>
                                    React is simple declarative Javascript library used for building user interfaces. It
                                    allows you to build isolated pieces of code called components that come together to
                                    form a functional web-app. React will efficiently update and render the right
                                    components when data changes. It's used by developers to build large web applications
                                    without changing the data.
                                </PCWPoint>
                            </PCWPointDiv>
                            <ProConWhy>Pros</ProConWhy>
                            <ProConWhySubTitle>The Virtual DOM</ProConWhySubTitle>
                            <PCWPoint>
                                React uses a virtual DOM to update the smallest of changes applied by the user without
                                affecting the rest of the interface. This allows for hot reloading and increased
                                performance.
                            </PCWPoint>
                            <ProConWhySubTitle>Reusable Components</ProConWhySubTitle>
                            <PCWPoint>
                                All React components are isolated & changes in one do not affect the others. This allows
                                components, such as the footer on this page to be accessed & reused throughout this
                                website.
                            </PCWPoint>
                            <PCWPointDiv/>
                            <ProConWhy>Cons</ProConWhy>
                            <ProConWhySubTitle>Steep Learning Curve</ProConWhySubTitle>
                            <PCWPoint>
                                React uses JSX elements, a syntax extension that allows for HTML to be mixed with
                                JavaScript. For
                                new users, this can be very unfamiliar & challenging to grasp at first
                            </PCWPoint>
                            <ProConWhySubTitle>Too Dynamic?</ProConWhySubTitle>
                            <PCWPoint>
                                The environment is constantly changing with the release of new updates & tools. This
                                results in sub-par documentation & can therefore be a challenge for developers to
                                integrate these tools.
                            </PCWPoint>
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


