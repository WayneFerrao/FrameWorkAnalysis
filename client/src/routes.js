import {Home, BuildSharp, DescriptionSharp, AccountBoxSharp, ThumbsUpDownSharp, AssignmentTurnedInSharp} from '@material-ui/icons';
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
    },
    {
        sidebarName: 'Installation',
        path: '/Installation',
        icon: BuildSharp,
        component: FWInstallation
    },
    {
        sidebarName: 'Tutorial',
        path: '/Tutorial',
        icon: DescriptionSharp,
        component: PageTutorial
    },

    {
        sidebarName: 'Demo Page',
        path: '/DemoPage',
        icon: AssignmentTurnedInSharp ,
        component: Demo
    },
    {
        sidebarName: 'Conclusion',
        path: '/Conclusion',
        icon: ThumbsUpDownSharp,
        component: Conclusion
    },
    {
        sidebarName: 'Credits',
        path: '/Credits',
        icon: AccountBoxSharp,
        component: Credits
    }
];