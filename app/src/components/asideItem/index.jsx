import React from "react"
import { Link } from "react-router-dom"
import Proptypes from "proptypes"
import "./index.css"

const AsideItem = ({ iconUrl, link, text, color }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div className="aside__item">
        <img className="aside__img" src={iconUrl}></img>
        <p style={{ color }}>{text}</p>
      </div>
    </Link>
  )
}

AsideItem.proptypes = {
  iconUrl: Proptypes.string,
  text: Proptypes.string,
  color: Proptypes.string,
  link: Proptypes.string,
}

AsideItem.defaultProps = {
  iconUrl: "",
  text: "",
  color: "#FFFFFF",
  link: "/",
}

export default AsideItem
