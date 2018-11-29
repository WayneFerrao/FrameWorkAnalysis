import React, {Component} from "react";
import {AppBar, Button, Drawer, ListItem, ListItemIcon, ListItemText, MenuList, Toolbar} from "@material-ui/core";
import {Routes} from "./routes";
import {Link} from "react-router-dom";
import InboxIcon from "@material-ui/core/SvgIcon/SvgIcon";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerState: false,
        }
    }
    toggleDrawer = (open) => () => {
        this.setState({
            drawerState: open,
        });
    };
    render() {
        const sideList = (
            <NavBarDiv>
                <MenuList>
                    <ListItem button key="Home">
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText> Home</ListItemText>
                    </ListItem>
                    <ListItem button key="Tut">
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText> Tutorial</ListItemText>
                    </ListItem>
                    <ListItem button key="Installation">
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText>Installation</ListItemText>
                    </ListItem>
                    <ListItem button key="Demo Page">
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText>Demo Page</ListItemText>
                    </ListItem>
                    <ListItem button key="Conclusion">
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText>Conclusion</ListItemText>
                    </ListItem>
                    <ListItem button key="Credits">
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText>Credits</ListItemText>
                    </ListItem>
                </MenuList>
            </NavBarDiv>
        );
        return (
            <AppBar style={{background: '#003d6b'}} position="static">
                <Toolbar>
                    <Button color={"inherit"} onClick={this.toggleDrawer(true)}>Menu</Button>
                    <Drawer transitionDuration={300} open={this.state.drawerState}
                            onClose={this.toggleDrawer(false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer(false)}
                            onKeyDown={this.toggleDrawer(false)}
                        >
                            <MenuList>
                                {Routes.map((prop, key) => {
                                    return (
                                        <ListItem button component={Link} to={prop.path} key={prop.sidebarName}>
                                            <ListItemIcon>
                                                <prop.icon/>
                                            </ListItemIcon>
                                            <ListItemText primary={prop.sidebarName}/>
                                        </ListItem>
                                    );
                                })}
                            </MenuList>
                        </div>
                    </Drawer>
                </Toolbar>
            </AppBar>
        );
    }
}