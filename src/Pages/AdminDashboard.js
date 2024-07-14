import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Users from '../Pages/Users';
import UploadResources from './UploadResources';
import Addteachers from './Addteachers'
import Getenrollers from './Getenrollers'
import AddConsultation from './AddConsultation';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <nav>
                <ul>
                    <li><NavLink to="users" activeclasname="active"><span>Users</span></NavLink></li>
                    <li><NavLink to="getenrollers" activeclasname="active"><span>Enrollments</span></NavLink></li>
                    <li><NavLink to="AddConsultation" activeclasname="active"><span>Add Consultations</span></NavLink></li>
                    <li><NavLink to="UploadResources" activeclasname="active"><span>Upload New Resource</span></NavLink></li>
                    <li><NavLink to="addTeachers" activeclasname="active"><span>Add Lectures</span></NavLink></li>

                </ul>
            </nav>
            <div className="admin-content">
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="users" element={<Users />} />
                    <Route path="getenrollers" element={<Getenrollers />} />
                    <Route path="AddConsultation" element={<AddConsultation />} />
                    <Route path="UploadResources" element={<UploadResources />} />
                    <Route path="addteachers" element={<Addteachers />} />

                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
