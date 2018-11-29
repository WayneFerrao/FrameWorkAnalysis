import React, {Component} from 'react';
import styled from 'styled-components';
import NavBar from "./NavBar";
import TableContents from "./TableContents";
export default class FWInstallation extends Component {
    
    render(){
        
        return(
            <div>
                <NavBar/>
                <div style={{padding: '2% 18% 2%',}} >
                    <br></br>
                    <br></br>
                    <h1 id = "react">
                        React Installation
                    </h1>
                    <h2 id = "requirements">
                        Requirements
                    </h2> 
                    <h4>
                        Before installing ReactJS you must first ensure that you have both
                        Node.js and NPM installed on your device. You can check this by using the
                        node -v and npm -v commands in your command prompt or terminal. If it is properly
                        installed it should output something similar to this: <br></br>
                        <img alt = "insert image here"src ="https://res.cloudinary.com/teepublic/image/private/s--KvRn7ey3--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1512231713/production/designs/39441_1.jpg"></img>
                    </h4>  
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
                        do npm -g create-react-app or something
                    </p>  
                    <h2 id = "check">
                        Checking React Installation
                    </h2>
                    <p>
                        npm start in thing
                    </p>  
                    <h1 id ="backend" >
                        Backend Installation
                    </h1>
                </div>
                <div>
                <TableContents>
                    <a href = "#react">React Installation</a>
                    <a href = "#requirements">Requirements</a>
                    <a href = "#install">Installing React</a>
                    <a href = "#check">Checking React Installation</a>
                    <a href = "#backend">Backend Installation</a>
                </TableContents>
                </div>
            </div>
            
        )
    }
    
}