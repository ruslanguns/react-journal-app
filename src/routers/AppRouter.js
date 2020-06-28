import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from './../firebase/firebase.config';


export const AppRouter = () => {

  const dispatch = useDispatch();
  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setCheking(false);
    })
  }, [dispatch, setCheking, setIsLoggedIn])

  if (cheking) {
    return (
      <h2>Loading....</h2 >
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            isAuthenticated={isLoggedIn}
            component={AuthRouter}
          />

          <PrivateRoute
            exact
            path="/"
            isAuthenticated={isLoggedIn}
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />


        </Switch>
      </div>
    </Router>
  )
}
