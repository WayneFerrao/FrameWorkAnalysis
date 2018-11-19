import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FWInstallation from "./FWInstallation";
import Demo from "./Demo";
import PageTutorial from "./PageTutorial";
import Conclusion from "./Conclusion";
import Credits from "./Credits";

const Main = styled.div`
  text-align: center;
`;


export default class App extends Component {
    render() {
        const Summary = () => (
            <Main>
                    <Link to="/Installation">
                        <h1> Installation</h1>
                    </Link>
                    <Link to="/Tutorial">
                        <h1> Tutorial</h1>
                    </Link>
                    <Link to="/DemoPage">
                        <h1> Demo Page</h1>
                    </Link>
                    <Link to="/Conclusion">
                        <h1> Conclusion</h1>
                    </Link>
                    <Link to="/Credits">
                        <h1> Credits</h1>
                    </Link>
            </Main>
        );
        return (
            <Router>
                <div>
                    <Route exact path='' component={Summary}/>
                    <Route exact path='/Tutorial' component = {PageTutorial} />
                    <Route exact path='/Installation' render={(props) => <FWInstallation/>} />
                    <Route exact path='/DemoPage' render={(props) => <Demo/>} />
                    <Route exact path='/Conclusion' render={(props) => <Conclusion/>} />
                    <Route exact path='/Credits' render={(props) => <Credits/>} />

                </div>
            </Router>


        );
    }
}

