import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
        <div>
            <div>
              <h1>Welcome!</h1>
              <p>This is my Yoga Website!</p>
              <p>Going to be adding my stuff soon so we can do yoga!</p>
            </div>
            <div style={{ maxWidth: `450px`, marginBottom: `1.45rem`}}>
              <Image />
            </div>
        </div>
    </Layout>
)

export default IndexPage
