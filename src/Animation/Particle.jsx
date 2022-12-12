import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": -100
                    },
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "area": 400
                            }
                        },
                        "color": {
                            "value": "#ff0000"
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "opacity": {
                            "value": { "min": 0.1, "max": 0.5 },
                            "animation": {
                                "enable": true,
                                "speed": 3,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": { "min": 0.1, "max": 5 },
                            "animation": {
                                "enable": true,
                                "speed": 20,
                                "sync": false
                            }
                        },
                        "links": {
                            "enable": true,
                            "distance": 150,
                            "color": "#7e7db5",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "outModes": "out"
                        },
                        "twinkle": {
                            "particles": {
                                "enable": true,
                                "color": "#ffff00",
                                "frequency": 0.05,
                                "opacity": 1
                            },
                            "lines": {
                                "enable": true,
                                "color": "#ff0000",
                                "frequency": 0.005,
                                "opacity": 1
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onHover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onClick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "repulse": {
                                "distance": 100
                            },
                            "push": {
                                "quantity": 4
                            }
                        }
                    },
                    "background": {
                        "color": "#d8d8e3"
                    }
                }}
            />
        </div>
    );
};

export default Particle;