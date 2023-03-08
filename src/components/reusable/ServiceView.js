import 'tw-elements';
import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';
import { useWidth } from '../../hooks';

const ServiceView = ({ angle, data }) => {
    const { t } = useTranslation();
    const windowWidth = useWidth();
    const targetRef = useRef();
    const radius = windowWidth > 768 ? 500 : windowWidth * 0.7;
    const itemSize = windowWidth > 768 ? 72 : windowWidth > 500 ? 60 : 40;

    return (
        <div className="p-12">
            <div
                className="relative border-dashed border-2 border-gray-300 rounded-full"
                ref={targetRef}
                style={{ width: radius, height: radius }}
            >
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute right-[50%] bottom-[50%] transition-slow`}
                        style={{
                            paddingBottom: radius,
                            transform: `rotateZ(${angle + index * 45}deg)`,
                            right: `calc(50% - ${itemSize / 2}px)`,
                            width: `${itemSize}px`,
                            bottom: `calc(50% - ${radius / 2}px - ${itemSize / 2}px)`,
                        }}
                    >
                        <div
                            className={`transition-slow flex items-center justify-center rounded-full bg-gray-500 relative`}
                            style={{
                                width: itemSize,
                                height: itemSize,
                                transform: `rotateZ(-${angle + index * 45}deg)`,
                            }}
                        >
                            <img src={item.logo} alt="company logo" className="" />
                            <div className="absolute top-12 mobile:top-16 md:top-[80px!important] flex justify-center">
                                <p className="text-[12px] sm:text-sm md:text-md text-center font-bold w-max max-w-[140px]">
                                    {t(item.description)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <h2
                    className="text-2xl md:text-4xl text-gray-300 font-extrabold absolute text-center whitespace-pre"
                    style={{
                        left: windowWidth > 768 ? 'calc(50% - 50px)' : 'calc(50% - 30px)',
                        top: 'calc(50% - 30px)',
                    }}
                >
                    {t('solution.headers.services.we.are.here')}
                </h2>
            </div>
        </div>
    );
};

export default ServiceView;
