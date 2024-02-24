import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark" style={{ height: "80px" }}>
          <a
            className="navbar-brand"
            style={{ paddingLeft: "20px", fontFamily: 'Dancing Script, cursive' }}
            href="/"
          >
            Employee Management System
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
