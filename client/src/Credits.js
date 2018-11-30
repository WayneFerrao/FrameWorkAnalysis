import React, {Component} from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from 'styled-components';
import CreditTabs from './CreditTabs';
export default class Credits extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <br/>
                This was made by Wayne, Brandon, Gary and Jason.
                <div style = {{padding: "5% 10% 10%"}}>
                
                <CreditTabs/>
                </div>
                <Footer/>
            </div>
        )
    }

}