import React from 'react'
import CEO from '../../../Components/About/Welcome/CEO'
import Heading from '../../../Components/About/Welcome/Heading'
import Message from '../../../Components/About/Welcome/Message'
import Layout from '../../../Layouts/Layout'

const Welcome = () => {
  return (
      <Layout>
          <Heading />
        <Message />
        <CEO />
      </Layout>
  )
}

export default Welcome