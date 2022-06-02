import React from 'react'
import Heading from '../../Components/Heading'
import Policy from '../../Components/Privacy/Policy'
import Layout from '../../Layouts/Layout'

const Privacy = () => {
  return (
      <Layout>
          <Heading title="Privacy Policy" />
          <Policy />
      </Layout>
  )
}

export default Privacy