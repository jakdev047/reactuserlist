import React from 'react';
import { Col, Card, CardImg, CardBody } from 'reactstrap';

const UserItem = props => {
  const {img,name} = props.user;
  return (
    <Col lg={4} sm={6}>
      <Card className="single-user">
        <CardImg top width="100%" src={img} alt="img" />
        <CardBody>
          <h3><a href="//">{name}</a></h3>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserItem;