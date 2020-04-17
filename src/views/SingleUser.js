import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import SalaryCard from '../components/SalaryCard/SalaryCard';
import { connect } from 'react-redux';

const SingleUser = ({users}) => {
  const {id} = useParams();
  const user = users.find(item=>item.id === parseInt(id));
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <h2>{id}</h2>
          {console.log(user)}
        </Col>
        <Col lg={4}>
          <SalaryCard />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(SingleUser);