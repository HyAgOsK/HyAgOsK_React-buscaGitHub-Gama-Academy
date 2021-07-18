import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Routes() {

    return(

        <BrowserRouter>
        <Switch>
            <Route path='/' exact component ={Home}/>
            <Route path ='/Repositories' component = {Repositories}/>
        </Switch>   
        </BrowserRouter>
        
    )
}