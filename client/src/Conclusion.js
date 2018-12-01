import React, {Component} from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from 'styled-components';
const SubHeader = styled.h2`
    padding-top: 10%;
    margin-top: -10%;
    color: #7997d6;
    font-family: Roboto;
`
const MainHeader = styled.h1`
    padding-top: 10%;
    margin-top: -10%;
    color: #5b73b4;
    font-size: 40px;
    font-family: Roboto;
`
const Content = styled.p`
    font-family: Roboto;
`
const PageContent = styled.div`
    padding: 6% 19% 2%;
`
export default class Conclusion extends Component {
    render(){
        return(
           <div>
               <NavBar/>
               <PageContent>
              <MainHeader>
              Rating</MainHeader>
<Content> i want to die </Content>
<MainHeader> Expectations and Difficulty </MainHeader>
<SubHeader>Ease of Use </SubHeader>
<Content> Regarding React, the framework was fairly simple to install, but the framework did not meet our expectations on its ease of use.
The framework was rather complicated, and because it wasn’t intuitive, the project required a lot more research than other frameworks would have.
 </Content>
<SubHeader>Learning Curve </SubHeader>
<Content>We would consider that React has a fairly steep learning curve compared to regular HTML and Javascript.
 HTML and Javascript was much easier to get a grasp on and required minimal self teaching, while React required numerous hours to grasp a single concept.
 </Content>
 <MainHeader>Afterthoughts </MainHeader>
 <Content>In retrospect, we should’ve studied React in greater detail to understand all the little nuances that React has.
 This would’ve cut down the amount of work we needed to put in by a significant amount.


 </Content>
              </PageContent>
              <Footer/>
              </div>
        )
    }

}
