import React, { useState } from "react"
import { Formik, Form } from "formik"
import { drizzleReactHooks } from "@drizzle/react-plugin"
import SimpleAlerts from "../../alert"
import MyTextInput from "../../textInput"
import * as Yup from "yup"
import DashBoardLayout from "../../layout/dashboardLayout"
import "./index.css"

/**
 * useDrizzle enables us access our drizzle object used to perfom transactions with the smart contract
 * useDrizzleState enables us to read from the contract
 */
const StatusType = () => {
  const [stackId, setStackId] = useState(null)
  const { useDrizzle, useDrizzleState } = drizzleReactHooks
  const { drizzle } = useDrizzle()
  const state = useDrizzleState((state) => state)

  // get the transaction states from the drizzle state
  const { transactions, transactionStack } = state
  const getTxStatus = () => {
    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[stackId]
    // if transaction hash does not exist, don't display anything
    if (!txHash) return null

    return (
      /**
       * if the transaction completes then render tjr simple Alert to show the status of the transaction
       */
      transactions[txHash] && (
        <div>
          <SimpleAlerts
            severity={transactions[txHash].status}
            message={`transaction ${transactions[txHash].status}`}
          ></SimpleAlerts>
        </div>
      )
    )
  }

  /**
   *
   * @param {name} name the name of our status type to be submitted
   * the submit status sends request to addStatusType in our Jur smart contract
   */
  const submitStatus = (name) => {
    const contract = drizzle.contracts.JurStatus
    // let drizzle know we want to call the `addStatusType` method with `value`
    const Id = contract.methods["addStatusType"].cacheSend(name, {
      from: state.accounts[0],
    })
    setStackId(Id)
  }

  /**
   * StatusForm returns a form that used to create status type
   */
  const StatusForm = () => {
    return (
      <section className="status__container">
        {/**
         * use yup for our input validation logic
         * ensures the form doesnt submit if all validations are not passed.
         */}
        <Formik
          initialValues={{
            statusType: "",
          }}
          validationSchema={Yup.object({
            statusType: Yup.string()
              .max(15, "Must be 15 characters or less")
              .min(2, "minimum of two char")
              .required("status Type is Required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            submitStatus(values.statusType)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <MyTextInput label="StatusType" name="statusType" type="text" placeholder="active" />
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
        <div>{getTxStatus()}</div>
        <StatusForm />
      </DashBoardLayout>
    </section>
  )
}

export default StatusType
