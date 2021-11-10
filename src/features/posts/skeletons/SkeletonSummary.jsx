import React from "react"
import ContentLoader from "react-content-loader"

import "../posts.scss"

const SkeletonSummary = ({ count = 12 }) => (
  <>
    {Array(count)
      .fill()
      .map((_, i) => (
        <ContentLoader
          className="skeleton-summary"
          height={320}
          width={160}
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          viewBox="0 0 100 200"
          key={i}
        >
          <rect x="0" y="0" width="160" height="200" />
        </ContentLoader>
      ))}
  </>
)

export default SkeletonSummary
