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
                <PageContent>
                    <br/>
                    <MainHeader id="backend">
                        Get Started
                    </MainHeader>
                    <SubHeader id="requirements">
                        Requirements
                    </SubHeader>
                    <ContentDiv>
                        Before installing NodeJS or ReactJS, you must ensure that both
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
                        <br/>
                        <SubHeader id="node">
                            Install Node.js and NPM
                        </SubHeader>
                        <ContentDiv>
                            If you do not have these programs on your device, here are the links to the downloads for
                            <a href="https://nodejs.org/en/download/"> Node.js</a> and <a
                            href="https://www.npmjs.com/get-npm">NPM </a>
                        </ContentDiv>
                    </ContentDiv>
                    <MainHeader id="backend">
                        NodeJS Installation
                    </MainHeader>
                    <ContentDiv>
                        Open your terminal. Create a folder called myWebApp(or any name) & navigate into an empty
                        directory. This will hold all your code for this project. We will start by creating a
                        package.json
                        file by running the following command. This file will act as the central hub of our project.
                        It's used to define the dependencies that the project will need to work.
                        <br/><br/>
                        <CodeBlock>
                            npm init
                        </CodeBlock>
                        <br/> <br/>
                        You will be prompted with how you want to configure the settings for your new package.json file.
                        For the sake of simplicity, we can stick to the default settings, so just keep hitting enter
                        till it finishes. The first dependency we need is express so run the following commands.
                        <br/><br/>
                        <CodeBlock>
                            npm install --save express
                        </CodeBlock>
                        <br/><br/>
                        Next create a new file inside myWebApp called index.js. Now open up a code editor and add the
                        following code to index.js.
                        <br/><br/>
                        <CodeBlock>
                            {`const express = require('express');`}<br/>
                            {`const app = express();`}<br/>
                            {`app.get('/', (req, res) => {`}<br/>
                            &emsp;{`res.send({hello:'world'});`}<br/>
                            {`}`}<br/>
                            {`app.listen(5000);`}<br/>
                        </CodeBlock>
                        <br/><br/>
                        Next, ensure you're in the myWebApp directory and run the following command in your terminal.
                        <br/><br/>
                        <CodeBlock>
                            node index.js
                        </CodeBlock>
                        <br/><br/>
                        Now if you open a browser and try navigating to http://localhost:5000! If you want to close the connection,
                        simply press CTRL + C.
                    </ContentDiv>
                    <MainHeader id="react">
                        React Installation
                    </MainHeader>

                    <SubHeader id="install">
                        Installing React
                    </SubHeader>
                    <p>
                        Now that you have your server configured, we can move on to setting up our client server using React.
                        In a separate terminal tab( we still have the node server running), ensure you are in the
                        myWebApp directory in your terminal and run the following command.
                        <br></br>
                        <br></br>
                        <CodeBlock>
                            npm install -g create-react-app
                        </CodeBlock>
                        <br></br>
                        This will download the tool required to generate a new React project.
                    </p>
                    <SubHeader id="check">
                        Creating your First React Application
                    </SubHeader>
                    <ContentDiv>
                        If you have correctly installed the create-react-app tool, you will now be able to create your first
                        application. Once again, ensure you're in your myWebApp folder ( folder where we made our server files ).
                        Now run the following code.
                        <br></br>
                        <br></br>
                        <CodeBlock>
                            create-react-app client
                        </CodeBlock>
                        <br></br>
                        You will then have to wait a couple minutes while all the packages get installed. Once
                        it has finished, run the following commands.
                        <br></br>
                        <br></br>
                        <CodeBlock>
                            {`cd client`}<br/>
                            npm start
                        </CodeBlock>
                        <br></br>
                        This should start the React development server and open the default React application in http://localhost:3000.
                        To edit this front-end, navigate to the /src folder inside client, open a code editor and edit the App.js file.
                        Once you hit save, your changes can immediately be seen in the browser! Happy coding!
                    </ContentDiv>

                </PageContent>
                <div>
                    <TableContents>
                        <br></br><Navigation link="#react" text="React Installation"/> <br></br>
                        <br></br><Navigation link="#requirements" text="Requirements"/> <br></br>
                        <br></br><Navigation link="#node" text="Install Node.js and NPM"/> <br></br>
                        <br></br><Navigation link="#install" text="Installing React"/> <br></br>
                        <br></br><Navigation link="#check" text="Creating your First React Application"/> <br></br>
                        <br></br><Navigation link="#backend" text="Backend Installation"/> <br></br>
                    </TableContents>
                </div>
                <Footer/>
            </div>

        )
    }

}