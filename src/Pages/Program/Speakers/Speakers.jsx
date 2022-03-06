import React from 'react'
import Heading from '../../../Components/Heading'
import Layout from '../../../Layouts/Layout'
import Speaker from '../../../Components/Program/Speakers/Speakers'

const Speakers = () => {
  return (
      <Layout>
          <Heading title="Speakers" />
    <Speaker />
      </Layout>
  )
}

export default Speakers