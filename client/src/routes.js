import React from 'react';
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import App from './AppLayout';
import Beer from './BeerLayout';

const RedirectToHome = () => <Redirect to='/' />;

const Router = () => (
    <BrowserRouter>
        <Switch>
            <App exact path='/' render={RedirectToHome} />
            <Route path='/beer/:id' component={Beer} />
        </Switch>
    </BrowserRouter>
);

export default Router