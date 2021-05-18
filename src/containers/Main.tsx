import { useContext, useEffect } from 'react';
import { ToastContainer, Zoom, toast } from 'react-toastify';

import { UserContext } from "../context/UserContext";
import { ToastContext } from '../context/ToastContext';

import MainAuthenticated from "../components/MainAuthenticated";
import Login from "../containers/Login";
import { useLocation } from 'react-router';

interface Props {
}

const Main = (props: Props) => {
    const userContext = useContext(UserContext);
    const toastContext = useContext(ToastContext);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/') {
            toastContext.toast(`Switched to: ${location.pathname}`);
        }
    }, [location]);

    return (
        <>
            {
                userContext.authVerified && userContext.isAuthenticated ?
                <MainAuthenticated
                    logout={userContext.logout}
                /> : <Login/>
            }

            <ToastContainer 
                limit={5} 
                transition={Zoom}
                autoClose={3000} 
                position={toast.POSITION.BOTTOM_RIGHT} 
            />
        </>
    )
}

export default Main;