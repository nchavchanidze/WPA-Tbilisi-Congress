import React from 'react'
import Questions from '../../../Components/About/FAQ/Questions'
import Construction from '../../../Components/Construction/Construction'
import Heading from '../../../Components/Heading'
import Layout from '../../../Layouts/Layout'

const FAQ = () => {
  return (
    <Layout>
      <Heading title="Frequently Asked Questions" />
      <Questions />
    </Layout>
  )
}

export default FAQ