import React, {Component} from 'react';
import Particles from 'react-particles-js';
import NavBar from "./NavBar";
import TableContents from "./TableContents";
import Footer from "./Footer";
import styled from 'styled-components';
import Navigation from "./Navigation";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar"

const CodeBlock = styled.section`
  padding: 2em;
  background: #000000;
  color:lime;
  border-radius: 7px;
`;

const styles = {
    width: 250,
    height: 250,
    margin: 25
}
const PageContent = styled.div`
    padding-left: 3%;
    padding-top: 6%;
    padding-right: 19% ;
`
const Background = styled.div`
    background-color: #4285f4;
    display: inline-block;
`;
const SubHeader = styled.h2`
    padding-top: 10%;
    margin-top: -10%;
    color: #424242;
    font-weight:500;
    font-family: 'Roboto';
`
const MainHeader = styled.h1`
    padding-top: 10%;
    margin-top: -10%;
    color: black;
    font-size: 3em;
    font-weight:700;
    font-family: 'Roboto';
`
const Content = styled.p`
    font-family: 'Roboto';
`
export default class PageTutorial extends Component {
    render() {
        return (<div>
            <NavBar/>
            <PageContent>

                <MainHeader id="tutorial">
                    Demo Tutorial</MainHeader>
                <SubHeader id="cards">
                    Cards
                </SubHeader>
                <Card style={{
                    maxWidth: 320
                }}>
                    <CardMedia style={{
                        objectFit: "cover"
                    }} component="img" alt="Sample" height="180"
                               image="https://thumbs.dreamstime.com/z/online-robber-17098197.jpg" title="Sample"/>

                    <CardContent>
                        <Typography>
                            <h1>
                                Sample Title
                            </h1>
                        </Typography>
                        <Typography>
                            <p>
                                Sample Description
                            </p>
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button variant="contained" color="primary" size="large">
                            Button 1
                        </Button>
                        <Button variant="contained" color="primary" size="large">
                            Button 2
                        </Button>
                    </CardActions>
                </Card>

                <Content>This is an example of a card. Cards are a simple and aesthetically pleasing way to display
                    content and actions on a single topic. They contain actions and elements like text and images.
                </Content>

                <SubHeader id="cardimp">
                    Implementation of Cards
                </SubHeader>
                <Content>
                    To make a simple card, you first start off with the {`<Card>`}
                    element.
                </Content>

                <CodeBlock>
                    {`<Card>`}
                    <br/> {`</Card>`}
                </CodeBlock>

                <Content>To add an image to your Card you can use CardMedia with an img tag inside that directs to your
                    image.
                </Content>
                <CodeBlock>
                    {`<Card>`}
                    <br/>
                    &emsp;{`<CardMedia>`}
                    <br/>
                    &emsp;&emsp; {`image="yourimage.jpg"`}
                    <br/>
                    &emsp;{`</CardMedia>`}
                    <br/> {`</Card>`}
                </CodeBlock>
                <Content>To add a title or description to your card use the {`<CardContent>`} component along
                    with {`<Typography>`} and either {`<h1>`} or {`<p>`} tags for the title and description.
                </Content>
                <CodeBlock>
                    {`<Card>`}
                    <br/>
                    &emsp;{`<CardMedia>`}
                    <br/>
                    &emsp;&emsp; {`image="yourimage.jpg"`}
                    <br/>
                    &emsp;{`</CardMedia>`}
                    <br/>
                    &emsp;{`<CardContent>`}
                    <br/>
                    &emsp;&emsp; {`<Typography>`}
                    <br/>
                    &emsp; &emsp;&emsp; {`<h1>`}
                    <br/>
                    &emsp;&emsp; &emsp; &emsp; {`Sample Title`}
                    <br/>
                    &emsp; &emsp;&emsp; {`</h1>`}
                    <br/>
                    &emsp;{`</CardContent>`}
                    <br/> {`</Card>`}
                </CodeBlock>
                <Content>You can also add buttons to your card using the {`<CardAction>`} and {`<button>`} components.
                </Content>
                <CodeBlock>
                    {`<Card>`}
                    <br/>
                    &emsp;{`<CardMedia>`}
                    <br/>
                    &emsp;&emsp; {`image="yourimage.jpg"`}
                    <br/>
                    &emsp;{`</CardMedia>`}
                    <br/>
                    &emsp;{`<CardContent>`}
                    <br/>
                    &emsp;&emsp; {`<Typography>`}
                    <br/>
                    &emsp; &emsp;&emsp; {`<h1>`}
                    <br/>
                    &emsp;&emsp; &emsp; &emsp; {`Sample Title`}
                    <br/>
                    &emsp; &emsp;&emsp; {`</h1>`}
                    <br/>
                    &emsp;{`</CardContent>`}
                    <br/>
                    &emsp; {`<CardActions>`}
                    <br/>
                    &emsp; &emsp; {`<Button>`}
                    <br/>
                    &emsp; &emsp; &emsp; Button 1
                    <br/>
                    &emsp; &emsp; {`</Button>`}
                    <br/>
                    &emsp; {`</CardActions>`}

                    <br/> {`</Card>`}
                </CodeBlock>
                <br/>
                <SubHeader id="avatar">
                    Avatars
                </SubHeader>
                <Avatar
                    style={styles}
                    src="https://giffiles.alphacoders.com/139/13995.gif"
                />
                <Content>Avatars are a simple yet visually pleasing feature that
                    can be easily implemented into any website. Avatars are great for websites
                    such as portfolios so you can have a profile picture.</Content>
                <SubHeader id="avatarimp">Implementation of Avatars</SubHeader>
                <Content>Implementing it is simple. First we need to import avatars.</Content>
                <CodeBlock>
                    import Avatar from "@material-ui/core/Avatar
                </CodeBlock>
                <Content> If you just want an avatar that holds text (Initials), all you need to do is use
                    the Avatar tag and put text in it. An example is shown below:</Content>
                <CodeBlock>
                    {`<Avatar>`}
                    <br/>
                    &emsp; B.Q.
                    <br/>
                    {`</Avatar>`}
                    <br/>
                </CodeBlock>
                <Content> If you want to have an avatar with a picture all you need to do
                    is use the src tag inside of the Avatar tag. An example is shown below:</Content>
                <CodeBlock>
                    {`<Avatar src = "url or file path here"/>`}
                </CodeBlock>
                <Content> To edit the size of the avatar you first need to import styled-components.</Content>
                <CodeBlock>
                    import styled from 'styled-components';
                </CodeBlock>
                <Content> And then you need to use to create the style component such as the following:</Content>
                <CodeBlock>
                    {'const styles = {'}
                    <br/>
                    &emsp; width: 200,
                    <br/>
                    &emsp; height: 200
                    <br/>
                    {'}'}
                </CodeBlock>
                <Content> {'All you need to do now is to add “style = {styles}” to the avatar tag.'}</Content>
                <CodeBlock>
                    {'<Avatar style = {styles}/>'}
                </CodeBlock>
                <br/>
                <SubHeader id="pgly">
                    Page Layout
                </SubHeader>
                <Content>
                    Finally, to format the layout of the page, there are three simple things you can use to make your
                    webpage look cleaner and less cluttered.
                </Content>
                <SubHeader id="grid">
                    Grids
                </SubHeader>
                <Content>
                    Grids are great for centering components on your webpage. To do so, you need to first import grids:
                    import Grid from "@material-ui/core/Grid";
                    All you need to do now is call the tag listen below, and place the components you want centered in
                    between:

                </Content>
                <CodeBlock>
                    {`<Grid container justify= "center" align Items="center">`}
                    <br/>
                    &emsp;{`//Code goes here`}
                    <br/>
                    {`</Grid>`}
                </CodeBlock>
                <br/>
                <SubHeader id="tblb">
                    Thematic Breaks and Line Breaks
                </SubHeader>
                <Content>
                    To differentiate different parts of a webpage, you can simply insert a thematic break by using the
                    thematic break tag:
                </Content>
                <CodeBlock>
                    {`// Header Section`}
                    <br/>
                    {`<hr/>`}
                    <br/>
                    {`// Main Body`}
                    <br/>
                </CodeBlock>
                <Content>
                    And to fix spacing between components, all you need to add is a line break:
                </Content>
                <CodeBlock>
                    {`// Component 1`}
                    <br/>
                    {`<br/>`}
                    <br/>
                    {`// Component 2`}
                </CodeBlock>
                <br/>
                <SubHeader id="linkingFEBE">
                    Linking Front End and Back End
                </SubHeader>
                <Content>
                    Next we will link the React front-end with the NodeJS server. Navigate to the index.js file in the
                    server directory (not the client) and add the following code for a sample array. We will be
                    accessing
                    this array and mapping the objects at each index into JSX elements.
                </Content>
                <CodeBlock>
                    {`const friends = [ `}
                    <br/>
                    &emsp;{`{`}
                    <br/>
                    &emsp;&emsp;{`name: "John",`}
                    <br/>
                    &emsp;&emsp;{`age:20`}
                    <br/>
                    &emsp;{`},`}
                    <br/>
                    &emsp;{`{`}
                    <br/>
                    &emsp;&emsp;{`name: "Mary",`}
                    <br/>
                    &emsp;&emsp;{`age:20`}
                    <br/>
                    &emsp;{`},`}
                    <br/>
                    &emsp;{`{`}
                    <br/>
                    &emsp;&emsp;{`name: "Mike",`}
                    <br/>
                    &emsp;&emsp;{`age:18`}
                    <br/>
                    &emsp;{`},`}
                    <br/>
                    {`];`}
                </CodeBlock>
                <Content>
                    Next, add the following code. It will effectively link the server to the client.
                </Content>
                <CodeBlock>
                    {`app.get('/confirm', (req, res) => {`}<br/>
                    &emsp;{`res.json(CardData);`}<br/>
                    {`});`}
                </CodeBlock>
                <Content>
                    Next, add the following code to the App.js page to fetch the array we just coded from the server.
                </Content>
                <CodeBlock>
                    {`constructor(props) {`}<br/>
                    &emsp;{`super(props);`}<br/>
                    &emsp;{`this.state = {`}<br/>
                    &emsp;&emsp;{`animeData: []`}<br/>
                    &emsp;{`}`}<br/>
                    {`}`}<br/>
                    {`componentDidMount() {`}<br/>
                    &emsp;{`fetch('/confirm').then(res => res.json()).then(animeData => this.setState({animeData}));`}<br/>
                    {`}`}
                </CodeBlock>
                <Content>
                    Finally, you can use the javascript map function to map the array saved in state to JSX elements.
                </Content>
            </PageContent>
            <TableContents>
                <br></br><Navigation link="#tutorial" text="Demo Tutorial"/>
                <br></br>
                <br></br><Navigation link="#cards" text="Cards"/>
                <br></br>
                <br></br><Navigation link="#cardimp" text="Card Implementation"/>
                <br></br>
                <br></br><Navigation link="#avatar" text="Avatar"/>
                <br></br>
                <br></br><Navigation link="#avatarimp" text="Avatar Implementation"/>
                <br></br>
                <br></br><Navigation link="#pgly" text="Page Layout"/>
                <br></br>
                <br></br><Navigation link="#grid" text="Grids"/>
                <br></br>
                <br></br><Navigation link="#tblb" text="Thematic Breaks & Line Breaks"/>
                <br></br>
                <br></br><Navigation link="#linkingFEBE" text="Linking Front End and Back End"/>
                <br></br>
            </TableContents>
            <Footer/>
        </div>)
    }

}
