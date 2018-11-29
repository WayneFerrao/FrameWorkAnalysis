import React, {Component} from 'react';
import styled from 'styled-components';
import NavBar from "./NavBar";
import TableContents from "./TableContents";
const Wrapper = styled.section`
  padding: 2em;
  background: #C0C0C0;
  border-radius: 7px;
`;
//anchors werent working properly cause of appbar and im too low iq to think of a good solution
const Monkey = styled.h2`
    padding-top: 10%;
    margin-top: -10%;
`
const Monkey2 = styled.h1`
    padding-top: 10%;
    margin-top: -10%;
`
export default class FWInstallation extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <div style={{padding: '4% 18% 2%'}}>
                    <Monkey2 id = "react">
                        React Installation
                    </Monkey2>
                    <Monkey id = "requirements">
                        Requirements
                    </Monkey> 
                    <p>
                        Before installing ReactJS you must ensure that both
                        Node.js and NPM have been properly installed on your device. You can check this
                        by using the commands below i command prompt or terminal: 
                        <br></br>
                        <br></br>
                        <Wrapper>
                            node -v
                        </Wrapper>
                        <br></br>
                        <Wrapper>
                            npm -v
                        </Wrapper>
                        <br></br>
                        If it is properly
                        installed it should output the version number 
                        <br></br>
                    </p>  
                    <Monkey id = "node">
                        Install Node.js and NPM
                    </Monkey>
                    <p>
                        If you do not have these programs on your device here are the links to the downloads for
                        <a href ="https://nodejs.org/en/download/"> Node.js</a> and <a href = "https://www.npmjs.com/get-npm">NPM </a>
                    </p>  
                    <Monkey id = "install">
                        Installing React 
                    </Monkey>
                    <p>
                        Once you have ensured that you have NodeJs and NPM you will next install using:
                        <br></br>
                        <br></br>
                        <Wrapper>
                            npm install -g create-react-app
                        </Wrapper>
                        <br></br>
                    </p>  
                    <Monkey id = "check">
                        Creating your First React application
                    </Monkey>
                    <p>
                        If you have correctly installed the React you will now be able to create your first
                        application. In your command prompt or terminal navigate to the file that you want your
                        application to be held in and enter:
                        <br></br>
                        <br></br>
                        <Wrapper>
                            npm create-react-app
                        </Wrapper>
                        <br></br>
                        You will then have to wait possibly a couple minutes before it finishes loading
                        enter:
                        <br></br>
                        <br></br>
                        <Wrapper>
                            npm start
                        </Wrapper>
                        <br></br>
                        it should show open the default react application in your browser.
                    </p>  
                    <Monkey2 id ="backend" >
                        Backend Installation
                    </Monkey2>
                </div>
                <div>
                <TableContents>
                <br></br> <a href = "#react" style = {{textDecoration: "none",color: "#003d6b" }}>React Installation</a> <br></br>
                <br></br>    <a href = "#requirements" style = {{textDecoration: "none",color: "#003d6b" }}>Requirements</a> <br></br>
                <br></br>    <a href = "#node" style = {{textDecoration: "none",color: "#003d6b" }}>Install Node.js and NPM</a> <br></br>
                <br></br>    <a href = "#install" style = {{textDecoration: "none",color: "#003d6b" }}>Installing React</a> <br></br>
                <br></br>    <a href = "#check" style = {{textDecoration: "none",color: "#003d6b" }}>Creating your First React application</a> <br></br>
                <br></br>    <a href = "#backend" style = {{textDecoration: "none",color: "#003d6b" }}>Backend Installation</a>
                </TableContents>
                </div>
            </div>
            
        )
    }
    
}