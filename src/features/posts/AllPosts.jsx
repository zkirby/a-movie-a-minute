import React from "react"
import { map } from "lodash"

import useAsyncLoadState from "../shared/api/useAsyncLoadState"
import SkeletonLoading from "../shared/api/SkeletonLoading"
import { getAllPostSummaries } from "./posts.api"
import PostSummary from "./PostSummary"
import SkeletonSummary from "./skeletons/SkeletonSummary"
import SignupForm from "../shared/SignupForm"

import "./posts.scss"

const AllPosts = () => {
  const [summaries, status] = useAsyncLoadState(getAllPostSummaries, [])

  return (
    <div className="all-posts">
      <SkeletonLoading status={status} skeleton={<SkeletonSummary />}>
        {map(summaries, post => (
          <PostSummary key={post.id} post={post} />
        ))}
      </SkeletonLoading>
      <SignupForm />
    </div>
  )
}

export default AllPosts
