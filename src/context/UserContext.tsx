import React, { useState, useEffect, useContext } from "react";

import UserService from "../data/services/UserService";
import LocalStorageService from "../data/services/LocalStorageService";

import { AxiosResponse, AxiosError } from "axios";
import { LOCAL_STORAGE_USER_SESSION } from "../data/const";
import { AuthenticationResponse } from "../data/entities/AuthenticationResponse";
import { ToastContext } from "./ToastContext";
import { ErrorResponse } from "../data/entities/ErrorResponse";

interface UserContextData {
  authVerified: boolean;
  isAuthenticated: boolean;
  userData: AuthenticationResponse | null;
  authenticate: (username: string, password: string) => void;
  logout: () => void;
}

interface Props {
  children: JSX.Element
}

export const UserContext = React.createContext<UserContextData>({
  authVerified: false,
  isAuthenticated: false,
  userData: null,
  authenticate: () => { },
  logout: () => { }
});

const UserProvider = (props: Props) => {
  const toastContext = useContext(ToastContext);
  
  const [authVerified, setAuthVerified] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<AuthenticationResponse | null>(null);

  useEffect(() => {
    const auth = LocalStorageService.loadFromLocalStorage(LOCAL_STORAGE_USER_SESSION);

    if (auth) {
      setAuthVerified(true);
      setIsAuthenticated(true);
      setUserData(auth);
    } else {
      setAuthVerified(true);
      setIsAuthenticated(false);
    }
  }, []);

  const authenticate = (username: string, password: string): void => {
    if (!isAuthenticated && authVerified) {
      UserService.authenticateUser(
        username,
        password
      ).then((response: AxiosResponse<AuthenticationResponse>) => {
        const userData = Object.assign({}, response.data);
        setAuthVerified(true);
        setIsAuthenticated(true);
        setUserData(userData);

        LocalStorageService.saveToLocalStorage(LOCAL_STORAGE_USER_SESSION, userData);
      }).catch((error: AxiosError<ErrorResponse>) => {
        toastContext.toast(`Authentication failed.`);
      });
    }
  };

  const logout = (): void => {
    setIsAuthenticated(false);
    setUserData(null);

    LocalStorageService.saveToLocalStorage(LOCAL_STORAGE_USER_SESSION, null, -1);
  };

  return (
    <UserContext.Provider value={{
      authVerified: authVerified,
      isAuthenticated: isAuthenticated,
      userData: userData,
      authenticate: authenticate,
      logout: logout
    }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;