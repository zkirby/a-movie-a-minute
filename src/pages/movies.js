import React from "react"

import AllMovies from "../features/movies/AllMovies"
import PageWrapper from "../features/shared/PageWrapper"

const Movies = () => (
  <PageWrapper className="home" pageName={"Movies"}>
    <AllMovies />
  </PageWrapper>
)

export default Movies
