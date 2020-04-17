import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Users from '../components/Users/Users';
import SalaryCard from '../components/SalaryCard/SalaryCard';

const Home = () => {
  return (
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
  );
};

export default Home;