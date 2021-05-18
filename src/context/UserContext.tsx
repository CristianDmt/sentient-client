import React, { useState, useEffect } from "react";

import UserService from "../data/services/UserService";
import LocalStorage from "../data/LocalStorage";

import {AxiosResponse, AxiosError} from "axios";
import {HEADER_X_API_KEY_ON_AUTH, LOCAL_STORAGE_USER_SESSION} from "../data/const";

interface UserSession {
    id: string;
    email: string;
    name: string;
    phone: string;
    access: "agent" | "supervisor";
    team: string;
    company: string;
    ticket: string;
}

interface UserContextData {
    authVerified: boolean;
    isAuthenticated: boolean;
    userData: UserSession | null;
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
    authenticate: () => {},
    logout: () => {}
});

const UserProvider = (props: Props) => {
    const [authVerified, setAuthVerified] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const auth = LocalStorage.loadFromLocalStorage(LOCAL_STORAGE_USER_SESSION);

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
        setAuthVerified(true);
        setIsAuthenticated(true);
        setUserData(null);
        //
        // if (!this.state.isAuthenticated && this.state.authVerified) {
        //     UserService.authenticateUser(
        //         username,
        //         password
        //     ).then((response: AxiosResponse) => {
        //         this.setState({
        //             authVerified: true,
        //             isAuthenticated: true,
        //             userData: Object.assign({}, response.data, {ticket: response.headers[HEADER_X_API_KEY_ON_AUTH]})
        //         }, () => {
        //             LocalStorage.saveToLocalStorage(LOCAL_STORAGE_USER_SESSION, this.state.userData);
        //         });
        //     }).catch((error: AxiosError) => {
        //         console.log("Error:" + error.toString());
        //     });
        // }
    };

    const logout = (): void => {
        setIsAuthenticated(false);
        setUserData(null);
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