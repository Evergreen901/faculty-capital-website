import React from 'react';

const LogoWhite = ({ width = 45, height = 45, fill = '', ...rest }) => {
    return (
        <svg
            width={width}
            height={height}
            {...rest}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45.308 45.308"
        >
            <g id="Group_5857" data-name="Group 5857" transform="translate(-432.846 -5707.846)">
                <g id="Group_5856" data-name="Group 5856" transform="translate(432.846 5707.846)">
                    <path
                        id="Path_989"
                        data-name="Path 989"
                        d="M0,0V45.308H45.308V23.019H34.266v11.04H11.249V11.042h11.04V0Z"
                        transform="translate(0 0)"
                        fill="#fff"
                    />
                    <path
                        id="Path_990"
                        data-name="Path 990"
                        d="M18.761,0,36.22,17.459V0Z"
                        transform="translate(8.535 0)"
                        fill="#fff"
                    />
                </g>
            </g>
        </svg>
    );
};

export default LogoWhite;
