import React from 'react';
import "./styles.css";

//É possível criar Components dentro do React com apenas funções, como a sintaxe abaixo
//A sintaxe de classe é mais utilizada quando trabalharmos com conceitos de estado

const Header = () => {
    return (
        <header id="main-header">JSHunt</header>
    );
}

export default Header;