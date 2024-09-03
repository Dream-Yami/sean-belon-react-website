import React from "react";
import "../css/Button.css"

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({children, type, onclick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <a href="/" className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
            onclick={onclick}
            type={type}>
                {children}
            </button>
        </a>
    )
}