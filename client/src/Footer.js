import React, {Component} from "react";
import styled from "styled-components";

const FooterBG = styled.div`    
    display: flex;
    bottom: 0px;
    height: 30%;
    background-color: #eeeeee;
`;
const FooterDiv = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    justify-content: space-between;
`;
const FooterBoxes = styled.div`
    margin-top: 2%;
    margin-left: 3%;
    margin-right: 3%;
    flex-direction: column;
   
`;
const FooterSubCategory = styled.div`
    margin-top:4px;
`;

const FooterSTitle = styled.h1`
    font-size: 0.9em;
    font-family: 'Roboto';
    color: #424242;
`;

const FooterSContent = styled.h4`
    color: #5a5a5a;
    font-size: 0.9em
    font-family: 'Roboto';
    font-weight: 300;
`;
const FooterLink = styled.a`
    color: #5a5a5a;
    text-decoration: none;
    :hover{
      text-decoration: underline;
      color: #424242;
  }
`;
const Phantom = styled.div`
    display: block;
    padding: 20px;
    height: 1vh;
    width: 100%;
`;
export default class Footer extends Component {


    render() {
        return (
            <div>
                <Phantom/>
                <FooterBG>
                    <FooterDiv>
                        <FooterBoxes>
                            <FooterSTitle>
                                Documentation
                            </FooterSTitle>
                            <FooterSubCategory>
                                <FooterSContent>
                                    <FooterLink href="https://reactjs.org/">
                                        React
                                    </FooterLink>
                                </FooterSContent>
                                <FooterSContent>
                                    <FooterLink href="https://nodejs.org/en/">
                                        NodeJS
                                    </FooterLink>
                                </FooterSContent>
                                <FooterSContent>
                                    <FooterLink href="https://reacttraining.com/react-router/web/guides/quick-start">
                                        React Router
                                    </FooterLink>
                                </FooterSContent>
                                <FooterSContent>
                                    <FooterLink href="https://www.styled-components.com/docs">
                                        Styled Components
                                    </FooterLink>
                                </FooterSContent>
                                <FooterSContent>
                                    <FooterLink href="https://material-ui.com/getting-started/installation/">
                                        Material UI
                                    </FooterLink>
                                </FooterSContent>
                            </FooterSubCategory>
                        </FooterBoxes>
                        <FooterBoxes>
                            <FooterSTitle>
                                Social Media
                            </FooterSTitle>
                            <FooterSubCategory>
                                <FooterSContent>
                                    <FooterLink
                                        href="https://www.instagram.com/wayne.ferrao/?hl=en">@wayne.ferrao </FooterLink>
                                </FooterSContent>
                                <FooterSContent>
                                    <FooterLink
                                        href="https://www.instagram.com/jasonyu191/?hl=en">@jasonyu191</FooterLink>
                                </FooterSContent>
                                <FooterSContent>
                                    <FooterLink
                                        href="https://www.instagram.com/brandon_quach/?hl=en">@brandon_quach</FooterLink>
                                </FooterSContent>
                            </FooterSubCategory>
                        </FooterBoxes>
                        <FooterBoxes>
                            <FooterSTitle>
                                Github
                            </FooterSTitle>
                            <FooterSubCategory>
                                <FooterSContent>
                                    <FooterLink href="https://github.com/WayneFerrao">
                                        Wayne Ferrao
                                    </FooterLink>
                                </FooterSContent>
                                <FooterSContent>
                                    <FooterLink href="https://github.com/jasonyu191">
                                        Jason Yu
                                    </FooterLink>
                                </FooterSContent>
                                <FooterSContent>
                                    <FooterLink href="https://github.com/Cao3000">
                                        Buowen Cao
                                    </FooterLink>
                                </FooterSContent>
                                <FooterSContent>
                                    <FooterLink
                                        href="https://github.com/brandonq2">
                                        Brandon Quach
                                    </FooterLink>
                                </FooterSContent>
                            </FooterSubCategory>
                        </FooterBoxes>


                    </FooterDiv>
                </FooterBG>
            </div>
        );
    }
}