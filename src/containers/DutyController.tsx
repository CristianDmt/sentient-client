import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';
import DutyControllerComponent from '../components/DutyController';


interface Props {
}

const DutyController = (props: Props) => {
  const socketContext = useContext(SocketContext);

  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  const toggleDuty = () => {
    setIsAvailable(!isAvailable);
  }

  useEffect(() => {
    if (isAvailable) {
      socketContext.connect();
    } else {
      socketContext.disconnect();
    }
  }, [isAvailable]);

  return (
    <DutyControllerComponent 
      isAvailable={isAvailable}
      toggleDuty={toggleDuty}
    />
  )
}

export default DutyController;