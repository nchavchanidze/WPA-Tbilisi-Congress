import React from 'react'
import Footer from '../Components/ComponentsLayout/Footer'
import Header from '../Components/ComponentsLayout/Header'

const Layout = ({children}) => {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}

export default Layout
