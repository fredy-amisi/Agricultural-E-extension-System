import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Uploadresources.css';

const UploadResources = () => {
    const [resourceData, setResourceData] = useState({
        resource_name: '',
        description: '',
    });
    const [resourceFile, setResourceFile] = useState(null);
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        try {
            const response = await axios.get('http://localhost/winnie/getresources.php');
            setResources(response.data);
        } catch (error) {
            console.error('Error fetching resources:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setResourceData({ ...resourceData, [name]: value });
    };

    const handleFileChange = (e) => {
        setResourceFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('resource_name', resourceData.resource_name);
        formData.append('description', resourceData.description);
        formData.append('resource_file', resourceFile);

        try {
            const response = await axios.post('http://localhost/winnie/uploadresources.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert(response.data.message);
            if (response.data.success) {
                setResourceData({ resource_name: '', description: '' });
                setResourceFile(null);
                fetchResources();
            }
        } catch (error) {
            alert('Error uploading resource: ' + error.message);
        }
    };

    const handleEditResource = async (resourceId) => {
        const selectedResource = resources.find(resource => resource.id === resourceId);
        if (selectedResource) {
            setResourceData({
                resource_name: selectedResource.resource_name,
                description: selectedResource.description,
            });
        }
    };

    const handleDeleteResource = async (resourceId) => {
        try {
            const response = await axios.post('http://localhost/winnie/deleteresource.php', { id: resourceId });
            alert(response.data.message);
            if (response.data.success) {
                fetchResources();
            }
        } catch (error) {
            alert('Error deleting resource: ' + error.message);
        }
    };

    return (
        <div className="submit-container">
            <h2>Upload New Resource</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="resource_name"
                    placeholder="Resource Name"
                    value={resourceData.resource_name}
                    onChange={handleInputChange}
                    required
                />
                <textarea 
                    className="textarea"
                    name="description"
                    placeholder="Resource Description"
                    value={resourceData.description}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <input
                    type="file"
                    name="resource_file"
                    onChange={handleFileChange}
                    required
                />
                <button className="submit" type="submit">Upload Resource</button>
            </form>

            <div className="resource-list">
                {resources.map((resource) => (
                    <div key={resource.id} className="resource-item">
                        <div>
                            <h3>{resource.resource_name}</h3>
                            <p>{resource.description}</p>
                        </div>
                        <div>
                            <button className="edit-btn" onClick={() => handleEditResource(resource.id)}>Edit</button>
                            <button className="delete-btn" onClick={() => handleDeleteResource(resource.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadResources;
