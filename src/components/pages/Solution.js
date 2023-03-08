import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Hero, BannerParallax, SwitchText, ServiceView, NavButtonGroup, GetInTouchSection } from '../reusable';
import Sticky1 from '../../assets/png/sticky1.png';
import Sticky3 from '../../assets/png/sticky3.png';
import Sticky4 from '../../assets/png/sticky4.png';
import FCLogo from '../../assets/logo/fc/main.svg';
import FGWhite from '../../assets/logo/fg/white-circle.svg';
import FLWhite from '../../assets/logo/fl/white-circle.svg';
import ArtisWhite from '../../assets/logo/artis/white-circle.svg';
import X8CWhite from '../../assets/logo/x8c/white-circle.svg';
import OtarisWhite from '../../assets/logo/otaris/white-circle.svg';
import X8CLogo from '../../assets/logo/x8c/main.svg';
import FLLogo from '../../assets/logo/fl/main.svg';
import ArtisLogo from '../../assets/logo/artis/main.svg';
import MockImg from '../../assets/png/mock-background.png';

const secondData = [
    {
        title: 'solution.header1.title',
        description: 'solution.header1.description',
    },
    {
        title: 'solution.header2.title',
        description: 'solution.header2.description',
    },
];

const serviceData = [
    {
        logo: X8CWhite,
        description: 'solution.service.marcomms',
    },
    {
        logo: ArtisWhite,
        description: 'solution.service.market',
    },
    {
        logo: FGWhite,
        description: 'solution.service.capital',
    },
    {
        logo: FLWhite,
        description: 'solution.service.incubation',
    },
    {
        logo: FGWhite,
        description: 'solution.service.network',
    },
    {
        logo: OtarisWhite,
        description: 'solution.service.launch',
    },
    {
        logo: FGWhite,
        description: 'solution.service.tokenomics',
    },
    {
        logo: FGWhite,
        description: 'solution.service.advisory',
    },
];

const companyData = [
    {
        logo: FCLogo,
        title: 'home.companies.title.faculty-capital',
        description: 'home.companies.faculty-capital',
    },
    {
        logo: X8CLogo,
        title: 'home.companies.title.x8c',
        description: 'home.companies.x8c',
    },
    {
        logo: ArtisLogo,
        title: 'home.companies.title.artis',
        description: 'home.companies.artis',
    },
    {
        logo: FLLogo,
        title: 'home.companies.title.faculty-labs',
        description: 'home.companies.faculty-labs',
    },
];

