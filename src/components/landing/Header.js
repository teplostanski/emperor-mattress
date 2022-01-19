import React from 'react';
import { TranslationContext } from '../../contexts/translation/TranslationContext';
import './Header.css';

function Header() {
  const translation = React.useContext(TranslationContext);

  return (
    <h1 className="header-title">{translation.title}</h1>
  );
}

export default Header;
