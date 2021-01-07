import React from "react"
import DashBoardLayout from "../../layout/dashboardLayout"
import { drizzleReactHooks } from "@drizzle/react-plugin"
import AllStatusTable from "../../allStatusTable"

const AllStatus = () => {
  const { useDrizzle, useDrizzleState } = drizzleReactHooks
  const { useCacheCall, drizzle } = useDrizzle()
  const state = useDrizzleState((state) => state)
  let count = 1
  /**
   * The get All status uses drizzle to return all jur Status
   */
  const getAllStatus = () => {
    // use useCacheCall to find the amount of status we have
    const length = useCacheCall("JurStatus", "getStatusListLength")
    const contract = drizzle.contracts.JurStatus
    let itemArray = []
    // iterate through the length and return an array of all jur status
    for (let i = length - 1; i >= 0; i--) {
      const itemkey = contract.methods["getStatusListItem"].cacheCall(i, {
        from: state.accounts[0],
      })
      // couldnt useCacheCall here because the number of hooks have to be consistent with hooks
      //on every re render according to react docs.
      // get each item in the data structure holding the jur status
      const item = state.contracts["JurStatus"]["getStatusListItem"][itemkey]
      if (item?.value) {
        const data = {
          id: count++,
          activationTime: item.value[0],
          isActive: item.value[1],
          statusType: item.value[2],
        }
        itemArray.push(data)
      }
    }
    return itemArray
  }
  return (
    <section>
      <DashBoardLayout>
        <div>
          <AllStatusTable data={getAllStatus()}></AllStatusTable>
        </div>
      </DashBoardLayout>
    </section>
  )
}

export default AllStatus
