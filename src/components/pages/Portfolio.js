import React, { useContext } from 'react';
import { Hero, ProjectCard, BannerParallax, GetInTouchSection } from '../reusable';
import { useTranslation } from 'react-i18next';
import GlobalContext from '../../context/global/GlobalContext';
import { Loading180Ring } from '../../assets/loading';

const Portfolio = () => {
    const { projectData, projectLoaded } = useContext(GlobalContext);
    const { t } = useTranslation();

    return (
        <div className="h-full relative pt-[20vw] md:pt-24 xl:pt-0">
            <div className="portfolio-container after:hidden before:hidden md:after:block md:before:block">
                <div className="absolute left-0 w-[120%] h-full overflow-x-clip">
                    <BannerParallax type="portfolio" />
                </div>
                <div className="relative z-30">
                    {/* first section */}
                    <Hero caption={t('portfolio.title')} description={t('portfolio.description')} />

                    {!projectLoaded ? (
                        <div className="w-full h-60 flex items-center justify-center">
                            <Loading180Ring width={48} height={48} />
                        </div>
                    ) : (
                        <>
                            {/* second section */}
                            <div className="grid grid-cols-1 gap-y-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3 py-10">
                                {projectData.length !== 0 &&
                                    projectData.map((item, index) => (
                                        <ProjectCard
                                            icon1={item.acf.logobw}
                                            icon2={
                                                item._embedded &&
                                                item._embedded['wp:featuredmedia'] &&
                                                item._embedded['wp:featuredmedia'][0].source_url
                                            }
                                            key={index}
                                            title={item.title.rendered}
                                            description={item.content.rendered}
                                            website={item.acf.website}
                                            detail
                                        />
                                    ))}
                            </div>
                        </>
                    )}

                    {/* third section */}
                    <GetInTouchSection />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
