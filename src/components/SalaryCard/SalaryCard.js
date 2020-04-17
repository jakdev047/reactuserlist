import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useUser } from '../../customHooks/useUser';

const SalaryCard = () => {
  const {addUsers} = useUser();
  return (
    <div className="salary-card">
      <Card className="single-user">
        <CardBody>
          <h3>
            <FontAwesomeIcon icon={faUsers}/>
          </h3>
          <ListGroup>
            {
              addUsers.map(p=>{
                return <ListGroupItem key={p.id}>
                        {p.name}
                        <Button style={{marginLeft:'10px'}}>X</Button>
                      </ListGroupItem>
              })
            }
          </ListGroup>
          <h3>Total:$000</h3>
        </CardBody>
      </Card>
    </div>
  );
};

export default SalaryCard;