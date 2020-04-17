import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody, ListGroup, ListGroupItem, Button } from 'reactstrap';

const SalaryCard = () => {
  return (
    <div className="salary-card">
      <Card className="single-user">
        <CardBody>
          <h3>
            <FontAwesomeIcon icon={faUsers}/>
          </h3>
          <ListGroup>
            <ListGroupItem>
              Cras justo odio
              <Button style={{marginLeft:'10px'}}>X</Button>
            </ListGroupItem>
          </ListGroup>
          <h3>Total:$000</h3>
        </CardBody>
      </Card>
    </div>
  );
};

export default SalaryCard;