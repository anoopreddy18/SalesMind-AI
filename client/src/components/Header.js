import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="top-header">
      <div className="header-title-container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="header-actions">
        {/* Actions placeholder */}
      </div>
    </header>
  );
};

export default Header;
