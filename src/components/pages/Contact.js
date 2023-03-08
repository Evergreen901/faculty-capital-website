import React from 'react';
import { BannerParallax } from '../reusable';
import { Widget } from 'react-typeform-embed';

const Contact = () => {
    return (
        <div className="relative -mt-24 -mx-6 md:-mx-4 px-4">
            <div className="max-w-[1220px] mx-auto relative">
                <div className="absolute left-0 w-[120%] h-full overflow-x-clip pointer-events-none">
                    <BannerParallax type="contact" />
                </div>
                <Widget
                    id="CuRjKP5P"
                    style={{
                        width: '100%',
                        height: 'calc(100vh - 200px)',
                        maxHeight: '700px',
                    }}
                    opacity={0}
                />
            </div>
        </div>
    );
};

export default Contact;
