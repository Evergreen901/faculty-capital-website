import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    PrimaryButton,
    SecondaryButton,
    SwitchText,
    Hero,
    BannerParallax,
    ProjectCard,
    CustomSlider,
    TestimonialCard,
    NavButtonGroup,
    BlogCard,
    CompanyView,
    GetInTouchSection,
} from '../reusable';
// import IconRocket from '../../assets/svg/icon-rocket.svg';
// import IconChart from '../../assets/svg/icon-chart.svg';
// import IconEngagement from '../../assets/svg/icon-engagement.svg';
import BrucePonAvatar from '../../assets/png/BrucePonAvatar.png';
import WalterKokAvatar from '../../assets/png/WalterKokAvatar.png';
import RachidAjajaAvatar from '../../assets/png/RachidAjajaAvatar.png';
import GlobalContext from '../../context/global/GlobalContext';
import { Loading180Ring } from '../../assets/loading';
import FCLogo from '../../assets/logo/fc/main.svg';
import FCGray from '../../assets/logo/fc/bg-gray.svg';
import FCMain from '../../assets/logo/fc/bg-main.svg';
import X8CLogo from '../../assets/logo/x8c/main.svg';
import X8CGray from '../../assets/logo/x8c/bg-gray.svg';
import X8CMain from '../../assets/logo/x8c/bg-main.svg';
import ArtisLogo from '../../assets/logo/artis/main.svg';
import ArtisGray from '../../assets/logo/artis/bg-gray.svg';
import ArtisMain from '../../assets/logo/artis/bg-main.svg';
import FLLogo from '../../assets/logo/fl/main.svg';
import FLGray from '../../assets/logo/fl/bg-gray.svg';
import FLMain from '../../assets/logo/fl/bg-main.svg';
import { t } from 'i18next';

// const overviewData = [
//     {
//         icon: IconRocket,
//         value: '40+',
//         description: 'home.kpi.advisory',
//     },
//     {
//         icon: IconChart,
//         value: '120+',
//         description: 'home.kpi.investments',
//     },
//     {
//         icon: IconEngagement,
//         value: '24x',
//         description: 'home.kpi.roi',
//     },
// ];

const secondData = [
    {
        title: 'home.header1.title',
        description: 'home.header1.description',
    },
    {
        title: 'home.header2.title',
        description: 'home.header2.description',
    },
    {
        title: 'home.header3.title',
        description: 'home.header3.description',
    },
];

const companyData = [
    {
        title: 'home.companies.title.faculty-capital',
        logo: FCLogo,
        grayLogo: FCGray,
        mainLogo: FCMain,
        description: 'home.companies.faculty-capital',
    },
    {
        title: 'home.companies.title.x8c',
        logo: X8CLogo,
        grayLogo: X8CGray,
        mainLogo: X8CMain,
        description: 'home.companies.x8c',
    },
    {
        title: 'home.companies.title.artis',
        logo: ArtisLogo,
        grayLogo: ArtisGray,
        mainLogo: ArtisMain,
        description: 'home.companies.artis',
    },
    {
        title: 'home.companies.title.faculty-labs',
        logo: FLLogo,
        grayLogo: FLGray,
        mainLogo: FLMain,
        description: 'home.companies.faculty-labs',
    },
    {
        title: 'home.companies.title.faculty-capital',
        logo: FCLogo,
        grayLogo: FCGray,
        mainLogo: FCMain,
        description: 'home.companies.faculty-capital',
    },
    {
        title: 'home.companies.title.x8c',
        logo: X8CLogo,
        grayLogo: X8CGray,
        mainLogo: X8CMain,
        description: 'home.companies.x8c',
    },
    {
        title: 'home.companies.title.artis',
        logo: ArtisLogo,
        grayLogo: ArtisGray,
        mainLogo: ArtisMain,
        description: 'home.companies.artis',
    },
    {
        title: 'home.companies.title.faculty-labs',
        logo: FLLogo,
        grayLogo: FLGray,
        mainLogo: FLMain,
        description: 'home.companies.faculty-labs',
    },
    {
        title: 'home.companies.title.faculty-capital',
        logo: FCLogo,
        grayLogo: FCGray,
        mainLogo: FCMain,
        description: 'home.companies.faculty-capital',
    },
    {
        title: 'home.companies.title.x8c',
        logo: X8CLogo,
        grayLogo: X8CGray,
        mainLogo: X8CMain,
        description: 'home.companies.x8c',
    },
    {
        title: 'home.companies.title.artis',
        logo: ArtisLogo,
        grayLogo: ArtisGray,
        mainLogo: ArtisMain,
        description: 'home.companies.artis',
    },
    {
        title: 'home.companies.title.faculty-labs',
        logo: FLLogo,
        grayLogo: FLGray,
        mainLogo: FLMain,
        description: 'home.companies.faculty-labs',
    },
];

