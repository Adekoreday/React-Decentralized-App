import React from "react"
import Enzyme, { shallow, render, mount } from "enzyme"
import "@testing-library/jest-dom/extend-expect"

global.React = React
global.shallow = shallow
global.render = render
global.mount = mount
