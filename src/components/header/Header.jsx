import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Тестовые торги на аппарат ЛОТОС № XX_XX_XX</h1>
      <hr />
      <h3 className="header__subtitle">Уважаемые участники, во время вашего хода вы можете изменить параметры, указанные в таблице: </h3>
    </div>

  );
}

export default Header;
