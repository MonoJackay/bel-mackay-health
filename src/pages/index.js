import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homepage</h1>
    <p>Welcome to my Yoga Website!</p>
    <p>I just need to add my content and styling and I'll see you soon!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to page About Page</Link> <br />
    <Link to="/services/">Go to Service Page</Link> <br />
    <Link to="/contact/">Go to Contact Page</Link>
  </Layout>
)

export default IndexPage
