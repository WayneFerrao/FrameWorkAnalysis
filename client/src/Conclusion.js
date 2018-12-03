import React, {Component} from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

const SubHeader = styled.h2`
    padding-top: 10%;
    margin-top: -10%;
    color: #424242;
    font-family: 'Roboto';
    font-weight: 500;
`
const MainHeader = styled.h1`
    padding-top: 10%;
    margin-top: -10%;
    color: black;
    font-size: 2.5em;
    font-family: 'Roboto';
    font-weight: 700;
`
const Content = styled.p`
    font-family: 'Roboto';
`
const PageContent = styled.div`
    padding-left: 3%;
    padding-top: 6%;
    padding-right: 19% ;
`
export default class Conclusion extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <PageContent>

                    <MainHeader>
                        Framework Ratings</MainHeader>
                    <div>
                        React
                        <StarRatingComponent
                            name="FrameworkRating"
                            value={4}
                        />
                    </div>
                    <div>
                        NodeJS
                        <StarRatingComponent
                            name="FrameworkRating"
                            value={3}
                        />
                    </div>
                    <Content> The frameworks were alright </Content>
                    <MainHeader> Expectations and Challenges </MainHeader>
                    <SubHeader>Ease of Use </SubHeader>
                    <Content> Regarding React, the framework was fairly simple to install, but the framework did not
                        meet our expectations on its ease of use.
                        The framework was rather complicated, and because it wasn’t intuitive, the project required a
                        lot more research than other frameworks would have.
                    </Content>
                    <SubHeader>Learning Curve </SubHeader>
                    <Content>We would consider that React has a fairly steep learning curve compared to regular HTML and
                        Javascript.
                        HTML and Javascript was much easier to get a grasp on and required minimal self teaching, while
                        React required numerous hours to grasp a single concept.
                    </Content>
                    <MainHeader>Afterthoughts </MainHeader>
                    <Content>In retrospect, we should’ve studied React in greater detail to understand all the little
                        nuances that React has.
                        This would’ve cut down the amount of work we needed to put in by a significant amount.

                    </Content>
                </PageContent>
                <Footer/>
            </div>
        )
    }

}
