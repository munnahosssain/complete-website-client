import React from 'react';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import Book from '../Book/Book';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <HeaderNavbar />
            <Sidebar />
            <Book />
        </div>
    );
};

export default Dashboard;