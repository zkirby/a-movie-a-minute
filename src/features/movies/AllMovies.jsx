import React, { useMemo, useState } from "react"
import { filter, map } from "lodash"

import useAsyncLoadState from "../shared/api/useAsyncLoadState"
import { getAllMovies } from "./movies.api"
import SkeletonLoading from "../shared/api/SkeletonLoading"

const AllMovies = () => {
  const [movies, status] = useAsyncLoadState(getAllMovies, [])
  const [searchText, setSearchText] = useState("")

  const filteredMovies = useMemo(() => {
    return filter(movies, movie =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    )
  })

  return (
    <div className="all-movies">
      <h2>Movies</h2>
      <p>A running list of every movie I&apos;ve ever seen</p>
      <span>search </span>
      <input value={searchText} onChange={e => setSearchText(e.target.value)} />
      <SkeletonLoading status={status} skeleton={<div>Loading...</div>}>
        <ol>
          {map(filteredMovies, movie => (
            <li>{movie.title}</li>
          ))}
        </ol>
      </SkeletonLoading>
    </div>
  )
}

export default AllMovies
