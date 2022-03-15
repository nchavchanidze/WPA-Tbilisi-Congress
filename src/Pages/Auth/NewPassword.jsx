import React from 'react'
import Layout from '../../Layouts/Layout'
import Heading from '../../Components/Heading'
import NewPasswordReset from '../../Components/Auth/NewPasswordReset'

const NewPassword = () => {
  return (
      <Layout>
          <Heading title="Enter New Password" />
          <NewPasswordReset />
      </Layout>
  )
}

export default NewPassword