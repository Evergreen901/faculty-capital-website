import React from 'react';

const DiscordIcon = ({ width = 24, height = 24, fill = '', ...rest }) => {
    return (
        <svg
            width={width}
            height={height}
            id="Group_5699"
            data-name="Group 5699"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 46.904"
        >
            <defs>
                <linearGradient id="linear-gradient" x1="1" x2="0.118" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#29c2e2" />
                    <stop offset="1" stopColor="blue" />
                </linearGradient>
                <clipPath id="clip-path">
                    {fill ? (
                        <rect
                            id="Rectangle_1071"
                            data-name="Rectangle 1071"
                            width={width}
                            height={height}
                            transform="translate(0 0)"
                            fill="#c6c6c6"
                        />
                    ) : (
                        <rect
                            id="Rectangle_1034"
                            data-name="Rectangle 1034"
                            width={width}
                            height={height}
                            fill="url(#linear-gradient)"
                        />
                    )}
                </clipPath>
            </defs>
            <g id="Group_5872" data-name="Group 5872" transform="translate(-356 -5204.97)">
                <g id="Group_5873" data-name="Group 5873" transform="translate(356 5204.97)">
                    <g id="Group_5872-2" data-name="Group 5872">
                        <path
                            id="Path_1090"
                            data-name="Path 1090"
                            d="M174.071,159.732h-9.7c0-.229,0-.45,0-.672,0-5.211.034-10.422-.033-15.632a17.607,17.607,0,0,0-.573-4.16,3.784,3.784,0,0,0-3.628-2.981,9.157,9.157,0,0,0-2.856.21c-2.207.563-3.168,2.278-3.524,4.356a22.351,22.351,0,0,0-.275,3.627c-.03,4.844-.012,9.688-.012,14.532v.716h-9.69V128.453h9.26v4.234c.132-.067.194-.077.215-.113a10.2,10.2,0,0,1,9.016-4.933,13.062,13.062,0,0,1,6.349,1.251,9.187,9.187,0,0,1,4.659,6.11,23,23,0,0,1,.8,6.18c.037,6.041.021,12.081.023,18.122,0,.131-.018.262-.03.426"
                            transform="translate(-127.102 -112.83)"
                            fill={fill ? fill : 'url(#linear-gradient)'}
                        />
                        <rect
                            id="Rectangle_1072"
                            data-name="Rectangle 1072"
                            width="9.66"
                            height="31.288"
                            transform="translate(0.819 15.617)"
                            fill={fill ? fill : 'url(#linear-gradient)'}
                        />
                        <path
                            id="Path_1091"
                            data-name="Path 1091"
                            d="M11.285,5.776A5.644,5.644,0,1,1,5.8.006a5.657,5.657,0,0,1,5.486,5.77"
                            transform="translate(0 0)"
                            fill={fill ? fill : 'url(#linear-gradient)'}
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default DiscordIcon;
