import React from "react"
import { useField } from "formik"
import Proptypes from "proptypes"
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label className="label__container" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="text-input" {...field} {...props} />
      <div className={meta.touched && meta.error ? "error_active" : "error_hidden"}>
        {meta.error || "hello"}
      </div>
    </>
  )
}

MyTextInput.proptypes = {
  label: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  type: Proptypes.string,
  placeholder: Proptypes.string,
}

MyTextInput.defaultProps = {
  label: "",
  name: "",
  type: "",
  placeholder: "",
}

export default MyTextInput
