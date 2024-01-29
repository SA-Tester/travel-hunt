import React, { useState } from 'react';
import './ProfileEditForm.css'; // CSS for styling

const ProfileEditForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [profilePic, setProfilePic] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Form submitted!");
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        setProfilePic(file);
    };

    return (
        <div className="profile-edit-wrapper">
            <div className="profile-edit-container">
                <h1 className="form-title">Profile Edit</h1>
                <form onSubmit={handleSubmit} className="profile-edit-form">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input type="text" id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="profilePic">Profile Picture</label>
                        <input type="file" id="profilePic" onChange={handleProfilePicChange} />
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileEditForm;
