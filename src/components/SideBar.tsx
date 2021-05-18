import {
    Nav,
    NavItem
} from 'reactstrap';

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import classNames from 'classnames';

interface Props {
    isOpen: boolean;
    toggle: () => void;
    logout: () => void;
}

const SideBar = (props: Props) => {
    const location = useLocation();
    const [sideBarClassNames, setSideBarClassNames] = useState<string>(classNames({
        'sidebar': true, 
        'sidebar-open': props.isOpen,
    }));

    const hideSideBar = (): void => {
      if (props.isOpen) {
          props.toggle();
      }
    };

    useEffect(() => {
        setSideBarClassNames(classNames({
            'sidebar': true, 
            'sidebar-open': props.isOpen,
        }));
    }, [props.isOpen]);

    return (
        <>
            {props.isOpen && <div className="sidebar-backdrop" onClick={hideSideBar}>&nbsp;</div>}
            <Nav className={sideBarClassNames} navbar vertical>
                <h3 className="p-3 mb-3">Dashboard</h3>
                <NavItem>
                    <Link to="/conversations" className="nav-link" onClick={hideSideBar}><em className="ion ion-ios-chatbubbles"></em> Conversations</Link>
                </NavItem>
                <NavItem>
                    <Link to="/performance" className="nav-link" onClick={hideSideBar}><em className="ion ion-ios-speedometer"></em> Performance</Link>
                </NavItem>
                <NavItem>
                    <Link to="/teams" className="nav-link" onClick={hideSideBar}><em className="ion ion-ios-people"></em> Teams</Link>
                </NavItem>
                <NavItem>
                    <Link to="/company/create" className="nav-link" onClick={hideSideBar}><em className="ion ion-ios-bowtie"></em> Company</Link>
                </NavItem>
                <NavItem className="mt-auto">
                    <Link to="/logout" className="nav-link" onClick={() => props.logout()}><em className="ion ion-ios-log-out"></em> Logout</Link>
                </NavItem>
            </Nav>
        </>
    );
};

export default SideBar;