import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SpacexLaunchesProvider } from "./components/context/SpacexLaunchesContext";
import "./css/styles.css";
import { useSpring, animated } from "react-spring";
import ReactGA from "react-ga";
import ScrollToTop from "./components/base/ScrollToTop";
import Navigation from "./components/base/Navigation";
import Footer from "./components/base/Footer";
import Page__nasa from "./pages/nasa/Page__nasa";
import Page__launch from "./pages/spacex/Page__launch";
import Page__home from "./pages/Page__home";
import Page__photosPage from "./pages/Page__photosPage";
import Page__spacex from "./pages/spacex/Page__spacex";
import Page__asteroids from "./pages/Page__asteroids";
import Page__about from "./pages/Page__about";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
    useEffect(() => {
        ReactGA.initialize("UA-80068675-2");
        return () => {
            // to report page view
            ReactGA.pageview(window.location.pathname + window.location.search);
        };
    }, []);
    // Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div style={fade} div>
            <Router>
                <ScrollToTop />
                <div>
                    <Navigation />

                    <Switch>
                        <Route exact path="/" component={Page__home} />

                        <Route
                            exact
                            path="/photo-collection"
                            component={Page__photosPage}
                        />
                        <Route path="/nasa" component={Page__nasa} exact />
                        <Route
                            exact
                            path="/asteroids"
                            component={Page__asteroids}
                        />

                        <Route exact path="/about" component={Page__about} />

                        <SpacexLaunchesProvider>
                            <Route
                                exact
                                path="/space-x"
                                component={Page__spacex}
                            />
                            <SimpleReactLightbox>
                                <Route
                                    exact
                                    path="/space-x/launch/:id"
                                    component={Page__launch}
                                />
                            </SimpleReactLightbox>
                        </SpacexLaunchesProvider>

                        {/* <Route component={Error} /> */}
                    </Switch>

                    <Footer />
                </div>
            </Router>
        </animated.div>
    );
}

export default App;
