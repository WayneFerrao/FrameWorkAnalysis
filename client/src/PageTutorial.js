import React, {Component} from 'react';
import Particles from 'react-particles-js';
import NavBar from "./NavBar";

import styled from 'styled-components';

const Background = styled.div`
    background-color: #4285f4;
    display: inline-block;
`;

export default class PageTutorial extends Component {
    render() {
        return (
            <div>
                <NavBar/>
            <Background>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": true,
                                    "value_area": 1000
                                }
                            },
                            "color": {
                                "value": "#123456"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 4
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 4.008530152163807,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 19.489853095232284,
                                    "size_min": 2.436231636904035,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": false,
                                "distance": 144.30708547789706,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 8.017060304327615,
                                "direction": "bottom",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 1202.559045649142,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onresize": {
                                    "enable": true,
                                    "density_auto": true,
                                    "density_area": 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                                },
                                "onhover": {
                                    "enable": false,
                                    "mode": "grab"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 950.1303383925738,
                                    "size": 16.241544246026905,
                                    "duration": 1.0557003759917487,
                                    "opacity": 0.12181158184520177,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }}
                    height= "200px"
                    width= "200px"
                />
            </Background>
                <h1> this is the Tutorial on how to make a page with react and React JS</h1>
            </div>

        )
    }

}