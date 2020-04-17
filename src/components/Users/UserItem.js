import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Col, Card, CardImg, CardBody, Button } from 'reactstrap';

const UserItem = props => {
  const {img,name,phone,email} = props.user;
  return (
    <Col xl={4} lg={6}>
      <Card className="single-user">
        <CardImg top width="100%" src={img} alt="img" />
        <CardBody>
          <h2><a href="//">{name}</a></h2>
          <p><FontAwesomeIcon icon={faPhoneAlt}/> {phone} </p>
          <p><FontAwesomeIcon icon={faEnvelope}/> {email} </p>
          <Button color="primary">Add</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserItem;