import React from "react"
import { Drizzle } from "@drizzle/store"
import { drizzleReactHooks } from "@drizzle/react-plugin"
import drizzleOptions from "./drizzle"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import LoadingContainer from "./components/containers/Loading"
import Status from "./components/pages/status"
import StatusType from "./components/pages/statusType"
import AllStatus from "./components/pages/allStatus"
import "./index.css"

const drizzle = new Drizzle(drizzleOptions)
const { DrizzleProvider } = drizzleReactHooks

const App = () => {
  return (
    <DrizzleProvider drizzle={drizzle}>
      <LoadingContainer>
        <BrowserRouter>
          <Switch>
            <Redirect from="/" to="/status/type" exact />
            <Route path="/status/type" exact component={StatusType} />
            <Route path="/status" exact component={Status} />
            <Route path="/status/all" exact component={AllStatus} />
          </Switch>
        </BrowserRouter>
      </LoadingContainer>
    </DrizzleProvider>
  )
}

export default App
