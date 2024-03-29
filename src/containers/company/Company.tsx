import React, { useEffect, useContext } from 'react';
import CompanyComponent from "../../components/company/Company";
import { UserContext } from "../../context/UserContext";

interface Props { }

const Company = (props: Props) => {
  const userContext = useContext(UserContext);

  return <CompanyComponent />
}

export default Company;