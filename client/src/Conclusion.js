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
    font-size: 2.2em;
    font-family: 'Roboto';
    font-weight: 700;
    margin-bottom: 1%;
`
const FrameworkName = styled.h2`
    color: #424242;
    font-family: 'Roboto';
    font-weight: 500;
`;
const Content = styled.p`
    font-family: 'Roboto';
`
const PageContent = styled.div`
    padding-left: 3%;
    padding-top: 6%;
    padding-right: 19% ;
`;
const RatingContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const NameAndRatingDiv = styled.div`
    margin-right: 3%;
`;

export default class Conclusion extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <PageContent>
                    <MainHeader>
                        Framework Ratings
                    </MainHeader>
                    <RatingContainer>
                        <NameAndRatingDiv>
                            <FrameworkName>
                                React
                            </FrameworkName>
                            <StarRatingComponent
                                name="FrameworkRating"
                                value={4}
                            />
                        </NameAndRatingDiv>
                        <NameAndRatingDiv>
                            <FrameworkName>
                                NodeJS
                            </FrameworkName>
                            <StarRatingComponent
                                name="FrameworkRating"
                                value={3}
                            />
                        </NameAndRatingDiv>
                    </RatingContainer>
                    <MainHeader> Our Experience </MainHeader>
                    <SubHeader>Ease of Use </SubHeader>
                    <Content>
                        NodeJS was fairly simple to install and set up. We read up that it was a very popular and
                        well documented back-end framework, which is why we chose it.
                        Regarding React, the framework was fairly simple to install, but the framework did not
                        meet our expectations on its ease of use. Wayne had a lot of experience with React so he helped
                        with the learning process. However, the framework was rather complicated, and because it
                        wasn’t intuitive, developing the project required a lot more research than other frameworks
                        would have.
                    </Content>
                    <SubHeader>Learning Curve </SubHeader>
                    <Content>We would consider that React has a fairly steep learning curve compared to regular HTML and
                        Javascript. HTML and Javascript was much easier to get a grasp on and required minimal self
                        teaching, while
                        React was significantly more challenging because we had internalize new concepts such as props,
                        state and the use of JSX elements.<br/>
                        The learning curve of NodeJS was much steeper than React & we had a lot of trouble determining
                        how to implement Express route handlers or handle POST, GET requests.
                    </Content>
                    <MainHeader>Afterthoughts </MainHeader>
                    <Content>In retrospect, we should’ve studied both React and NodeJS in greater detail to understand
                        the nuances of both frameworks has. This would’ve reduced the amount of work required by a
                        significant amount. Despite its difficulties, we did recognize that these are frameworks are immensely
                        powerful and versatile, once mastered. In addition, considering its current popularity, we do not
                        regret choosing it.
                    </Content>
                </PageContent>
                <Footer/>
            </div>
        )
    }

}
