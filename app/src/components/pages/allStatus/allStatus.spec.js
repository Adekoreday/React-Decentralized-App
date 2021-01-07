import React from "react"
import { render, screen } from "@testing-library/react"
import { drizzleReactHooks } from "@drizzle/react-plugin"
import AllStatus from "./index"
import sinon from "sinon"
import { MemoryRouter } from "react-router"

describe("All Status Render Test", () => {
  let sinons, drizzlestate
  beforeAll(() => {
    sinons = sinon.stub(drizzleReactHooks, "useDrizzle").returns({
      useCacheCall: (...args) => 2,
      drizzle: {
        contracts: {
          JurStatus: {
            methods: {
              getStatusListItem: {
                cacheCall: (...args) => 0,
              },
            },
          },
        },
      },
    })

    drizzlestate = sinon.stub(drizzleReactHooks, "useDrizzleState").callsFake((...args) => {
      return {
        accounts: ["0x000000000000AAAAAAAA00"],
        contracts: {
          JurStatus: {
            getStatusListItem: [
              {
                value: ["1234567", "true", "active"],
              },
            ],
          },
        },
      }
    })
  })

  afterAll(() => {
    sinons.restore()
    drizzlestate.restore()
  })

  test("renders all Status component successfully", () => {
    render(
      <MemoryRouter initialEntries={["/status/all"]}>
        <AllStatus />
      </MemoryRouter>
    )
  })
})
