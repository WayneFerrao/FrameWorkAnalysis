import React, {Component} from 'react';
import styled from 'styled-components';
import NavBar from "./NavBar";
import TableContents from "./TableContents";
const Wrapper = styled.section`
  padding: 2em;
  background: #d5d8f0;
  color:#003d6b	;
  border-radius: 7px;
`;
export default class FWInstallation extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <div style={{padding: '4% 18% 2%'}}>
                    <h1 id = "react">
                        React Installation
                    </h1>
                    <h2 id = "requirements">
                        Requirements
                    </h2> 
                    <p>
                        Before installing ReactJS you must first ensure that you have both
                        Node.js and NPM properly installed on your device. You can check this
                        by using the commands below into command prompt or terminal: <br></br>
                        <Wrapper>
                            node -v
                        </Wrapper>
                        <br></br>
                        <Wrapper>
                            npm -v
                        </Wrapper>
                        <br></br>
                        If it is properly
                        installed it should output the version number <br></br>
                    </p>  
                    <h2 id = "stuff">
                        Stuff
                    </h2>
                    <p>
                        If you do not have these programs on your device here are the links to the downloads for
                        <a href ="https://nodejs.org/en/download/"> stuff</a>
                    </p>  
                    <h2 id = "install">
                        Installing React 
                    </h2>
                    <p>
                        Once you have ensured that you have NodeJs and NPM you will next install using:
                        <br></br>
                        <Wrapper>
                            npm install -g create-react-app
                        </Wrapper>
                        <br></br>
                    </p>  
                    <h2 id = "check">
                        Creating your First React application
                    </h2>
                    <p>
                        If you have correctly installed the React you will now be able to create your first
                        application. In your command prompt or terminal navigate to the file that you want your
                        application to be held in and enter:
                        <br></br>
                        <Wrapper>
                            npm create-react-app
                        </Wrapper>
                        <br></br>
                        You will then have to wait possibly a couple minutes before it finishes loading
                        enter:
                        <br></br>
                        <Wrapper>
                            npm start
                        </Wrapper>
                        <br></br>
                        it should show open the default react application in your browser.
                    </p>  
                    <h1 id ="backend" >
                        Backend Installation
                    </h1>*
                </div>
                <div>
                <TableContents>
                    <a href = "#react">React Installation</a> <br></br>
                    <a href = "#requirements">Requirements</a> <br></br>
                    <a href = "#install">Installing React</a> <br></br>
                    <a href = "#check">Creating your First React application</a> <br></br>
                    <a href = "#backend">Backend Installation</a>
                </TableContents>
                </div>
            </div>
            
        )
    }
    
}