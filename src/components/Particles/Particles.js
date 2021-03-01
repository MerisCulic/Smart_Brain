import React from 'react';
import Particles from 'react-particles-js';
import './Particles.css';


const ParticlesBackground = () => {
        return(
            <div>
                <Particles className='particles'
                    params={{
                        "particles": {
                            "number": {
                                "value": 130
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                }} />
            </div>
        );
}

export default ParticlesBackground;

