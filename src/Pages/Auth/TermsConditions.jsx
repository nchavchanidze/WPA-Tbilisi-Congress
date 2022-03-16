import React from 'react'
import Layout from '../../Layouts/Layout'
import Heading from '../../Components/Heading'
import Terms from '../../Components/Auth/Terms'

const TermsConditions = () => {
  return (
      <Layout>
          <Heading title="Terms and Conditions"/>
          <Terms />
      </Layout>
  )
}

export default TermsConditions