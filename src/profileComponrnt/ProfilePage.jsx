import React, { useState } from 'react';
import './profile.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link for navigation

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    // Your API call logic here
  };

  return (
    <div className="profile-container">
      <div>
        <h1 className="welcome-message">Hi! Megha, Welcome</h1>
        <div className="user-info">
          <h5>Megha Digarse</h5>
          <h6>6261392766</h6>
          <button onClick={() => setIsEditing(true)}>Update Profile</button>
        </div>
        <button className="logout-button">Log Out</button>
      </div>

      <div>
        {isEditing && (
          <form className="profile-form" onSubmit={handleUpdateProfile}>
            {/* Add input fields for updating profile information */}
            {/* <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> */}
            <button type="submit">Save Changes</button>
          </form>
        )}

        <div className="exam-button">
        <Link to="/driving-assessment">
        <button>Exam</button>
      </Link>        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
