import {Home, Notifications, AccountCircle} from '@material-ui/icons';
import PageTutorial from "./PageTutorial";
import FWInstallation from "./FWInstallation";
import Demo from "./Demo";
import Conclusion from "./Conclusion";
import Credits from "./Credits";
import React from "react";

export const Routes = [
    {
        sidebarName: 'Home',
        path: '',
        icon: Home,
        component: Home,
        content: " this is deku he sucknskj"
    },
    {
        sidebarName: 'Tutorial',
        path: '/Tutorial',
        icon: Home,
        component: PageTutorial
    },
    {
        sidebarName: 'Installation',
        path: '/Installation',
        icon: AccountCircle,
        component: FWInstallation
    },
    {
        sidebarName: 'Demo Page',
        path: '/DemoPage',
        icon: Notifications,
        component: Demo
    },
    {
        sidebarName: 'Conclusion',
        path: '/Conclusion',
        icon: Home,
        component: Conclusion
    },
    {
        sidebarName: 'Credits',
        path: '/Credits',
        icon: AccountCircle,
        component: Credits
    }
];