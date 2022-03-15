import React from 'react'
import Heading from '../../../Components/Heading'
import Information from '../../../Components/About/General Information/Information'
import Layout from '../../../Layouts/Layout'

const GeneralInformation = () => {
  return (
     <Layout>
         <Heading title="General Information"/>
    <Information />
     </Layout> 
  )
}

export default GeneralInformation