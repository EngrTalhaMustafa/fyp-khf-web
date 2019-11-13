import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
// import { Layout, Menu, Breadcrumb } from 'antd';
import './components/layout/layout.css';
import Layout from './components/layout/layout';
import Home from './components/home/home';
import { Switch,Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Contact from './contact';
import ChiefRegistration from "./components/chief-registration/chief-registration";
import RiderRegistration from "./components/rider-registration/rider-registration";
import OrderNow from "./components/order-now/order-now";

// const { Header, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <Router>
      <Layout></Layout>
      <Route exact path='/home' component={Home} />
      <Route exact path='/order-now' component={OrderNow} />
      <Route exact path='/chief-registration' component={ChiefRegistration} />
      <Route exact path='/rider-registration' component={RiderRegistration} />
      <Route exact path='/contact-us' component={Contact} />
      {/* <Route path='/about' component={Users} /> */}
      <Footer/>
      </Router>

    // <div className="App">
    //     </div>

    );
  }
}

export default App;
