import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mid-content">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle " />
            <div class="drawer-content lg:px-8 md:px-8 sm:px-7 px-4 pt-5">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side ">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Sidebar Item 1</Link></li>
                    <li><Link to={"/dashboard/review"}>Sidebar Item 2</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;