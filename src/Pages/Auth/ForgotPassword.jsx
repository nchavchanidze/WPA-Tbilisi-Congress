import React from 'react'
import Layout from '../../Layouts/Layout'
import Heading from '../../Components/Heading'
import PasswordReset from '../../Components/Auth/PasswordReset'

const ForgotPassword = () => {
  return (
      <Layout>
          <Heading title="Forgot Password"/>
          <PasswordReset />
      </Layout>
  )
}

export default ForgotPassword