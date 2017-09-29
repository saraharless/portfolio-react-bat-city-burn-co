import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home.js'
import About from './components/About.js'
import BaseLayout from './components/BaseLayout.js'
import Contact from './components/Contact.js'
import Stockists from './components/Stockists.js'
import Shop from './components/Shop.js'
import Pattern from './components/Pattern.js'
import Solid from './components/Solid.js'
import All from './components/All.js'

ReactDOM.render(
<BrowserRouter>
<BaseLayout>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/stockists' component={Stockists} />
    <Route path='/shop' component={Shop} />
    <Route path='/pattern' component={Pattern} />
    <Route path='/solid' component={Solid} />
    <Route path='/all' component={All} />
  </Switch>
</BaseLayout>
</BrowserRouter>

,document.getElementById('root')
);
registerServiceWorker();
