import React, { useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Hero,
    BannerParallax,
    SwitchText,
    CustomSlider,
    TestimonialCard,
    NavButtonGroup,
    ImageSlider,
} from '../reusable';
import GlobalContext from '../../context/global/GlobalContext';
import { Loading180Ring } from '../../assets/loading';
import SliderImg from '../../assets/png/mock-background.png';
import { t } from 'i18next';

const secondData = [
    {
        title: 'story.header1.title',
        description: 'story.header1.description',
    },
    {
        title: 'story.header2.title',
        description: 'story.header2.description',
    },
    {
        title: 'story.header3.title',
        description: 'story.header3.description',
    },
];

const sliderData = [
    {
        image: SliderImg,
        title: t('story.slider1.title'),
        description: t('story.slider1.description'),
    },
    {
        image: SliderImg,
        title: t('story.slider2.title'),
        description: t('story.slider2.description'),
    },
    {
        image: SliderImg,
        title: t('story.slider3.title'),
        description: t('story.slider3.description'),
    },
];

const Story = () => {
    const { teamData, teamLoaded } = useContext(GlobalContext);
    const testimonialRef = useRef();
    const { t } = useTranslation();

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
        sideScroll(testimonialRef.current, 'right', 0.5, 350, 5);
    };

    const onPrev = () => {
        sideScroll(testimonialRef.current, 'left', 0.5, 350, 5);
    };

    return (
        <div className="h-full relative pt-[20vw] md:pt-24 xl:pt-0">
            <div className="max-w-[1220px] mx-auto relative z-20">
                <div className="absolute left-0 w-[120%] h-full overflow-x-clip">
                    <BannerParallax type="story" />
                </div>
                <div className="relative z-30">
                    {/* first section */}
                    <Hero caption={t('story.title')} description={t('story.description')} />

                    {/* second section */}
                    <SwitchText textData={secondData} className="relative z-10 py-40 px-10" />

                    {/* third section */}
                    <ImageSlider className="h-[500px] md:h-[600px]" sliderData={sliderData} isStory />
                    <div className="flex flex-col md:items-center w-[80vw] md:w-full m-auto pt-20 md:pt-28">
                        <h3 className="gradient-text font-bold transition my-8 text-xl md:text-2xl md:text-center w-fit mx-auto">
                            {t('story.team.title')}
                        </h3>
                        <p className="text-[15px] text-center md:text-[16px] leading-[28px] -tracking-[0.38px] md:-tracking-[0.4px] text-[#333333]">
                            {t('story.team.description')}
                        </p>
                    </div>

                    {/* fourth section */}
                    <div className="w-full px-4">
                        {!teamLoaded ? (
                            <div className="w-full h-60 flex items-center justify-center">
                                <Loading180Ring width={48} height={48} />
                            </div>
                        ) : (
                            <CustomSlider className="px-4 md:px-8 md:-mx-12" sliderRef={testimonialRef}>
                                {teamData.map((testimonial, index) => (
                                    <TestimonialCard
                                        key={index}
                                        avatar={testimonial._embedded['wp:featuredmedia'][0].source_url}
                                        name={testimonial.title.rendered}
                                        text={testimonial.content.rendered}
                                        position={testimonial.acf.title}
                                        email={testimonial.acf.email}
                                        telegram={testimonial.acf.telegram}
                                        isStory
                                    />
                                ))}
                            </CustomSlider>
                        )}
                        <div className="w-16 mx-auto">
                            <NavButtonGroup className="md:grid !w-auto" onNext={onNext} onPrev={onPrev} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
