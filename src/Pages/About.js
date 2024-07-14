import React from "react";
import a2 from "../Images/a2.jpg";
import Scrollbutton from "../Components/Scrollbutton";
import ScrollAnimation from "../Components/ScrollAnimation";
import '../Css/ScrollAnimation.css';

const About = () => {
  const { ref, isVisible } = ScrollAnimation();

 

  return (
    <div className="about">
      <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
        <div className="vertical-about"></div>
        <h3>About<span> Agricultural E-Extension System</span></h3>
      </div>
      <div className="all-containers">
        <div className="about-container1">
          <img className="a-image" src={a2} alt="Agricultural E-Extension System" />
        </div>
        <div className="about-container2">
          <h4>Empowering Farmers: <br /><span>Providing Digital Solutions</span> for Enhanced Agricultural Practices</h4>
        </div>
      </div>
      <div className="about-container3">
        <h3>Revolutionizing Agriculture:</h3>
        <p><span>Discover the vision guiding our mission. From delivering critical <br />agricultural information to fostering community engagement,<br />explore how we're transforming the landscape<br />of modern farming.</span></p>
        <button className="Learn-more-button">Learn more</button>
      </div>
     
      <Scrollbutton />
    </div>
  );
}

export default About;
