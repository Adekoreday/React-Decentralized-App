import React from "react"
import AsideItem from "../asideItem"
import { useLocation } from "react-router-dom"
import Proptypes from "proptypes"
import fields from "./fields"
import "./index.css"
/**
 * getAsideItems returns all aside items
 * @param {Object} fields object holding description of all items in the aside component
 * @param {String} pathname the current browser url used to track which pages to be rendered in the dashboard
 * @param {Boolean} toggle toggle switch used to track state of the aside component
 */
const getAsideItems = (fields, pathname, toggle) => {
  return (
    <div>
      {fields.map((item, i) => {
        return (
          <AsideItem
            key={i}
            text={toggle ? item.name : ""}
            link={item.link}
            iconUrl={pathname === item.link ? item.iconLight : item.iconDark}
            color={pathname === item.link ? "#FFFFFF" : "#85A5C5"}
          />
        )
      })}
    </div>
  )
}
const Aside = ({ toggleDashboard, toggle }) => {
  const pathname = useLocation().pathname
  return (
    <aside>
      <div className={toggle ? "desktop__aside__container" : "desktop__aside__container__min"}>
        <div className="aside__header">
          <p className="aside__logo">Jur</p>
          <div className="navigation__hamburger">
            <input
              onClick={toggleDashboard}
              type="checkbox"
              className="navigation__checkbox"
              id="navi-toggle"
            ></input>
            <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon">&nbsp;</span>
            </label>
          </div>
        </div>
        {getAsideItems(fields, pathname, toggle)}
      </div>

      <div className="mobile__aside__container">
        <div className={toggle ? "mobile__nav__items" : "mobile__nav__items--hide"}>
          {getAsideItems(fields, pathname, toggle)}
        </div>
        <div className="aside__header">
          <p className="aside__logo">Jur</p>
          <div className="navigation__hamburger">
            <input
              onClick={toggleDashboard}
              type="checkbox"
              className="navigation__checkbox"
              id="navi-toggle_1"
            ></input>
            <label htmlFor="navi-toggle_1" className="navigation__button">
              <span className="navigation__icon">&nbsp;</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  )
}

Aside.proptypes = {
  toggleDashboard: Proptypes.func,
  toggle: Proptypes.bool,
}

Aside.defaultProps = {
  toggleDashboard: () => {},
  toggle: false,
}
export default Aside
