import React from "react"
import { drizzleReactHooks } from "@drizzle/react-plugin"
import Spinner from "../../spinner"
import Proptypes from "proptypes"
const { useDrizzleState } = drizzleReactHooks

/**
 *
 * @param {Object} children the children our container wraps
 */
const LoadingContainer = ({ children }) => {
  const drizzleStatus = useDrizzleState((state) => state.drizzleStatus)
  return drizzleStatus.initialized ? <>{children}</> : <Spinner />
}

LoadingContainer.proptypes = {
  children: Proptypes.node,
}

LoadingContainer.defaultProps = {
  children: <div>hello</div>,
}

export default LoadingContainer
