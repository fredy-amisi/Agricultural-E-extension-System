import React, { useState } from 'react';
import axios from 'axios';
import '../Css/AddTeachers.css';  

const Addteachers = () => {
    const [teacherData, setTeacherData] = useState({
        name: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTeacherData({ ...teacherData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/bridge/addteacher.php', teacherData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert(response.data.message);
            if (response.data.success) {
                setTeacherData({ name: '', email: '' });
            }
        } catch (error) {
            alert('Error adding teacher: ' + error.message);
        }
    };

    return (
        <div className="add-teacher-container">
            <h2>Add New Lecturer</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={teacherData.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={teacherData.email}
                    onChange={handleInputChange}
                    required
                />
                <button className="submit" type="submit">Add Teacher</button>
            </form>
        </div>
    );
};

export default Addteachers;
