import React, {
  Component
} from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from 'styled-components';


const CodeBlock = styled.section `
  padding: 2em;
  background: #C0C0C0;
  border-radius: 7px;
`;
//anchors werent working properly cause of appbar and im too low iq to think of a good solution
const StyledH2 = styled.h2 `
    padding-top: 10%;
    margin-top: -10%;
    color: #7997d6;
    font-family: Roboto;
`
const StyledH1 = styled.h1 `
    padding-top: 10%;
    margin-top: -10%;
    color: #5b73b4;
    font-size: 40px;
    font-family: Roboto;
`
const StyledP = styled.p `
    font-family: Roboto;
`

export default class Conclusion extends Component {
  render() {
    return ( <
      div >
      <
      NavBar / >
      <
      div style = {
        {
          padding: '6% 19% 2%'
        }
      } >
      <
      StyledH1 >
      Rating <
      /StyledH1> <
      StyledP > aaaa < /StyledP> <
      StyledH1 > Expectations and Difficulty < /StyledH1> <
      StyledH2 > Ease of Use < /StyledH2> <
      StyledP > Regarding React, the framework was fairly simple to install, but the framework did not meet our expectations on its ease of use.The framework was rather complicated, and because it wasn’ t intuitive, the project required a lot more research than other frameworks would have. <
      /StyledP> <
      StyledH2 > Learning Curve < /StyledH2> <
      StyledP > We would consider that React has a fairly steep learning curve compared to regular HTML and Javascript.HTML and Javascript was much easier to get a grasp on and required minimal self teaching,
      while React required numerous hours to grasp a single concept. <
      /StyledP> <
      StyledH1 > Afterthoughts < /StyledH1> <
      StyledP > In retrospect, we should’ ve studied React in greater detail to understand all the little nuances that React has.This would’ ve cut down the amount of work we needed to put in by a significant amount.


      <
      /StyledP> <
      /div> <
      Footer / >
      <
      /div>
    )
  }

}
