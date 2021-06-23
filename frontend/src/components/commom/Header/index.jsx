import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderWrapper, TextLink } from './styles';

function Header() {
  const history = useHistory();

  const handleClick = (location) => {
    history.push(location);
  };
  return (
    <HeaderWrapper>
      <TextLink onClick={() => handleClick('/')}>Página Inicial</TextLink>
    </HeaderWrapper>
  );
}

export default Header;
