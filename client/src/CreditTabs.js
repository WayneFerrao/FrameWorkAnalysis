import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Buowen from './assets/meirl.png';
import Brandon from './assets/brandone.png';
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
    color: #5b73b4;
    font-family: 'Roboto';
    font-weight: 500;
`
const Content = styled.p`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1.15em
`

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
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Buowen Cao"/>
                        <Tab label="Wayne Ferrao"/>
                        <Tab label="Brandon Quach"/>
                        <Tab label="Jason Yu"/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    <TabContent>
                        <StyledImg src={Buowen}></StyledImg>
                        <Content>
                            <Header>Name:</Header>Buowen Cao
                            <Header>Responsiblities:</Header> Creating the installation page, creating sidebar for
                            easier navigation, made credits page, designing.
                            <Header>References: </Header> <a href="https://material-ui.com/demos/drawers/">Drawers,</a>
                            <a href="https://material-ui.com/demos/tabs/"> Tabs</a>
                        </Content>
                    </TabContent>
                </TabContainer>}
                {value === 1 && <TabContainer>
                    <TabContent>
                        <StyledImg src={Wayne}></StyledImg>
                        <Content>
                            <Header>Name:</Header>Wayne Ferrao
                            <Header>Responsiblities:</Header> Creating the React Router routes & implementing them in the
                            NavBar. Designed and coded the appearance and functionality of the Home page and Footer.
                            <Header>References: </Header> Stuff
                        </Content>
                    </TabContent>
                </TabContainer>}
                {value === 2 && <TabContainer>
                    <TabContent>
                        <StyledImg src={Brandon}></StyledImg>
                        <Content>
                            <Header>Name:</Header>Brandon Quach
                            <Header>Responsiblities:</Header> Stuff
                            <Header>References: </Header> Stuff
                        </Content>
                    </TabContent>
                </TabContainer>}
                {value === 3 && <TabContainer>
                    <TabContent>
                        <StyledImg src={Jason}></StyledImg>
                        <Content>
                            <Header>Name:</Header>Jason Yu
                            <Header>Responsiblities:</Header> Stuff
                            <Header>References: </Header> Stuff
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
