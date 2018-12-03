import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Buowen from './assets/meirl.png';
import Brandon from './assets/brandone.jpg';
import Jason from './assets/json.png';
import Wayne from './assets/wane.png';

const StyledImg = styled.img`
    max-height:80%;
    max-width:80%;
    object-fit: contain;
    float: left;
    padding-right: 3%;
`
const TabContent = styled.div`
    height: 30em;
`
const Header = styled.h2`
    color: #424242;
    font-family: 'Roboto';
    font-weight: 500;
`
const MainHeader = styled.h1`
    padding-top: 5%;
    margin-top: -8%;
    color: black;
    font-size: 2.5em;
    font-family: 'Roboto';
    font-weight: 700;
`
const Content = styled.p`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1.05em
`
const Reference = styled.h4`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 0.8em;
    margin-bottom: 0;
`;

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class CreditTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        return (
            <div className={classes.root}>
                <MainHeader> Credits </MainHeader>
                <AppBar position="static" style={{background: "#424242"}}>
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Buowen Cao"/>
                        <Tab label="Wayne Ferrao"/>
                        <Tab label="Brandon Quach"/>
                        <Tab label="Jason Yu"/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    <TabContent>
                        <StyledImg src={Buowen}/>
                        <Content>
                            <Header>Student Number:</Header>500833495
                            <Header>Responsibilities:</Header>
                            Created TableContents and Navigation component to search for content on a page
                            based on it's heading.<br/> Design of installation, tutorial, conclusion and credits page
                            using
                            Styled Components. <br/>Wrote content for Frontend portion of the Installation page.
                            <Header>References: </Header>
                            <Reference>
                                https://material-ui.com/demos/drawers/
                                <br/>
                                https://material-ui.com/demos/tabs/
                            </Reference>
                        </Content>
                    </TabContent>
                </TabContainer>}
                {value === 1 && <TabContainer>
                    <TabContent>
                        <StyledImg src={Wayne}/>
                        <Content>
                            <Header>Student Number:</Header>5008112288
                            <Header>Responsibilities:</Header>
                            Installed, configured and linked the NodeJS server with the front end React server. <br/>Created
                            & implemented the React Router routes, Express route handlers and the navigation bar. <br/>Researched,
                            designed
                            and coded the appearance and functionality of the Home page and Footer.<br/>Contributed to
                            the design
                            of the Demo page and the back-end instructions on the Installation and Tutorial pages.
                            <Header>References: </Header>
                            <Reference>
                                https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-reactjs-and-react-native/<br/>
                                https://www.netguru.co/blog/pros-cons-use-node.js-backend<br/>
                                https://material-ui.com/demos/drawers/<br/>
                            </Reference>

                        </Content>
                    </TabContent>
                </TabContainer>}
                {value === 2 && <TabContainer>
                    <TabContent>
                        <StyledImg src={Brandon}/>
                        <Content>
                            <Header>Student Number:</Header>500834440
                            <Header>Responsibilities:</Header>
                            Created Avatars and helped format the Demo Page. <br/>
                            Contributed to and formatted the Tutorials page.<br/>
                            Contributed to and formatted the Conclusions page.<br/>
                            <Header>References:</Header>
                            <Reference>
                                https://material-ui.com/demos/avatars/<br/>
                                https://material-ui.com/api/avatar/ <br/>
                                https://material-ui.com/layout/grid/
                            </Reference>
                        </Content>
                    </TabContent>
                </TabContainer>}
                {value === 3 && <TabContainer>
                    <TabContent>
                        <StyledImg src={Jason}/>
                        <Content>

                            <Header>Student Number:</Header>500828987
                            <Header>Responsiblities:</Header> Created the cards and contributed to the design of Demo
                            page.
                            <br/>
                            Contributed to the design and content of the Demo tutorial and Conclusion.
                            <Header>References: </Header> <Reference>
                            https://material-ui.com/demos/cards/
                            <br/>
                            https://material-ui.com/layout/grid/

                        </Reference>
                        </Content>
                    </TabContent>
                </TabContainer>}
            </div>
        );
    }

}

CreditTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreditTabs);
