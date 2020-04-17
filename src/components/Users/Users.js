import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import UserItem from './UserItem';
import { useUser } from '../../customHooks/useUser';

const Users = ({users}) => {
  const {addSetUserEvent} = useUser();
  return (
    <div>
        <Row>
          {
            users.map(user => {
              return <UserItem key={user.id} user={user} addSetUserEvent={addSetUserEvent}/>
            })
          }
        </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(Users);