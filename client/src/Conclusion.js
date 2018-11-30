import React, {Component} from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from 'styled-components';

export default class Conclusion extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div style={{padding: '2% 18% 2%',}}>
                    <br/>
                    <br/>
                    <h1>
                        Rating</h1>
                    <p> i want to die </p>
                    <h1> Expectations and Difficulty </h1>
                    <h2>Ease of Use </h2>
                    <p> Regarding React, the framework was fairly simple to install, but the framework did not meet our
                        expectations on its ease of use.
                        The framework was rather complicated, and because it wasn’t intuitive, the project required a
                        lot more research than other frameworks would have.
                    </p>
                    <h2>Learning Curve </h2>
                    <p>We would consider that React has a fairly steep learning curve compared to regular HTML and
                        Javascript.
                        HTML and Javascript was much easier to get a grasp on and required minimal self teaching, while
                        React required numerous hours to grasp a single concept.
                    </p>
                    <h1>Afterthoughts </h1>
                    <p>In retrospect, we should’ve studied React in greater detail to understand all the little nuances
                        that React has.
                        This would’ve cut down the amount of work we needed to put in by a significant amount.


                    </p>
                </div>
                <Footer/>
            </div>
        )
    }

}
