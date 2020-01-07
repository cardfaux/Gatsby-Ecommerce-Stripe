import React from "react"

import Layout from "../components/layout"
import Products from "../components/products"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Gatsby E-Commerce</h1>
      <div>
        <Products />
      </div>
    </Layout>
  )
}

export default IndexPage
