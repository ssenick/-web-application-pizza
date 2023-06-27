import React from "react"
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = (props) => (
   <ContentLoader
      speed={0}
      width={280}
      height={451}
      viewBox="0 0 280 451"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <rect x="188" y="228" rx="0" ry="0" width="20" height="0" />
      <rect x="162" y="404" rx="8" ry="8" width="110" height="45" />
      <rect x="0" y="272" rx="5" ry="5" width="280" height="25" />
      <rect x="0" y="413" rx="5" ry="5" width="115" height="27" />
      <rect x="1" y="307" rx="8" ry="8" width="280" height="84" />
      <circle cx="130" cy="130" r="130" />
   </ContentLoader>
)

export default PizzaSkeleton;

