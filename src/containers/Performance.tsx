import {useEffect, useContext} from 'react';
import PerformanceComponent from '../components/Performance';
import {UserContext} from "../context/UserContext";

interface Props {}

const Performance = (props: Props) => {
    const userContext = useContext(UserContext);

    useEffect(() => {
        if (userContext.userData) {
            
        }
    }, []);

    return <PerformanceComponent/>
}

export default Performance;