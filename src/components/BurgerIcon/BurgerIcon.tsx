import React from 'react';

import './BurgerIcon.scss';

export function BurgerIcon() {
    return (
        <span className="burger">
            <span className="burger__bar"></span>
            <span className="burger__bar"></span>
            <span className="burger__bar"></span>
        </span>
    );
}