const Solution = () => {
    const { t } = useTranslation();
    const [scrollPos, setScrollPos] = useState();
    const [positions, setPositions] = useState([]);
    const [selected, setSelected] = useState(0);

    window.addEventListener('scroll', (e) => {
        setScrollPos(window.scrollY);
    });

    const calcValue = (minValue, maxValue) => {
        return minValue + parseInt(((maxValue - minValue) * scrollPos) / 600);
    };

    useEffect(() => {
        let temp = [];
        for (let i = 0; i < 32; i++) {
            temp.push(Math.random() * 80);
        }

        setPositions(temp);
    }, []);

    return (
        <div className="h-full relative pt-[20vw] md:pt-24 xl:pt-0">
            <div className="solution-container after:hidden before:hidden md:after:block md:before:block z-30">
                <div className="absolute left-0 w-[120%] h-full overflow-x-clip">
                    <BannerParallax type="solution" />
                </div>
                {/* first section */}
                <Hero caption={t('solution.title')} description={t('solution.description')} />

                {/* second section */}
                <SwitchText textData={secondData} className="relative z-10 py-40 w-[70vw]" />

                {/* third section - scroll animation */}
                <div className="lg:-mx-24 h-[640px] ">
                    <div className="relative h-full">
                        <div className="blur-lg opacity-30">
                            {new Array(16).fill(0).map((item, index) => (
                                <p
                                    key={index}
                                    className="gradient-text text-2xl font-extrabold w-fit absolute"
                                    style={{
                                        top: `${index * 40}px`,
                                        left: `calc(${positions[index + 16]}%)`,
                                    }}
                                >
                                    {t(`solution.section.focus.text${index + 1}`)}
                                </p>
                            ))}
                        </div>
                        <div className="blur-[3px] opacity-30">
                            {new Array(16).fill(0).map((item, index) => {
                                return (
                                    <p
                                        key={index}
                                        className="gradient-text text-3xl font-extrabold w-fit absolute transition"
                                        style={{
                                            left: index > 7 ? 'none' : `calc(${parseInt(positions[index])}%)`,
                                            top: `${index * 40}px`,
                                            right: index < 8 ? 'none' : `calc(${parseInt(positions[index])}%)`,
                                            transform: `translate(0px, ${calcValue(0, -40)}px)`,
                                        }}
                                    >
                                        {t(`solution.section.focus.text${index + 1}`)}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="flex justify-center items-center flex-col h-full">
                            <h2 className="text-2xl md:text-4xl text-center gradient-text w-fit font-extrabold whitespace-pre mt-4">
                                {t('solution.section.focus.title')}
                            </h2>
                        </div>
                        <p className="absolute text-2xl md:text-4xl w-fit gradient-text font-extrabold left-0 md:left-[100px] top-[100px] lg:left-[200px] lg:top-[200px]">
                            {t('solution.section.focus.item1')}
                        </p>
                        <p className="absolute text-2xl md:text-4xl w-fit gradient-text font-extrabold right-0 md:right-[100px] top-[150px] lg:right-[300px] lg:top-[150px]">
                            {t('solution.section.focus.item2')}
                        </p>
                        <p className="absolute text-2xl md:text-4xl w-fit gradient-text font-extrabold left-0 md:left-[150px] bottom-[200px] lg:left-[300px] lg:bottom-[200px]">
                            {t('solution.section.focus.item3')}
                        </p>
                        <p className="absolute text-2xl md:text-4xl w-fit gradient-text font-extrabold right-0 md:right-[50px] bottom-[150px] lg:right-[300px] lg:bottom-[150px]">
                            {t('solution.section.focus.item4')}
                        </p>
                        <div className="absolute hidden lg:block w-[200px] left-[430px] top-[90px] rotate-[30deg]">
                            <img src={Sticky4} alt="sticky background" />
                        </div>
                        <div className="absolute hidden lg:block w-[180px] right-[330px] top-[150px] rotate-[70deg]">
                            <img src={Sticky4} alt="sticky background" />
                        </div>
                        <div className="absolute hidden lg:block w-[130px] right-[600px] bottom-[50px] rotate-[30deg]">
                            <img src={Sticky4} alt="sticky background" />
                        </div>
                        <div
                            className="absolute hidden lg:block w-[180px] left-[100px] bottom-[50px] transition"
                            style={{
                                transform: `translate(${calcValue(0, -60)}px, ${calcValue(0, -30)}px)`,
                            }}
                        >
                            <img src={Sticky1} alt="sticky background" />
                        </div>
                        <div
                            className="absolute hidden lg:block w-[180px] rotate-[180deg] right-[170px] bottom-[200px] transition "
                            style={{
                                transform: `translate(${calcValue(0, 60)}px, ${calcValue(0, -30)}px)`,
                            }}
                        >
                            <img src={Sticky3} alt="sticky background" />
                        </div>
                    </div>
                </div>

                {/* fourth section - services */}
                <div className="py-40 flex flex-col items-center lg:flex-row lg:items-start justify-around">
                    <div className="pb-20 lg:pb-0 lg:pt-20">
                        <h2 className="text-2xl text-center md:text-left md:text-4xl font-extrabold text-gray-500 w-fit md:leading-[50px!important]">
                            {t('solution.headers.services.first')}
                        </h2>
                        <h2 className="md:leading-[50px!important] text-2xl md:text-left md:text-4xl font-extrabold text-gray-300 w-fit whitespace-pre">
                            {t('solution.headers.services.second')}
                        </h2>
                        <p className="text-sm md:text-lg mt-4 md:mt-10 lg:max-w-[350px]">
                            {t('solution.headers.services.description')}
                        </p>
                    </div>
                    <ServiceView angle={scrollPos / 10} data={serviceData} />
                </div>
            </div>

            {/* fifth section */}
            <div
                id="#carousel"
                className="-mx-8 md:-mx-4 bg-gradient-to-b from-white to-gray carousel carousel-dark relative"
                data-bs-ride="carousel"
            >
                <div className="solution-container">
                    <div className="carousel-inner relative w-full">
                        {companyData.map((item, index) => (
                            <div
                                key={index}
                                className={`relative carousel-item float-left w-full ${
                                    selected === index ? 'active' : ''
                                }`}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-24 md:py-24 content-between">
                                    <div className="px-10 lg:px-20 py-10">
                                        <div className="flex items-center md:mt-16 ">
                                            {/* <img className="w-[32px] h-[32px]" src={item.logo} alt="company logo" /> */}
                                            <h4 className="font-bold text-2xl">{t(item.title)}</h4>
                                        </div>
                                        <p className="mt-8">{t(item.description)}</p>
                                        <div className="carousel-indicators flex justify-center p-0 mb-4 md:hidden mt-10 relative z-50">
                                            {companyData.map((item, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    data-bs-target="#carousel"
                                                    data-bs-slide-to={index}
                                                    className={selected === index ? 'active' : ''}
                                                    aria-current="true"
                                                    aria-label={`Slide ${index + 1}`}
                                                    onClick={() => setSelected(index)}
                                                ></button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-full flex items-center overflow-hidden justify-center rounded-l-[10px] relative">
                                        <img
                                            src={MockImg}
                                            className="block h-full w-auto max-w-none max-h-[500px]"
                                            alt="testimonial"
                                        />
                                        <div className="absolute h-full w-full flex flex-col items-center pb-10">
                                            <p className="text-[100px] gradient-text-reverse w-fit font-extrabold font-palanquin rotate-180">
                                                "
                                            </p>
                                            <p className="text-xl text-white italic max-w-[360px] text-center leading-8 font-light">
                                                {t('solution.testimonial')}
                                            </p>
                                            <p className="text-white mt-auto">{t('solution.testimonial.name')}</p>
                                            <p className="font-bold text-white">{t('solution.testimonial.position')}</p>
                                        </div>
                                    </div>
                                </div>
                                <NavButtonGroup
                                    className="absolute left-[40px] lg:left-[70px] bottom-24 hidden md:grid"
                                    onNext={() => setSelected((prev) => (prev + 1) % companyData.length)}
                                    onPrev={() => setSelected((prev) => (prev + 2) % companyData.length)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="solution-container">
                {/* sixth section */}
                <GetInTouchSection />
            </div>
        </div>
    );
};

export default Solution;
