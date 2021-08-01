import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>Wow you've found the special secret hidden page :o, go <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a> to claim your prize</h1>
  </Layout>
)

export default NotFoundPage
