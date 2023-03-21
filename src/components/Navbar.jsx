import { Cartwidget } from './Cartwidget';
import { Link } from 'react-router-dom';

const links = [
    { to: "/Urban", label: "Urbanas" },
    { to: "/Naked", label: "Naked" },
    { to: "/Sport", label: "Deportivas" },
    { to: "/Touring", label: "Touring" },
  ];
  
  export const Navbar = () => {
    return (
      <header className="header">
        <div className='header__container'>
          <Link to="/">
            <img
              src={
                "https://www.yamahamotos.cl/wp-content/uploads/2019/10/logo-header-black.jpg"
              }
              className="header__logo"
              alt="logo"
            />
          </Link>

          <nav className="navbar">
            {links.map(({ label }) => {
              return <Link className='navbar__link' key={label}>{label}</Link>;
            })}
          </nav>
          <div className="header__buttons">
            <Cartwidget />
          </div>
        </div>
        
        
      </header>
    );
  };