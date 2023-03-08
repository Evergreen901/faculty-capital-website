import React from 'react';

const MenuIcon = ({ width = 24, height = 24, fill = 'white', ...rest }) => {
    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000"
            fill={fill}
        >
            <g>
                <g>
                    <g>
                        <circle cx="121.4" cy="856.4" r="111.4" />
                        <circle cx="500" cy="500" r="111.4" />
                        <circle cx="500" cy="143.6" r="111.4" />
                        <circle cx="121.4" cy="143.6" r="111.4" />
                        <circle cx="121.4" cy="500" r="111.4" />
                        <circle cx="500" cy="856.4" r="111.4" />
                        <circle cx="878.6" cy="856.4" r="111.4" />
                        <circle cx="878.6" cy="143.6" r="111.4" />
                        <circle cx="878.6" cy="500" r="111.4" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default MenuIcon;
