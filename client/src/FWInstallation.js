import React, {Component} from 'react';
import styled from 'styled-components';
import NavBar from "./NavBar";
import TableContents from "./TableContents";
import Footer from "./Footer";

const CodeBlock = styled.section`
  padding: 2em;
  background: #000000;
  color:lime;
  border-radius: 7px;
`;
//anchors werent working properly cause of appbar and im too low iq to think of a good solution
const SubHeader = styled.h2`
    padding-top: 10%;
    margin-top: -10%;
    color: #424242;
    font-family: 'Roboto';
    font-weight: 500;
`
const MainHeader = styled.h1`
    padding-top: 10%;
    margin-top: -10%;
    color: black;
    font-size: 3em;
    font-family: 'Roboto';
    font-weight: 700;
`
const ContentDiv = styled.p`
    font-family: 'Roboto';
`
const PageContent = styled.div`
    padding-left: 3%;
    padding-top: 6%;
    padding-right: 19% ;
`
export default class FWInstallation extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div style={{padding: '6% 19% 2%'}}>
                    <StyledH1 id="react">
                        React Installation
                    </StyledH1>
                    <StyledH2 id="requirements">
                        Requirements

                    </SubHeader>
                    <ContentDiv>

                        Before installing ReactJS you must ensure that both
                        Node.js and NPM have been properly installed on your device. You can check this
                        by using the commands below i command prompt or terminal:
                        <br></br>
                        <br></br>
                        <CodeBlock>
                            node -v
                        </CodeBlock>
                        <br></br>
                        <CodeBlock>
                            npm -v
                        </CodeBlock>
                        <br></br>
                        If it is properly
                        installed it should output the version number
                        <br></br>

                    </ContentDiv>
                    <SubHeader id="node">

                        Install Node.js and NPM
                    </SubHeader>
                    <ContentDiv>
                        If you do not have these programs on your device, here are the links to the downloads for
                        <a href="https://nodejs.org/en/download/"> Node.js</a> and <a
                        href="https://www.npmjs.com/get-npm">NPM </a>
                    </ContentDiv>
                    <SubHeader id="install">

                        Installing React
                    </StyledH2>
                    <p>
                        Once you have ensured that you have NodeJs and NPM you will next install using:
                        <br></br>
                        <br></br>
                        <CodeBlock>
                            npm install -g create-react-app
                        </CodeBlock>
                        <br></br>
                    </p>  
                    <SubHeader id = "check">
                        Creating your First React Application
                    </SubHeader>
                    <ContentDiv>

                        If you have correctly installed the React you will now be able to create your first
                        application. In your command prompt or terminal, navigate to the file that you want your
                        application to be held in and enter:
                        <br></br>
                        <br></br>
                        <CodeBlock>
                            npm create-react-app
                        </CodeBlock>
                        <br></br>
                        You will then have to wait possibly a couple minutes before it finishes loading. Once
                        it has finished enter:
                        <br></br>
                        <br></br>
                        <CodeBlock>
                            npm start
                        </CodeBlock>
                        <br></br>
                        it should show open the default react application in your browser.
                    </ContentDiv>
                    <MainHeader id="backend">
                        NodeJS Installation

                    </MainHeader>
                </PageContent>
                <div>
                    <TableContents>
                        <br></br><a href="#react" style={{textDecoration: "none", color: "#003d6b"}}>React
                        Installation</a> <br></br>
                        <br></br><a href="#requirements"
                                    style={{textDecoration: "none", color: "#003d6b"}}>Requirements</a> <br></br>
                        <br></br><a href="#node" style={{textDecoration: "none", color: "#003d6b"}}>Install Node.js and
                        NPM</a> <br></br>
                        <br></br><a href="#install" style={{textDecoration: "none", color: "#003d6b"}}>Installing
                        React</a> <br></br>
                        <br></br><a href="#check" style={{textDecoration: "none", color: "#003d6b"}}>Creating your First
                        React application</a> <br></br>
                        <br></br><a href="#backend" style={{textDecoration: "none", color: "#003d6b"}}>Backend
                        Installation</a>
                    </TableContents>
                </div>
                <Footer/>
            </div>

        )
    }

}
