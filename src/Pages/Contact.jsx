import React from 'react'
import ContactForm from '../Components/Contact/ContactForm'
import ContactInfo from '../Components/Contact/ContactInfo'
import ContactMap from '../Components/Contact/ContactMap'
import Heading from '../Components/Contact/Heading'
import Layout from '../Layouts/Layout'

const Contact = () => {
    return (
        <Layout>
           <Heading /> 
           <ContactInfo />
           <ContactForm />
           <ContactMap />
        </Layout>
    )
}

export default Contact
