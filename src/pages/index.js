// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <p>Following the gatsby tutorial</p>
      <StaticImage 
        alt="Clifford"
        src="../images/Comedy-Dynamics-Partners-with-IndieFlix.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage