import React, {Component} from 'react';
import NavBar from "./NavBar";

import styled from 'styled-components';
import CreditTabs from './CreditTabs';
export default class Credits extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                This was made by Wayne, Brandon, Gary and Jason.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div style = {{padding: "5% 10% 10%"}}>
                
                <CreditTabs/>
                </div>
            </div>
        )
    }

}