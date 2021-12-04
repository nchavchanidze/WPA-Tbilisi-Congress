import React from 'react'
import Heading from "../../Components/Dashboard/Heading";
import UserDashboard from '../../Components/Dashboard/UserDashboard';
import Layout from "../../Layouts/Layout";


const Dashboard = () => {
    return (
        <Layout>
            <Heading />
            <UserDashboard />
        </Layout>
    )
}

export default Dashboard
