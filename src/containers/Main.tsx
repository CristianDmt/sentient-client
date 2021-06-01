import { useContext } from 'react';
import { ToastContainer, Zoom, toast } from 'react-toastify';

import { UserContext } from "../context/UserContext";

import MainAuthenticated from "../components/MainAuthenticated";
import MainNotAuthenticated from '../components/MainNotAuthenticated';

interface Props {
}

const Main = (props: Props) => {
  const userContext = useContext(UserContext);

  return (
    <>
      {
        userContext.authVerified && userContext.isAuthenticated ?
          <MainAuthenticated
            logout={userContext.logout}
          /> : <MainNotAuthenticated/>
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