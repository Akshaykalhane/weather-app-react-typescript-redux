import React from 'react';
import { addusername } from './usernameSlice';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../store';

function UserProfile() {
    const username = useSelector((state:RootState)=>state.username.username)
    const dispatch = useDispatch();
  return (<>
    <div>UserProfile</div>
    <div>
        <input type="text" placeholder='enter username' onChange={(e)=>dispatch(addusername(e.target.value))} />
        <p>username : {username}</p>
    </div>
  </>
  )
}

export default UserProfile