import React from "react"
import Renderer from "../markdown/Renderer"

import SkeletonLoading from "../shared/api/SkeletonLoading"
import useAsyncLoadState from "../shared/api/useAsyncLoadState"
import NavLink from "../shared/NavLink"
import SkeletonPost from "./skeletons/SkeletonPost"
import { getPost } from "./posts.api"

import "./posts.scss"

const Post = ({ postId }) => {
  const [post, status] = useAsyncLoadState(() => getPost(postId))
  console.log(post, status)

  return (
    <div className="post">
      <NavLink className="home" to="/">
        Home
      </NavLink>
      <SkeletonLoading status={status} skeleton={<SkeletonPost />}>
        <div className="body">
          <h1>{`${post?.title} (${post?.year})`}</h1>
          <Renderer blocks={post?.content} />
        </div>
      </SkeletonLoading>
    </div>
  )
}

export default Post
