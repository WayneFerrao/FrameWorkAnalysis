import React, {Component} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from "./NavBar";
import PageTutorial from "./PageTutorial";
import FWInstallation from "./FWInstallation";
import Demo from "./Demo";
import Conclusion from "./Conclusion";
import Credits from "./Credits";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerState: false,
        }
    }

    render() {

        const Home = () =>(
               <NavBar/>
        );
        return (

                <Router>
                    <div>
                        <Route exact path='' component={ Home }/>
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


