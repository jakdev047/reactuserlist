import React from 'react';
import { connect } from 'react-redux';

const Users = ({users}) => {
  return (
    <div>
      {
        console.log(users)
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(Users);