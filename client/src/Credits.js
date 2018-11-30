import React, {Component} from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from 'styled-components';
import CreditTabs from './CreditTabs';
const PageContent = styled.div`
    padding: 9% 5% 9%;
    height 500px;
`
export default class Credits extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <PageContent>
                    <CreditTabs/>
                </PageContent>
                <Footer/>
            </div>
        )
    }

}