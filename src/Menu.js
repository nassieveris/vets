import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { name: 'Home',                       path: '/' },
  { name: 'Nosotros',                   path: '/nosotros' },
  { name: 'Nuestros Vets',              path: '/vets' },
  { name: '¡Toma una Consulta!',        path: '/consulta', classItem: 'menu-button', classLink: 'cta red' },
  { name: 'Pon lindo a tu Engreído',    path: '/engrielo', classItem: 'menu-button', classLink: 'cta cyan' },
];

const Menu = () => {
  return (
    <nav className="menu">
      <ul className='menu-ul'>
        {routes.map((route, index) => (
          <li
            key={index}
            className={route.classItem || "menu-item"}>
            <NavLink
              to={route.path}
              className={({ isActive }) => `${route.classLink || "menu-link"} ${isActive ? "menu-active" : ""}`}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
