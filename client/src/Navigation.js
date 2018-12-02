import React, {Component} from 'react';
import styled from 'styled-components';
const StyledA = styled.a`
    text-decoration: none;
    color:#5b73b4;
    :hover{
        text-decoration: underline;
        color:#003d6b;
    }
`
function Navigation(props) {
    return(
        <StyledA href= {props.link}>{props.text}</StyledA>
    );
}
export default (Navigation);