const testimonialData = [
    {
        avatar: WalterKokAvatar,
        name: t('home.testimonial1.name'),
        position: t('home.testimonial1.position'),
        text: t('home.testimonial1.description'),
    },
    {
        avatar: RachidAjajaAvatar,
        name: t('home.testimonial2.name'),
        position: t('home.testimonial2.position'),
        text: t('home.testimonial2.description'),
    },
    {
        avatar: BrucePonAvatar,
        name: t('home.testimonial3.name'),
        position: t('home.testimonial3.position'),
        text: t('home.testimonial3.description'),
    },
];

const Home = () => {
    const { insightsBlogs, blogLoaded, featuredProject, projectLoaded } = useContext(GlobalContext);
    const [selectedCompany, setSelectedCompany] = useState(0);
    const projectSliderRef = useRef();
    const testimonialRef = useRef();
    const insightsRef = useRef();
    const testimonialTitleRef = useRef();
    const navigate = useNavigate();
    const { t } = useTranslation();

    if (testimonialTitleRef.current) testimonialTitleRef.current.innerHTML = t('home.header2.testimonials.title');

    const goDetail = (index) => {
        navigate(`/blog/details/${index}`);
    };

    const goPortfolio = () => {
        navigate('/portfolio');
    };

    const goStory = () => {
        navigate('/story');
    };

    const sideScroll = (element, direction, speed, distance, step) => {
        let scrollAmount = 0;

        var slideTimer = setInterval(function () {
            if (direction === 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    };

    const onNext = () => {
        sideScroll(testimonialRef.current, 'right', 1, 350, 5);
    };

    const onPrev = () => {
        sideScroll(testimonialRef.current, 'left', 1, 350, 5);
    };

    return (
        <div className="w-full min-h-screen relative pt-[20vw] md:pt-24 xl:pt-0">
            <div className="max-w-[1220px] mx-auto relative z-20">
                <div className="absolute left-0 w-[120%] h-full overflow-x-clip">
                    <BannerParallax />
                </div>
                <div className="relative z-30">
                    {/* first section */}
                    <Hero caption={t('home.hero.caption')} description={t('home.hero.description')} />
                    <PrimaryButton text={t('button.find-more')} className="mt-12" clickHandler={goStory} />
                    {/* <div className="grid grid-cols-1 grid-rows-3 gap-y-4 pl-[10vw] mobile:pl-[20vw] sm:!pl-[30vw] md:!pl-0 md:justify-items-center md:grid-cols-3 pt-[80px] pb-[0px] md:pt-[150px] xl:pt-[280px]">
                        {overviewData.map((item, index) => (
                            <div className="relative flex items-start pl-5" key={index}>
                                <img src={item.icon} alt={t(item.description)} />
                                <div className="ml-4 pt-2">
                                    <span className="block text-md md:text-xl font-extrabold">{item.value}</span>
                                    <span className="block mt-1 text-[12px] md:text-lg">{t(item.description)}</span>
                                </div>
                                <div className="absolute w-[2px] h-6 bg-gradient-to-b to-cyan-500 from-blue-700 left-0 top-2 rounded-sm" />
                            </div>
                        ))}
                    </div> */}

                    {/* second section */}
                    <SwitchText textData={secondData} className="relative z-10 py-10 mt-32" />

                    {/* third section */}
                    <h2
                        className={`text-xl text-center md:text-2xl w-fit pt-24 pb-2 mx-auto font-extrabold text-gray-300 gradient-text -tracking-[1.1px]`}
                    >
                        {t('home.headers.projects')}
                    </h2>
                    {!projectLoaded ? (
                        <div className="w-full h-60 flex items-center justify-center">
                            <Loading180Ring width={48} height={48} />
                        </div>
                    ) : (
                        <CustomSlider className={'px-4 md:px-8 md:-mx-12'} sliderRef={projectSliderRef}>
                            {featuredProject.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    icon1={project.acf.logobw}
                                    icon2={
                                        project._embedded &&
                                        project._embedded['wp:featuredmedia'] &&
                                        project._embedded['wp:featuredmedia'][0].source_url
                                    }
                                    title={project.title.rendered}
                                    description={project.content.rendered}
                                    detail
                                    website={project.acf.website}
                                />
                            ))}
                        </CustomSlider>
                    )}
                    <div className="w-full flex justify-center">
                        <SecondaryButton
                            text={t('button.view-our-portfolio')}
                            className="mx-auto"
                            clickHandler={goPortfolio}
                        />
                    </div>

                    {/* fourth section - testimonials*/}
                    <div className="grid grid-cols-1 md:grid-cols-10 pt-24 gap-4">
                        <div className="md:col-span-5 pr-4 lg:pr-24">
                            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-500 w-fit -tracking-[1.1px] leading-[36px] md:leading-[50px]">
                                {t('home.header1.testimonials.title')}
                            </h1>
                            <span
                                className="text-2xl md:text-4xl font-extrabold text-gray-300 w-fit -tracking-[1.1px] leading-[36px] md:leading-[50px]"
                                ref={testimonialTitleRef}
                            />
                            <p className="text-sm md:text-lg mt-9">{t('home.headers.testimonials.description')}</p>
                            <NavButtonGroup className="hidden md:grid mt-32 lg:mt-40" onNext={onNext} onPrev={onPrev} />
                        </div>
                        <div className="md:col-span-5">
                            <CustomSlider className="px-4" sliderRef={testimonialRef}>
                                {testimonialData.map((item, index) => (
                                    <TestimonialCard
                                        key={index}
                                        avatar={item.avatar}
                                        name={item.name}
                                        position={item.position}
                                        text={item.text}
                                        readMore
                                    />
                                ))}
                            </CustomSlider>
                        </div>
                    </div>

                    {/* fifth section */}
                    <GetInTouchSection />

                    {/* sixth section - insights */}
                    <div className="pt-40">
                        <h2
                            className={`text-xl text-center md:text-2xl w-fit pt-24 pb-2 mx-auto font-extrabold text-gray-300 gradient-text -tracking-[1.1px]`}
                        >
                            {t('home.headers.insights')}
                        </h2>
                        {!blogLoaded ? (
                            <div className="w-full h-60 flex items-center justify-center">
                                <Loading180Ring width={48} height={48} />
                            </div>
                        ) : (
                            <CustomSlider sliderRef={insightsRef} noMask className="md:justify-center">
                                {insightsBlogs?.length !== 0 &&
                                    insightsBlogs.map((item, index) => (
                                        <BlogCard
                                            key={index}
                                            imgUrl={item.jetpack_featured_media_url}
                                            type={item.tags}
                                            caption={item.title.rendered}
                                            description={item.content.rendered}
                                            clickHandler={() => goDetail(item.blogIndex)}
                                        />
                                    ))}
                            </CustomSlider>
                        )}
                    </div>

                    {/* seventh section - scrollable company wheel */}
                    <div className="pt-40 flex flex-col items-end lg:flex-row lg:items-start">
                        <div className="pr-10 grow shrink basis-0">
                            <h2 className="text-2xl text-center md:text-left md:text-4xl font-extrabold text-gray-500 -tracking-[1.1px] opacity-20">
                                {t('home.headers.companies')}
                            </h2>
                            <p className="text-sm md:text-lg md:font-semibold mt-8">{t('home.companies.subtitle')}</p>
                            <div className="hidden lg:block">
                                <div className="flex items-center mt-16 ">
                                    {/* <img
                                        className="w-[32px] h-[32px]"
                                        src={companyData[selectedCompany].logo}
                                        alt="company logo"
                                    /> */}
                                    <h4 className="font-bold text-2xl">{t(companyData[selectedCompany].title)}</h4>
                                </div>
                                <p className="mt-12">{t(companyData[selectedCompany].description)}</p>
                            </div>
                        </div>
                        <CompanyView selected={selectedCompany} setSelected={setSelectedCompany} data={companyData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
