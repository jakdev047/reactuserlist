import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import UserItem from './UserItem';

const Users = ({users}) => {
  return (
    <div>
      {console.log(users) }
      <Container>
        <Row>
          {
            users.map(user => {
              return <UserItem key={user.id} user={user}/>
            })
          }
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(Users);