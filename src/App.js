import React, { useState, useEffect } from 'react';
import Preloader from '../src/components/Pre';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume/Resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './components/ScrollToTop';
import Guitar from './components/Guitar/Guitar';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className='App' id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/project' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/guitar' component={Guitar} />
          <Route path='/graphics' component={Resume} />
          <Route path='/resume' component={Resume} />
          <Route path='*' exact={true} component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
