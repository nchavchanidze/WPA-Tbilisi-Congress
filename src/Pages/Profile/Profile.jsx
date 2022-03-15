import React from 'react'
import Layout from "../../Layouts/Layout";
import Heading from '../../Components/Heading';
import UpdateProfile from '../../Components/Profile/UpdateProfile';

const Profile = () => {
    return (
        <Layout>
            <Heading title="Profile" />
            <UpdateProfile />
        </Layout>
    )
}

export default Profile
