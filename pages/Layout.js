import React from 'react';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <div className='h-[100vh] bg-slate-200'>
            <Navbar></Navbar>
            <main>{children}</main>
            
        </div>
    );
};

export default Layout;