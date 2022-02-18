import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const MenuComponent = () => (
    <Menu inverted stackable >
        <Menu.Item
            as={NavLink}
            exact
            to="/"
        >Ambrosio</Menu.Item>
        <Menu.Item
            as={NavLink}
            to="/about"
        >About</Menu.Item>
        <Menu.Item
            as={NavLink}
            to="/sensor"
        >Sensor</Menu.Item>
    </Menu>
)

export default MenuComponent;
