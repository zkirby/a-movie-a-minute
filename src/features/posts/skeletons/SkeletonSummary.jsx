import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonSummary = ({ count = 15 }) => (
  <>
    {Array(count)
      .fill()
      .map((_, i) => (
        <ContentLoader
          class="skeleton-summary"
          height={322}
          width={160}
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          viewBox="0 0 100 200"
          key={i}
        >
          <rect x="0" y="0" rx="3" ry="3" width="160" height="322" />
        </ContentLoader>
      ))}
  </>
)

export default SkeletonSummary
