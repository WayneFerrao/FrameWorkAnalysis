/*
Changes made: I changed position of appbar to relative and changed the zindex
*/
import React, {Component} from "react";
import {AppBar, Button, Drawer, ListItem, ListItemIcon, ListItemText, MenuList, Toolbar} from "@material-ui/core";
import {Routes} from "./routes";
import {Link} from "react-router-dom";

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
        return (
            <AppBar style={{background: 'black', zIndex: 1}} position="fixed">
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
                                            <ListItemIcon sharp >
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