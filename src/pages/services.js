import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

  const ServicePage = () =>  (
    <Layout>
    <SEO title="Service" />
      <h1>Service Page</h1>
      <p>Wow. Also Such Empty.</p>
      <p>There'll be stuff here I promise!</p>
      <Link to="/">Go to Home Page</Link> <br />
      <Link to="/about/">Go to About Page</Link> <br />
      <Link to="/contact/">Go to Contact Page</Link> <br />
    </Layout>
  )

export default ServicePage