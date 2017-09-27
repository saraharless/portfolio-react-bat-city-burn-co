import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home.js'
import About from './components/About.js'
import BaseLayout from './components/BaseLayout.js'
import Contact from './components/Contact.js'
import Retailers from './components/Retailers.js'
import Shop from './components/Shop.js'

ReactDOM.render(
<BrowserRouter>
<BaseLayout>
  <Switch>
    <Route path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/retailers' component={Retailers}/>
    <Route path='/shop' component={Shop}/>
  </Switch>
</BaseLayout>
</BrowserRouter>

,document.getElementById('root')
);
registerServiceWorker();
