import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function FriendsList() {
  const { authUserInfo } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get('https://nextgen-project.onrender.com/api/s11d2/friends', {
        headers: {
          authorization: authUserInfo?.token,
        },
      })
      .then((res) => {
        setFriends(res.data.data || res.data);
      })
      .catch((err) => console.log(err));
  }, [authUserInfo]);

  return (
    <div>
      <h1>FRIENDS LIST</h1>

      {friends.map((friend, index) => (
        <p key={friend.id || index}>
          -{friend.name}-{friend.email}
        </p>
      ))}
    </div>
  );
}

export default FriendsList;
