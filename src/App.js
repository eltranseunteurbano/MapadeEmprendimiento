import React from 'react';
import './style.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Home from './containers/Home/Home';

const App = () => (
  <>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component = { Home } />
        </Switch>
      </Layout>
    </BrowserRouter>
  </>
)

export default App;
