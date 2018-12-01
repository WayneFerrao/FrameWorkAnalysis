import React, {Component} from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from 'styled-components';

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
                <Footer/>
            </div>
        )
    }

}