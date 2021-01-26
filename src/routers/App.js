import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PageNotFound from '../components/PageNotFound';
import ScrollToTop from '../functions/scrollToTop';

const App = () => {

  return (
    <Router basename={"/m"}>
      <ScrollToTop>
        <div className='wrapper'>
          <Nav />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/home" exact><Home /></Route>
            <Route path="/about" exact><About /></Route>
            <Route path="/contact" exact><Contact /></Route>
            <Route><PageNotFound /></Route>
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
