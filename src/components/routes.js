import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './about-us';
import FindAHome from './find-a-home';
import FindAnAgent from './find-an-agent';
import InfoAndAdvice from './info-and-advice';
import LandingPage from './landing-page';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route path="/find-a-home" component={ FindAHome } />
        <Route path="/find-an-agent" component={ FindAnAgent } />
        <Route path="/info-and-advice" component={ InfoAndAdvice } />
        <Route path="/about-us" component={ AboutUs } />
    </Switch>
)

export default Routes;