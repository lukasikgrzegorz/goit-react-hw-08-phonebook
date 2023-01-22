import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
