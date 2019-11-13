import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch,Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Users from './users'
import Contact from './contact'
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';

const routing = (
  <Router>
    <div>
        <Navbar/>
        <Router>
              <Route exact path='/' component={App} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={Users} />
          </Router>
          <Footer/>
    </div>
  </Router>
)
// ReactDOM.render(routing, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
