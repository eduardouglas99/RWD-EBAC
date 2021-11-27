import React, { useContext } from 'react';
import './style.scss';
import logoAcessaBr from '../../images/logo-AcessaBR.svg'
import logoEbac from '../../images/logo-ebac.png'
import { LocationContext } from '../../contexts/LocationContext';

const Header = () => {
    const {city, state} = useContext(LocationContext)
    return(
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBr} alt="Logo AcessaBr"/>
                <span className="header__city"> 
                    <p>/</p>
                    {city} - {state}
                </span>
            </div>
            <div className="header__logo header__logo--ebac">
                <span className="header__span">Apoio:</span>
                <img src={logoEbac} alt="Logo Ebac"></img>
            </div>
        </header>
    )
};

export default Header;