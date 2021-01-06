import React, { useState, Suspense } from "react"
import Proptypes from "proptypes"
import Aside from "../../aside"
import "./index.css"

const DashBoardLayout = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <section className="dashboard__container">
      <Aside toggleDashboard={() => setToggle(!toggle)} toggle={toggle} />
      <div className="dashboard__content">{props.children}</div>
    </section>
  )
}

DashBoardLayout.proptypes = {
  children: Proptypes.node.isRequired,
}

DashBoardLayout.defaultProps = {
  children: <div></div>,
}
export default DashBoardLayout
