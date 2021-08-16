import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './Repositories';
import Home from './Pages/Home';

export default function Routes() {
    return (
       <BrowserRouter>
          <Switch>
              <Route path='/' component={Home} />
              <Route path="/respositories" component={Repositories} />
          </Switch>
       </BrowserRouter>
    )
}