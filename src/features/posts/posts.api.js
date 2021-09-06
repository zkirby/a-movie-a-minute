import api from "../shared/api/requests"

export function getAllPostSummaries() {
  return api.get("/api/get-posts").json()
}

export function getPost(postId) {
  return api.get("/api/get-post", { searchParams: { postId } }).json()
}
