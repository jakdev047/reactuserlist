import React from 'react';
import { Container } from 'reactstrap';

// store
import {Provider} from 'react-redux';
import store from './store';

// style 
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.scss';

// components
import Users from './components/Users/Users';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <h2>User List</h2>
          <Users />
        </Container>
      </div>
    </Provider>
    
  );
}

export default App;
