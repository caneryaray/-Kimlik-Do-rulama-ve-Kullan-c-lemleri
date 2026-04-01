import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Header() {
  const { authUserInfo, logout } = useContext(AuthContext);

  return (
    <div>
      {!authUserInfo ? (
        <Link to="/login">LOGIN</Link>
      ) : (
        <>
          <Link to="/friends">FRIENDS LIST</Link>
          <Link to="/friends/add">ADD FRIEND</Link>
          <button onClick={logout}>LOGOUT</button>
        </>
      )}
    </div>
  );
}

export default Header;
