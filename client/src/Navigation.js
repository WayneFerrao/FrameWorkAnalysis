import React from 'react';
import styled from 'styled-components';
const Links = styled.a`
    text-decoration: none;
    color:white;
    font-family: 'Roboto';
    :hover{
        text-decoration: underline;
        color:black;
    }
`
function Navigation(props) {
    return(
        <Links href= {props.link}>{props.text}</Links>
    );
}
export default (Navigation);