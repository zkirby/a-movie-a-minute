import React from "react"

// eventually this will be more complex, for now it's just
// returning either the skeleton or the children
const SkeletonLoading = ({ status, children, skeleton }) => {
  return status.loading ? skeleton : children
}

export default SkeletonLoading
