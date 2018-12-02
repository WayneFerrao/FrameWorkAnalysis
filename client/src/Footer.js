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
export default class Footer extends Component {


    render() {
        return (
            <FooterBG>
                <FooterDiv>
                    <FooterBoxes>
                        <FooterSTitle>
                            Social Media
                        </FooterSTitle>
                        <FooterSubCategory>
                            <FooterSContent>
                                @wayne.ferrao
                            </FooterSContent>
                            <FooterSContent>
                                @jasonyu191
                            </FooterSContent>
                        </FooterSubCategory>
                    </FooterBoxes>
                    <FooterBoxes>
                        <FooterSTitle>
                            Documentation
                        </FooterSTitle>
                        <FooterSubCategory>
                            <FooterSContent>
                                <FooterLink href="https://reactjs.org/">React Docs</FooterLink>
                            </FooterSContent>
                            <FooterSContent>
                                <FooterLink href = "https://nodejs.org/en/">
                                    NodeJS Docs
                                </FooterLink>
                            </FooterSContent>
                            <FooterSContent>
                                <FooterLink href = "https://reacttraining.com/react-router/web/guides/quick-start">
                                    React Router
                                </FooterLink>
                            </FooterSContent>
                            <FooterSContent>
                                <FooterLink href = "https://www.styled-components.com/docs">
                                    Styled Components
                                </FooterLink>
                            </FooterSContent>
                            <FooterSContent>
                                <FooterLink href = "https://material-ui.com/getting-started/installation/">
                                    MaterialUI
                                </FooterLink>
                            </FooterSContent>
                        </FooterSubCategory>
                    </FooterBoxes>
                    <FooterBoxes>
                        <FooterSTitle>
                            Resumes
                        </FooterSTitle>
                        <FooterSubCategory>
                            <FooterSContent>
                                Wayne Ferrao
                            </FooterSContent>
                            <FooterSContent>
                                Jason
                            </FooterSContent>
                            <FooterSContent>
                                Gary
                            </FooterSContent>
                        </FooterSubCategory>
                    </FooterBoxes>
                </FooterDiv>
            </FooterBG>

    render() {
        return (
            <div>
                <Phantom/>
                <FooterBG>
                    <FooterDiv>
                        <FooterBoxes>
                            <FooterSTitle>
                                Social Media
                            </FooterSTitle>
                            <FooterSubCategory>
                                <FooterSContent>
                                    @wayne.ferrao
                                </FooterSContent>
                                <FooterSContent>
                                    @jasonyu191
                                </FooterSContent>
                            </FooterSubCategory>
                        </FooterBoxes>
                        <FooterBoxes>
                            <FooterSTitle>
                                Documentation
                            </FooterSTitle>
                            <FooterSubCategory>
                                <FooterSContent>
                                    <FooterLink href="https://reactjs.org/">React Docs</FooterLink>
                                </FooterSContent>
                                <FooterSContent>
                                    <FooterLink href="https://nodejs.org/en/">
                                        NodeJS Docs
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
                                        MaterialUI
                                    </FooterLink>
                                </FooterSContent>
                            </FooterSubCategory>
                        </FooterBoxes>
                        <FooterBoxes>
                            <FooterSTitle>
                                Resumes
                            </FooterSTitle>
                            <FooterSubCategory>
                                <FooterSContent>
                                    Wayne Ferrao
                                </FooterSContent>
                                <FooterSContent>
                                    Jason Yu
                                </FooterSContent>
                                <FooterSContent>
                                    Buowen Cao
                                </FooterSContent>
                                <FooterSContent>
                                    Brandon Quach
                                </FooterSContent>
                            </FooterSubCategory>
                        </FooterBoxes>
                    </FooterDiv>
                </FooterBG>
            </div>
        );
    }
}
