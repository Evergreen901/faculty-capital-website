import React, { useContext, useEffect } from 'react';
import GlobalContext from '../../context/global/GlobalContext';
import { Header, Footer } from './';

const Layout = ({ children }) => {
    const { setBlogData, setProjectData, setTeamData } = useContext(GlobalContext);

    useEffect(() => {
        setBlogData();
        setProjectData();
        setTeamData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="w-screen min-h-screen px-6">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
