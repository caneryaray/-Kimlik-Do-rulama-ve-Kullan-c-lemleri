import { createContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const history = useHistory();

  const [authUserInfo, setAuthUserInfo] = useState(
    JSON.parse(localStorage.getItem('s11d2')) || null
  );

  const initAuth = (formData) => {
    axios
      .post('https://nextgen-project.onrender.com/api/s11d2/login', formData)
      .then((response) => {
        setAuthUserInfo(response.data);
        localStorage.setItem('s11d2', JSON.stringify(response.data));
        history.push('/friends');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    setAuthUserInfo(null);
    localStorage.removeItem('s11d2');
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ authUserInfo, initAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
