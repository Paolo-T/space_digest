import React, { useEffect } from "react";
import "./css/styles.css";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SpacexLaunchesProvider } from "./context/SpacexLaunchesContext";
import { ScrollToTop, Navigation, Footer } from "./components";
import {
    Page__home,
    Page__about,
    Page__photosPage,
    Page__asteroids,
    Page__nasa,
    Page__launch,
    Page__spacex
} from "./pages";

function App() {
    return (
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
                        <Route exact path="/space-x" component={Page__spacex} />
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
    );
}

export default App;
