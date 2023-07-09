import React from 'react';
import "./profile.scss"
import Form from '@/components/Form/Form';
const Profile = () => {
    return (
        <div className="profile">
            <h2>PROFILE</h2>
            <div className="profile_container">
                <Form></Form>
            </div>
        </div>
    );
};

export default Profile;