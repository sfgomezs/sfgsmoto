import { Cartwidget } from './Cartwidget';

const links = [
    { href: "", label: "Urbanas" },
    { href: "", label: "Naked" },
    { href: "", label: "Deportivas" },
    { href: "", label: "Touring" },
  ];
  
  export const Navbar = () => {
    return (
      <header className="header">
        <img
          src={
            "https://www.yamahamotos.cl/wp-content/uploads/2019/10/logo-header-black.jpg"
          }
          className="header__logo"
          alt="logo"
        />
        <div className="header__nav">
          {links.map(({ label }) => {
            return <h3 key={label}>{label}</h3>;
          })}
        </div>
        <div className="header__buttons">
          <Cartwidget />
        </div>
      </header>
    );
  };