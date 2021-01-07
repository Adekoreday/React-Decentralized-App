import React from "react"
import { render, screen } from "@testing-library/react"
import { drizzleReactHooks } from "@drizzle/react-plugin"
import Status from "./index"
import sinon from "sinon"
import { MemoryRouter } from "react-router"

describe("Status Test", () => {
  let sinons
  let drizzlestate
  beforeAll(() => {
    sinons = sinon.stub(drizzleReactHooks, "useDrizzle").returns({
      drizzle: {
        contracts: {
          JurStatus: {
            methods: {
              addJurStatus: {
                cacheSend: (...args) => {},
              },
            },
          },
        },
      },
    })

    drizzlestate = sinon.stub(drizzleReactHooks, "useDrizzleState").callsFake((...args) => {
      return {
        accounts: ["0x000000000000AAAAAAAA00"],
      }
    })
  })

  afterAll(() => {
    sinons.restore()
    drizzlestate.restore()
  })

  test("renders Status component successfully", () => {
    render(
      <MemoryRouter initialEntries={["/status"]}>
        <Status />
      </MemoryRouter>
    )
    /**expect the page should render and display labels for status type and status */
    expect(screen.getByText("StatusType Index")).toBeInTheDocument()
    expect(screen.getByText("Status address")).toBeInTheDocument()
  })
})
