import React from "react"
import { Drizzle } from "@drizzle/store"
import { drizzleReactHooks } from "@drizzle/react-plugin"
import drizzleOptions from "./drizzle"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import LoadingContainer from "./components/containers/Loading"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Status from "./components/pages/status"
import StatusType from "./components/pages/statusType"
import AllStatus from "./components/pages/allStatus"
import store from "./middleware"
import "./index.css"

const drizzle = new Drizzle(drizzleOptions, store)
const { DrizzleProvider } = drizzleReactHooks
/**
 * App component serves as the entry for the entire application
 * The drizzle Provider wrap around the whole app to enable drizzle to be available
 * in the whole application.
 */
const App = () => {
  return (
    <DrizzleProvider drizzle={drizzle}>
      <LoadingContainer>
        <ToastContainer />
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
