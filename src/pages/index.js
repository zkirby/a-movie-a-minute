import React from "react"
import { Link } from "gatsby"

import AllPosts from "../features/posts/AllPosts"
import PageWrapper from "../features/shared/PageWrapper"

import "../assets/styles/index.scss"

import ReactGA from "react-ga"
ReactGA.initialize("UA-212256338-2")

const IndexPage = () => (
  <PageWrapper className="home" pageName={"All posts"}>
    <div className="nav-bar">
      <div>a movie a minute</div>
      <div>
        <Link to="movies">all movies</Link>
      </div>
    </div>
    <AllPosts />
  </PageWrapper>
)

export default IndexPage
