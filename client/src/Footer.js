import React, {Component} from "react";
import styled from "styled-components";

const FooterBG = styled.div`
    display: block;
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

export default class Footer extends Component{


    render(){
        return(
            <FooterBG>
                <FooterDiv>

                    <FooterBoxes>
                        <FooterSTitle>
                            Favourite Anime
                        </FooterSTitle>
                        <FooterSubCategory>
                            <FooterSContent>
                                Naruto
                            </FooterSContent>
                            <FooterSContent>
                                Attack on Titan
                            </FooterSContent>
                        </FooterSubCategory>
                    </FooterBoxes>

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
                                React Docs
                            </FooterSContent>
                            <FooterSContent>
                                NodeJS Docs
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

        );
    }
}