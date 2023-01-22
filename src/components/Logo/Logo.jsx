import logo from './logo.svg';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css['wrapper']}>
      <img className={css['image']} src={logo} alt="logo"></img>
      <h1>Redux Phonebook</h1>
    </div>
  );
};

export default Logo;
