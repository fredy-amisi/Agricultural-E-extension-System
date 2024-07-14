import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Styling.css";
import Scrollbutton from "../Components/Scrollbutton";
import { useNavigate } from "react-router-dom";

const Resources = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/ResourceDetailPage');
  };

  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get("http://localhost/winnie/getresources.php");
        setResources(response.data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div>
      <div className="resources-page">
        <div className="resources-vertical"></div>
        <h1>
          MOST POPULAR<span> ONLINE</span> <br />
          BEST IN <span>RESOURCES</span>
        </h1>
        <div className="resource-container">
          {resources.map((resource) => (
            <div className="resources" key={resource.id}>
              <img src={`http://localhost/winnie/uploads/${resource.resource_image}`} alt={resource.resource_name} className="resource-image" />
              <h3>{resource.resource_name}</h3>
              <p>{resource.description}</p>
              <button className="Details" onClick={handleClick}>View Details</button>
            </div>
          ))}
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Resources;
