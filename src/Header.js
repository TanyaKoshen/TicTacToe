import React from 'react';

const Header = (props) => {
  const {siteName} = props;
  return (
    <div>
      <h2>{siteName}</h2>
    </div>
  );
};

export default Header;
