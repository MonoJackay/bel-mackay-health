import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

  const ContactPage = () =>  (
    <Layout>
    <SEO title="Service" />
      <h1>Contact Page</h1>
      <p>Wow. Also ALSO Such Empty.</p>
      <p>There'll be stuff here I promise!</p>
      <Link to="/">Go to Home Page</Link> <br />
      <Link to="/about/">Go to About Page</Link> <br />
      <Link to="/services/">Go to Service Page</Link> <br />
    </Layout>
  )

export default ContactPage