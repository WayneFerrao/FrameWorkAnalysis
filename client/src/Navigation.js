import React, {Component} from 'react';
import styled from 'styled-components';
const StyledA = styled.a`
    text-decoration: none;
    color:white;
    :hover{
        text-decoration: underline;
        color:black;
    }
`
function Navigation(props) {
    return(
        <StyledA href= {props.link}>{props.text}</StyledA>
    );
}
export default (Navigation);