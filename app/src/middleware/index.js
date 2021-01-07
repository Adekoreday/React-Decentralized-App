import { toast } from "react-toastify"
import { generateStore, EventActions } from "@drizzle/store"
import drizzleOptions from "../drizzle"

/**
 *
 * @param {Object} store the drizzle store
 * this event notifier is incoporated into the redux middleware used by drizzle to listen to
 * events and trigger a toast in response. This logic can be further be improved to persist response in localStorage
 * or any other store to make the overall application aware of this event triggered.
 */
const contractEventNotifier = (store) => (next) => (action) => {
  if (action.type === EventActions.EVENT_FIRED) {
    const contract = action.name
    const contractEvent = action.event.event
    const data = action.event.returnValues
    const display = `${contract}(${contractEvent})`
    toast.success(display, { position: toast.POSITION.TOP_RIGHT })
  }
  return next(action)
}

const appMiddlewares = [contractEventNotifier]

const store = generateStore({
  drizzleOptions,
  appMiddlewares,
  disableReduxDevTools: false, // enable ReduxDevTools!
})

// Use the store with DrizzleProvider
export default store
