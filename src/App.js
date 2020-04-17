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
import SalaryCard from './components/SalaryCard/SalaryCard';
import { Container, Row, Col } from 'reactstrap';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col lg={8}>
              <Users />
            </Col>
            <Col lg={4}>
              <SalaryCard />
            </Col>
          </Row>
        </Container>
      </div>
    </Provider>
    
  );
}

export default App;
