import React from 'react'
import AbstractUpload from '../../Components/Abstract/AbstractUpload'
import Heading from '../../Components/Abstract/Heading'
import Layout from "../../Layouts/Layout"
import Background from "../../Assets/Images/Home/Slider/slide-03.png";


const Abstracts = () => {
    return (
        <Layout>
            <Heading title="abstracts" background={Background} />
            <AbstractUpload />
        </Layout>
    )
}

export default Abstracts
