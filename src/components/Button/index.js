import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function Button({ children, onClick, width}){
    return (
        <button className="button" onClick={onclick} style={{width}}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onclick: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
}

export default Button;