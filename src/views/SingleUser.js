import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, CardImg, CardBody } from 'reactstrap';
import SalaryCard from '../components/SalaryCard/SalaryCard';
import { connect } from 'react-redux';

const SingleUser = ({users}) => {
  const {id} = useParams();
  const user = users.find(item=>item.id === parseInt(id));
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Card className="single-user">
            <CardImg top width="100%" src={user.img} alt="img" />
            <CardBody>
              <h2>{user.name}</h2>
              <p><FontAwesomeIcon icon={faPhoneAlt}/> {user.phone} </p>
              <p><FontAwesomeIcon icon={faEnvelope}/> {user.email} </p>
              <Link to="/">Back</Link>
            </CardBody>
          </Card>
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