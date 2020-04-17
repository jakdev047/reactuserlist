import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

// store
import {Provider} from 'react-redux';
import store from './store';

// style 
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.scss';

// components
import Header from './components/Header/Header';
import Home from './views/Home';
import SingleUser from './views/SingleUser';
import Error from './views/Error';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/users/:id" component={SingleUser}></Route>
            <Route path="*" component={Error}></Route>
          </Switch>
      </Router>
    </Provider>
    
  );
}

export default App;
