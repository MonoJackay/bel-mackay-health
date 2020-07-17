import React from "react"

import { ThemeProvider, Button } from "@gympass/yoga"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <ThemeProvider theme="Wellness">
    <Layout>
    <SEO title="Home" />
    <div>
        <div>
          <h1>Welcome!</h1>
          <p>This is my Yoga Website!</p>
          <p>Going to be adding my stuff soon so we can do yoga!</p>
           <div style={{ paddingRight: `1rem` }}>
             <Button>Make a Booking</Button>
            <Button.Outline>Contact Info</Button.Outline>
            </div>
        </div>
        <div style={{ maxWidth: `450px`, marginBottom: `1.45rem`}}>
          <Image />
        </div>
    </div>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
