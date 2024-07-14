import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Uploadresources.css';

const AddConsultations = () => {
    const [consultationData, setConsultationData] = useState({
        consultation_name: '',
        description: '',
    });
    const [consultationFile, setConsultationFile] = useState(null);
    const [consultations, setConsultations] = useState([]);

    useEffect(() => {
        fetchConsultations();
    }, []);

    const fetchConsultations = async () => {
        try {
            const response = await axios.get('http://localhost/winnie/getconsultations.php', {
                withCredentials: false // Do not include credentials with the request
            });
            setConsultations(response.data);
        } catch (error) {
            console.error('Error fetching consultations:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setConsultationData({ ...consultationData, [name]: value });
    };

    const handleFileChange = (e) => {
        setConsultationFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('consultation_name', consultationData.consultation_name);
        formData.append('description', consultationData.description);
        formData.append('consultation_file', consultationFile);

        try {
            const response = await axios.post('http://localhost/winnie/uploadconsultations.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: false // Do not include credentials with the request
            });
            alert(response.data.message);
            if (response.data.success) {
                setConsultationData({ consultation_name: '', description: '' });
                setConsultationFile(null);
                fetchConsultations();
            }
        } catch (error) {
            alert('Error uploading consultation: ' + error.message);
        }
    };

    const handleEditConsultation = async (consultationId) => {
        const selectedConsultation = consultations.find(consultation => consultation.id === consultationId);
        if (selectedConsultation) {
            setConsultationData({
                consultation_name: selectedConsultation.consultation_name,
                description: selectedConsultation.description,
            });
        }
    };

    const handleDeleteConsultation = async (consultationId) => {
        try {
            const response = await axios.post('http://localhost/winnie/deleteconsultation.php', { id: consultationId }, {
                withCredentials: false // Do not include credentials with the request
            });
            alert(response.data.message);
            if (response.data.success) {
                fetchConsultations();
            }
        } catch (error) {
            alert('Error deleting consultation: ' + error.message);
        }
    };

    return (
        <div className="submit-container">
            <h2>Upload New Consultation</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="consultation_name"
                    placeholder="Consultation Name"
                    value={consultationData.consultation_name}
                    onChange={handleInputChange}
                    required
                />
                <textarea 
                    className="textarea"
                    name="description"
                    placeholder="Consultation Description"
                    value={consultationData.description}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <input
                    type="file"
                    name="consultation_file"
                    onChange={handleFileChange}
                    required
                />
                <button className="submit" type="submit">Upload Consultation</button>
            </form>

            <div className="consultation-list">
                {consultations.map((consultation) => (
                    <div key={consultation.id} className="consultation-item">
                        <div>
                            <h3>{consultation.consultation_name}</h3>
                            <p>{consultation.description}</p>
                        </div>
                        <div>
                            <button className="edit-btn" onClick={() => handleEditConsultation(consultation.id)}>Edit</button>
                            <button className="delete-btn" onClick={() => handleDeleteConsultation(consultation.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddConsultations;
