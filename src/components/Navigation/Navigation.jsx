import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
const Navigation = () => {
  return (
    <ul className={css['wrapper']}>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
