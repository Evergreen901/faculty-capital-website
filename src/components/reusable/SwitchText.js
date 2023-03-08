import 'tw-elements';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

const SwitchText = ({ textData, className }) => {
    const [selected, setSelection] = useState(0);
    const { t } = useTranslation();

    return (
        <>
            <div className={`max-w-[1220px] mx-auto justify-center items-center ${className} hidden md:flex`}>
                <div className="flex flex-col">
                    {textData.map((item, index) => (
                        <h2
                            className={`text-4xl font-extrabold text-gray-300 whitespace-nowrap ${
                                index === selected ? 'gradient-text' : ''
                            } w-fit max-w-[320px] mb-8 last-of-type:mb-0 cursor-pointer -tracking-[1.1px] hover:opacity-70 transition`}
                            key={index}
                            onClick={() => {
                                setSelection(index);
                            }}
                        >
                            {t(item.title)}
                        </h2>
                    ))}
                </div>
                <div className="ml-20 max-w-[700px]">
                    <p className="leading-7 whitespace-pre-line">{t(textData[selected].description)}</p>
                </div>
            </div>
            <div className="carousel slide carousel-dark relative mt-20 mb-20 md:hidden" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 -bottom-12 left-0 flex justify-center p-0">
                    {textData.map((text, index) => (
                        <button
                            key={index}
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to={index}
                            className={selected === index ? 'active' : ''}
                            aria-current={selected === index ? 'true' : ''}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setSelection(index)}
                        />
                    ))}
                </div>

                <div className="carousel relative w-full overflow-hidden">
                    {textData.map((item, index) => (
                        <div
                            key={index}
                            className={`transition carousel-item ${
                                selected === index ? 'active' : ''
                            } relative float-left w-full`}
                        >
                            <h2
                                className={`text-xl sm:text-3xl text-center font-extrabold text-gray-300 ${
                                    index === selected ? 'gradient-text' : ''
                                } cursor-pointer -tracking-[1.1px]`}
                                key={index}
                                onClick={() => {
                                    setSelection(index);
                                }}
                            >
                                {t(item.title)}
                            </h2>
                            <p className="text-sm sm:text-lg leading-7 whitespace-pre-line mt-4">
                                {t(item.description)}
                            </p>
                        </div>
                    ))}
                </div>
                {/* <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                    onClick={() => setSelection((prev) => (prev + 2) % 3)}
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                    onClick={() => setSelection((prev) => (prev + 1) % 3)}
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </>
    );
};

export default SwitchText;
