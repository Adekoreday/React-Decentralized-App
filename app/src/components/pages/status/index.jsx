import React, { useState } from "react"
import { Formik, Form } from "formik"
import { drizzleReactHooks } from "@drizzle/react-plugin"
import MyTextInput from "../../textInput"
import * as Yup from "yup"
import DashBoardLayout from "../../layout/dashboardLayout"

const Status = () => {
  const { useDrizzle, useDrizzleState } = drizzleReactHooks
  const { drizzle } = useDrizzle()
  const state = useDrizzleState((state) => state)

  const submitStatus = (values) => {
    const contract = drizzle.contracts.JurStatus
    // let drizzle know we want to call the `addStatusType` method with `value`
    const Id = contract.methods["addJurStatus"].cacheSend(values.address, values.statusType, {
      from: state.accounts[0],
    })
  }
  const StatusForm = () => {
    return (
      <section className="status__container">
        <Formik
          initialValues={{
            statusType: 0,
            address: "",
          }}
          validationSchema={Yup.object({
            statusType: Yup.number().min(0).required("status Type index is Required"),
            address: Yup.string().min(42, "address not valid").required(),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            submitStatus(values)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <MyTextInput
                label="StatusType Index"
                name="statusType"
                type="number"
                placeholder="0"
              />
              <MyTextInput
                label="Status address"
                name="address"
                type="text"
                placeholder="address"
              />
              <button type="submit" className="submit__active" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </section>
    )
  }

  return (
    <section>
      <DashBoardLayout>
        <StatusForm></StatusForm>
      </DashBoardLayout>
    </section>
  )
}

export default Status
