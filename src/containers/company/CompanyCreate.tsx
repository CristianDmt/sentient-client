import React, { useEffect, useContext } from 'react';
import CompanyCreateComponent from "../../components/company/CompanyCreate";
import { UserContext } from "../../context/UserContext";

interface Props {}

const CompanyCreate = (props: Props) => {
    const userContext = useContext(UserContext);

    useEffect(() => {
        if (userContext.userData) {

        }
    }, []);

    return <CompanyCreateComponent/>
}

export default CompanyCreate;