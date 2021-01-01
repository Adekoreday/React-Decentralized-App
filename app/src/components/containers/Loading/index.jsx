import React from "react"
import { drizzleReactHooks } from "@drizzle/react-plugin"
import Spinner from "../../spinner"
const { useDrizzleState } = drizzleReactHooks

const LoadingContainer = ({ children }) => {
  const drizzleStatus = useDrizzleState((state) => state.drizzleStatus)
  return drizzleStatus.initialized ? <>{children}</> : <Spinner />
}

export default LoadingContainer
