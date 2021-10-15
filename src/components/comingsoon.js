import * as React from 'react'
import {
    App,
    container,
    headerStyle,
}
from "./comingsoon.module.css"
const Coming = ({  children }) => {
    return (
        <div className={App}>
            <div className={container}>
                <h1 className={headerStyle}>
                    Frontend Coming Soon
                </h1>
                <br />
                <br />
                {children}
            </div>
        </div>
    )
}

export default Coming