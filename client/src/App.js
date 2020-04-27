import React, { useEffect, Fragment } from "react";
import ReactGA from "react-ga";
import "./css/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/base/ScrollToTop";
import Navigation from "./components/base/Navigation";
import Footer from "./components/base/Footer";
import { SpacexLaunchesProvider } from "./components/context/SpacexLaunchesContext";
import page__home from "./pages/page__home";
import page__photosPage from "./pages/page__photosPage";
import page__nasa from "./pages/nasa/page__nasa";
import page__spacex from "./pages/spacex/page__spacex";
import page__launch from "./pages/spacex/page__launch";
import page__asteroids from "./pages/page__asteroids";
import page__about from "./pages/page__about";
import SimpleReactLightbox from "simple-react-lightbox";
import { useSpring, animated } from "react-spring";

function App() {
    useEffect(() => {
        ReactGA.initialize("UA-80068675-2");
        return () => {
            // to report page view
            ReactGA.pageview(window.location.pathname + window.location.search);
        };
    }, []);

    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div style={fade} div>
            <Router>
                <ScrollToTop />
                <div>
                    <Navigation />

                    <Switch>
                        <Route exact path="/" component={page__home} />

                        <Route
                            exact
                            path="/photo-collection"
                            component={page__photosPage}
                        />
                        <Route path="/nasa" component={page__nasa} exact />
                        <Route
                            exact
                            path="/asteroids"
                            component={page__asteroids}
                        />

                        <Route exact path="/about" component={page__about} />

                        <SpacexLaunchesProvider>
                            <Route
                                exact
                                path="/space-x"
                                component={page__spacex}
                            />
                            <SimpleReactLightbox>
                                <Route
                                    exact
                                    path="/space-x/launch/:id"
                                    component={page__launch}
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
