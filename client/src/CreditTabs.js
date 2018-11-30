import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
const StyledImg = styled.img`
    max-height:80%; 
    max-width:80%;
    object-fit: contain;
    float: left;
    padding-right: 3%;
`
const TabContent = styled.div`
  height: 400px;
`
const Header = styled.h3`
    color: #5b73b4;
    font-size: 15px;
`
const StyledP = styled.p`
    font-family: Roboto;
`
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
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
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Buowen Cao" />
            <Tab label="Wayne Ferrao" />
            <Tab label="Brandon Quach" />
            <Tab label="Jason Yu" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
          <TabContent>
            <StyledImg src = "https://i.imgur.com/nTsc3jv.png"></StyledImg>
          <StyledP>
            <Header>Name:</Header>Buowen Cao
            <Header>Responsablities:</Header> Creating the installation page, creating sidebar for easier navigation, made credits page, designing.
            <Header>References: </Header> <a href = "https://material-ui.com/demos/drawers/">Drawers,</a> <a href ="https://material-ui.com/demos/tabs/"> Tabs</a>       
          </StyledP>
        </TabContent>
        </TabContainer>}
        {value === 1 && <TabContainer>
          Item Two
          </TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>
          Item Two
          </TabContainer>}
      </div>
    );
  }
}

CreditTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreditTabs);
