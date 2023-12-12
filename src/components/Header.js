import React from "react";
import logo from "../images/logo.jpg";

function Header() {
  return (
    <div>
      <div className="company-name" style={{ background: 'lightgreen', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>
          <img src={logo} alt="logo" style={{ width: '100px', height: '90px', marginRight: '10px', paddingTop: '8px' }} />
          <b style={{ color: 'red' }}>Task Manager</b>
        </h1>
      </div>
    </div>
  );
}

export default Header;
