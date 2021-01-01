import React from "react";
import AsideItem from "../asideItem";
import { useLocation } from "react-router-dom"
import fields from "./fields";
import "./index.css";

const Aside = () => {
    const pathname = useLocation().pathname;
  return (
    <aside className="aside__container">
      <div className="aside__header">
        <p className="aside__logo">Jur</p>
        <div className="navigation__hamburger">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          ></input>
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
        </div>
      </div>
      <div>
          {fields.map((item, i) => {
              console.log(pathname, 'pathname')
             return <AsideItem 
              key={i}
              text={item.name}
              link={item.link}
              iconUrl={pathname === item.link ? item.iconLight : item.iconDark}
              color={pathname === item.link ? '#FFFFFF' : '#85A5C5' }
              />
          })}
      </div>
    </aside>
  );
};

export default Aside;
