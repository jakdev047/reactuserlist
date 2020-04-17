import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useUser } from '../../customHooks/useUser';

const SalaryCard = () => {
  const {addUsers,total,clearUser,removeUser} = useUser();
  return (
    <div className="salary-card">
      <Card className="single-user">
        <CardBody>
          <h3>
            <FontAwesomeIcon icon={faUsers}/>
          </h3>
          { addUsers.length === 0 && <h5>There is no user</h5> }

          { addUsers.length !== 0 &&  (
            <>
              <ListGroup>
                {
                  addUsers.map(p=>{
                    return <ListGroupItem key={p.id}>
                            {p.name}
                            <Button style={{marginLeft:'10px'}} 
                                    onClick={()=>removeUser(p.id)}
                            >X</Button>
                          </ListGroupItem>
                  })
                }
              </ListGroup>
              <h3>Total:${total}</h3>
              <Button onClick={clearUser} color="danger">All Clear</Button>
            </>
          ) }
        </CardBody>
      </Card>
    </div>
  );
};

export default SalaryCard;