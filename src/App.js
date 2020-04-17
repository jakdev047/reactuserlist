import React from 'react';

// store
import {Provider} from 'react-redux';
import store from './store';

// style 
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.scss';

// components
import Users from './components/Users/Users';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Users />
      </div>
    </Provider>
    
  );
}

export default App;
