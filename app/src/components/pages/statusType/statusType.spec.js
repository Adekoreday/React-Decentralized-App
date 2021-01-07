import React from "react"
import { render, screen } from "@testing-library/react"
import { drizzleReactHooks } from "@drizzle/react-plugin"
import Status from "./index"
import sinon from "sinon"
import { MemoryRouter } from "react-router"

describe("Status Type Render Test", () => {
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
        transactions: {
          key: true,
        },
        transactionStack: ["key"],
      }
    })
  })

  afterAll(() => {
    sinons.restore()
    drizzlestate.restore()
  })

  test("renders Status Type component successfully", () => {
    render(
      <MemoryRouter initialEntries={["/status/type"]}>
        <Status />
      </MemoryRouter>
    )
    /**expect the page should render and display label text for status type inputs successfully */
    expect(screen.getByText("StatusType")).toBeInTheDocument()
  })
})
