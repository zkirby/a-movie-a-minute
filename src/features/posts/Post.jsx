import React from "react"
import Renderer from "../markdown/Renderer"

import Loading from "../shared/api/Loading"
import useAsyncLoadState from "../shared/api/useAsyncLoadState"
import NavLink from "../shared/NavLink"
import { getPost } from "./posts.api"

import "./posts.scss"

const Post = ({ postId }) => {
  const [post, status] = useAsyncLoadState(() => getPost(postId))

  return (
    <div className="post">
      <NavLink className="home" to="/">
        Home
      </NavLink>
      <Loading className="loading" status={status}>
        <div className="body">
          <h1>{`${post?.title} (${post?.year})`}</h1>
          <Renderer blocks={post?.content} />
        </div>
      </Loading>
    </div>
  )
}

export default Post
