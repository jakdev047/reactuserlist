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

  return {
    addUsers,
    addSetUserEvent
  }
}