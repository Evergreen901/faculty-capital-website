import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef, useState } from 'react';
import Sticky1 from '../../assets/png/sticky1.png';
import Sticky2 from '../../assets/png/sticky2.png';
import { Link } from 'react-router-dom';

const GetInTouchSection = () => {
    const ref = useRef();
    const { t } = useTranslation();
    const [scrollPos, setScrollPos] = useState();

    window.addEventListener('scroll', (e) => {
        setScrollPos(window.scrollY);
    });

    const calcValue = (minValue, maxValue) => {
        if (scrollPos < 2000) return minValue;
        return minValue + parseInt(((maxValue - minValue) * (scrollPos - 2000)) / 600);
    };

    useEffect(() => {
        if (ref.current) ref.current.innerHTML = t('home.investment.description');

        // eslint-disable-next-line
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 relative pt-20 my-20">
            <div className="absolute bg-gradient-to-r from-black-100 to-gray-500 w-[110%] h-[60%] md:h-full top-0 right-0 rounded-lg" />
            <div
                className="absolute w-[200px] -right-[100px] -top-[100px] md:-right-[200px] md:-top-[100px] md:w-[350px] rotate-[120deg] transition"
                style={{
                    transform: `translate(${calcValue(0, -50)}px, ${calcValue(0, 0)}px) rotate(120deg)`,
                }}
            >
                <img src={Sticky2} alt="sticky background" />
            </div>
            <div className="relative pr-4 md:pr-20">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white w-fit -tracking-[1.1px] leading-[40px] lg:leading-[50px]">
                    {t('home.financial.title')}
                </h2>
                <p className="text-lg text-white mt-10">{t('home.financial.description')}</p>
            </div>
            <div className="relative pt-20 mt-8 md:mt-0">
                <div className="absolute bg-gradient-to-r from-blue-500 to-cyan-500 w-[100vw] md:w-[140%] h-[120%] top-0 left-0 rounded-lg" />
                <div
                    className="absolute w-[200px] -left-[50px] -bottom-[100px] md:-left-[200px] md:-bottom-[150px] lg:-left-[400px] lg:-bottom-[250px] lg:w-[320px] transition"
                    style={{
                        transform: `translate(${calcValue(0, 20)}px, ${calcValue(0, 0)}px) rotate(-10deg)`,
                    }}
                >
                    <img src={Sticky1} alt="sticky background" />
                </div>
                <div className="relative px-8 md:pr-0 md:pl-20 flex flex-col items-end max-w-[500px] ml-auto md:block md:ml-0">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white w-full -tracking-[1.1px] leading-[40px] lg:leading-[50px]">
                        {t('home.investment.title')}
                    </h2>
                    <p className="text-lg text-white my-10 mail-link" ref={ref}></p>
                    <Link to="/contact" className="bg-gray py-3 px-6 rounded-sm transition hover:opacity-80 font-bold">
                        {t('button.get-in-touch')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GetInTouchSection;
