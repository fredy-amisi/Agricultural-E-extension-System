import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Styling.css";
import Scrollbutton from "../Components/Scrollbutton";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ConsultationDetailPage');
  };

  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await axios.get("http://localhost/winnie/getconsultations.php");
        if (Array.isArray(response.data)) {
          setConsultations(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching consultations:", error);
      }
    };

    fetchConsultations();
  }, []);

  return (
    <div>
      <div className="consultations-page">
        <div className="consultations-vertical"></div>
        <h1>
          MOST POPULAR<span> ONLINE</span> <br />
          BEST IN <span>CONSULTATIONS</span>
        </h1>
        <div className="consultation-container">
          {consultations.map((consultation) => (
            <div className="consultations" key={consultation.id}>
              <img src={`http://localhost/winnie/uploads/${consultation.consultation_image}`} alt={consultation.consultation_name} className="consultation-image" />
              <h3>{consultation.consultation_name}</h3>
              <p>{consultation.description}</p>
              <button className="Details" onClick={handleClick}>View Details</button>
            </div>
          ))}
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Consultation;
