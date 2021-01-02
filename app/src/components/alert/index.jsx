import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import Proptypes from "proptypes"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const SimpleAlerts = ({ severity, message }) => {
  const [notify, setNotify] = useState(true)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={notify}
        autoHideDuration={2000}
        onClose={() => {
          setNotify(false)
        }}
      >
        <Alert severity={severity}>Transaction {severity} !</Alert>
      </Snackbar>
    </div>
  )
}

SimpleAlerts.proptypes = {
  severity: Proptypes.string,
  message: Proptypes.string,
}

SimpleAlerts.defaultProps = {
  severity: "success",
  message: "success",
}

export default SimpleAlerts
