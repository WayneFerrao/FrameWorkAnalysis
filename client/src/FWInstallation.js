import React, {Component} from 'react';
import styled from 'styled-components';
import NavBar from "./NavBar";
import TableContents from "./TableContents";
import Footer from "./Footer";
import Navigation from "./Navigation";
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
`
const MainHeader = styled.h1`
    padding-top: 10%;
    margin-top: -10%;
    color: black;
    font-size: 40px;
    font-family: 'Roboto';
`
const Content = styled.p`
    font-family: 'Roboto';
`
const PageContent = styled.div`
    padding: 6% 19% 2%;
`
export default class FWInstallation extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <PageContent>
                    <MainHeader id = "react">
                        React Installation
                    </MainHeader>
                    <SubHeader id="requirements">
                        Requirements
                    </SubHeader>
                    <Content>
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
                    </Content>
                    <SubHeader id="node">
                        Install Node.js and NPM
                    </SubHeader>
                    <Content>
                        If you do not have these programs on your device here are the links to the downloads for
                        <a href="https://nodejs.org/en/download/"> Node.js</a> and <a
                        href="https://www.npmjs.com/get-npm">NPM </a>
                    </Content>
                    <SubHeader id="install">
                        Installing React
                    </SubHeader>
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
                    <Content>
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
                    </Content>
                    <MainHeader id="backend">
                        Backend Installation
                    </MainHeader>
                </PageContent>
                <div>
                <TableContents>    
                <br></br><Navigation link = "#react" text = "React Installation"/> <br></br>
                <br></br><Navigation link = "#requirements" text = "Requirements"/> <br></br>
                <br></br><Navigation link = "#node" text = "Install Node.js and NPM"/> <br></br>
                <br></br><Navigation link = "#install" text = "Installing React"/> <br></br>
                <br></br><Navigation link = "#check" text = "Creating your First React Application"/> <br></br>
                <br></br><Navigation link = "#backend" text = "Backend Installation"/> <br></br>
                </TableContents>
                </div>
                <Footer/>
            </div>

        )
    }

}