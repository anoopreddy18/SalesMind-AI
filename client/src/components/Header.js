import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="top-header">
      <div className="header-title-container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="header-actions">
        <div className="header-user">
           {/* Mock user placeholder */}
           JD
        </div>
      </div>
    </header>
  );
};

export default Header;
