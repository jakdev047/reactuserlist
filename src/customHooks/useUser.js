import { useSelector, useDispatch } from "react-redux";
import { setAddUsers } from "../store/actions/user";

export const useUser = () => {
  const {users,addUsers} = useSelector(state=>state.users);
  const dispatch = useDispatch();

  const setAddUserItem = user => {
    dispatch(setAddUsers(user));
  }

  const addSetUserEvent = id => {
    const item = users.find(p=>p.id === id);
    console.log(item)
    const itemIndex = addUsers.findIndex(item=> item.id === id);
    if(itemIndex === -1) {
      setAddUserItem([
        ...addUsers,
        item
      ])
    }
    else {
      setAddUserItem(addUsers.map(p=>p.id === id ? alert('Please another user select') : item));
    }
  }

  const removeUser = id => {
    setAddUserItem(addUsers.filter(item=>item.id !== id));
  }

  const clearUser = () => {
    const res = window.confirm('All User Remove');
    if (res === true) {
      setAddUserItem([])
    }
  }

  return {
    addUsers,
    addSetUserEvent,
    removeUser,
    clearUser
  }
}