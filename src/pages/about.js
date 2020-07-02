import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

  const AboutPage = () =>  (
    <Layout>
    <SEO title="About" />
      <h1>About Page</h1>
      <p>Wow. Such Empty.</p>
      <p>Don't worry, content is coming!</p>
      <Link to="/">Go to Home Page</Link> <br />
      <Link to="/services/">Go to Service Page</Link> <br />
      <Link to="/contact/">Go to Contact Page</Link>
    </Layout>
  )

export default AboutPage