import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Alert from "@material-ui/lab/Alert"
import Proptypes from "proptypes"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const SimpleAlerts = ({ severity, message }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity={severity}>
        {message}
      </Alert>
    </div>
  )
}

SimpleAlerts.proptypes = {
  severity: Proptypes.string,
  message: Proptypes.string,
}

SimpleAlerts.defaultProps = {
  iconUrl: "",
  text: "",
  color: "#FFFFFF",
  link: "/",
}

export default SimpleAlerts
