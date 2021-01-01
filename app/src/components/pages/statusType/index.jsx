import React, { useState } from 'react';
import { Formik, Form, useField } from "formik";
import { drizzleReactHooks } from "@drizzle/react-plugin"
import { useToast } from "@chakra-ui/react"
import * as Yup from "yup";
import DashBoardLayout from '../../layout/dashboardLayout'
import toastSetup from '../../../utility/toast'
import './index.css'

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
          <div className={meta.touched && meta.error ? 'error_active' : 'error_hidden'}>{meta.error|| "hello"}</div>
      </>
    );
  };





const StatusType = () => {
    const [stackId, setStackId] = useState(null);
    const { useDrizzle, useDrizzleState } = drizzleReactHooks;
    const {drizzle} = useDrizzle();
    const state = useDrizzleState(state => state);

    const toast = useToast()
    const {setting} = toastSetup;

    const callToast = (status, description) => {
      toast({
        ...setting,
        title:
          status === "success"
            ? "success"
            : "failed",
        description: `${status === "success" ? "Success" : "Error"} message: ${description}`,
        status,
      })
    }

    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = state;
    const getTxStatus = () => {
        console.log(stackId, 'this is the stackId>>')
        // get the transaction hash using our saved `stackId`
        const txHash = transactionStack[stackId];
        console.log(txHash, 'this is the txHash>>')
        // if transaction hash does not exist, don't display anything
        if (!txHash) return null;
      
        // otherwise, return the transaction status
        if(transactions[txHash]) {
            console.log(transactions[txHash].status)
           // callToast(transactions[txHash].status, 'transaction successful');
            return transactions[txHash] && transactions[txHash].status;
      };
    }
   const submitStatus = (name) => {
        const contract = drizzle.contracts.JurStatus;
          // let drizzle know we want to call the `addStatusType` method with `value`
        const Id = contract.methods["addStatusType"].cacheSend(name, {
        from: state.accounts[0]
      });
        setStackId(Id);
    }

    const StatusForm = () => {
        return (
          <section className="status__container">
            <Formik
              initialValues={{
                statusType: ""
              }}
              validationSchema={Yup.object({
                statusType: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .min(2, "minimum of two char")
                  .required("status Type is Required")
              })}
              onSubmit={async (values, { setSubmitting }) => {
                submitStatus(values.statusType);
                setSubmitting(false);
              }}
            >
             {({ isSubmitting }) => (
              <Form className="form">
                <MyTextInput
                  label="Status Type"
                  name="statusType"
                  type="text"
                  placeholder="Jane"
                />
                <button type="submit" className="submit__active" disabled={isSubmitting}>Submit</button>
              </Form>
             )}
            </Formik>
          </section>
        );
      };


    return (
        <section>
            <DashBoardLayout>
            <div>{getTxStatus()}</div>
            <StatusForm />   
            </DashBoardLayout>
        </section>
    );
  }

export default StatusType;
