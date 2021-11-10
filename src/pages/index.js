import React from "react"
import AllPosts from "../features/posts/AllPosts"

import "../assets/styles/index.scss"
import PageWrapper from "../features/shared/PageWrapper"

import ReactGA from "react-ga"
ReactGA.initialize("UA-212256338-2", { debug: true })

const IndexPage = () => (
  <PageWrapper className="home" pageName={"All posts"}>
    <div>a movie a minute</div>
    <AllPosts />
  </PageWrapper>
)

export default IndexPage
