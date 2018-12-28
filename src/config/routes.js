import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUs from '../screens/about-us';
import FindAHome from '../screens/find-a-home';
import FindAnAgent from '../screens/find-an-agent';
import InfoAndAdvice from '../screens/info-and-advice';
import LandingPage from '../screens/landing-page';

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