import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <img 
        src="/assets/pikachu.png"
        alt="Profile"
        className="profile-image"
      />
      <div className="profile-description">
        <h2>Hi, I'm [Your Name]!</h2>
        <p>
          I'm a passionate developer who loves building web applications. 
          I specialize in front-end development with React and enjoy learning new technologies.
          In my free time, I like to experiment with different frameworks and contribute to open-source projects.
        </p>
      </div>
    </div>
  );
};

export default Profile;
