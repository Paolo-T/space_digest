import React, { Fragment } from "react";
import "./css/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/base/Navigation";
import Footer from "./components/base/Footer";
import page__home from "./pages/page__home";
import page__photosPage from "./pages/page__photosPage";
import page__marsRover from "./pages/page__marsRover";
import page__spacex from "./pages/spacex/page__spacex";
import page__launch from "./pages/spacex/page__launch";
import { SpacexLaunchesProvider } from "./components/context/SpacexLaunchesContext";

function App() {
    return (
        <Router>
            <Fragment>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={page__home} />
                    <Route
                        path="/photos-collection"
                        component={page__photosPage}
                        exact
                    />
                    <Route
                        path="/mars-rover"
                        component={page__marsRover}
                        exact
                    />
                    <SpacexLaunchesProvider>
                        <Route path="/space-x" component={page__spacex} exact />
                        <SimpleReactLightbox>
                            <Route
                                path="/space-x/launch/:id"
                                component={page__launch}
                                exact
                            />
                        </SimpleReactLightbox>
                    </SpacexLaunchesProvider>
                    {/* <Route component={Error} /> */}
                </Switch>
                <Footer />
            </Fragment>
        </Router>
    );
}

export default App;
