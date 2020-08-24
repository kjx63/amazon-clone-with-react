import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/auth/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  // Listener to determine if the user is logged in or not
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in ...
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out ...
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    return () => {
      // Any cleanup operations go in here
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          {/* This is the default route */}
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
