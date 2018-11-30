import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
          <div style = {{float:"left"}}>
        <img src = "https://res.cloudinary.com/teepublic/image/private/s--KvRn7ey3--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1512231713/production/designs/39441_1.jpg"></img>
        </div>
      
        <div style = {{float:"left"}}>
        yeet yeet yeet <br></br>
        yeet
        </div>
        </TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

CreditTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreditTabs);
