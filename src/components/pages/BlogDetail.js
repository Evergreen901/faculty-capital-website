import clsx from 'clsx';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { Hero, BannerParallax, ContentWrapper, BlogCard, SecondaryButton } from '../reusable';
import { Loading180Ring } from '../../assets/loading';
import GlobalContext from '../../context/global/GlobalContext';
import { useTranslation } from 'react-i18next';
import Sticky2 from '../../assets/png/sticky2.png';
import Sticky4 from '../../assets/png/sticky4.png';

const BlogDetail = () => {
    const { blogData, blogLoaded } = useContext(GlobalContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const { t } = useTranslation();
    const [viewAll, setViewAll] = useState(false);

    const goDetail = (index) => {
        navigate(`/blog/details/${index}`);
    };

    const blogIndex = Number(id.replace(':', ''));

    const [scrollPos, setScrollPos] = useState();

    window.addEventListener('scroll', (e) => {
        setScrollPos(window.scrollY);
    });

    const calcValue = (minValue, maxValue) => {
        return minValue + parseInt(((maxValue - minValue) * scrollPos) / 600);
    };

    return (
        <div className="h-full relative pt-[20vw] md:pt-24 xl:pt-0">
            <div className="blog-detail-container">
                <div className="absolute left-0 w-[120%] h-full overflow-x-clip">
                    <BannerParallax type="blog-detail" />
                </div>
                <div
                    className={`absolute rotate-[140deg] top-[50vw] -right-[180px] w-[200px] h-[230px]`}
                    style={{
                        transform: `translate(${calcValue(0, -50)}px, ${calcValue(0, 0)}px) rotate(140deg)`,
                    }}
                >
                    <img src={Sticky4} alt="sticky background" />
                </div>
                <div
                    className={`absolute rotate-[40deg] top-[50vw] -right-[60px] w-[200px] h-[230px]`}
                    style={{
                        transform: `translate(${calcValue(0, 50)}px, ${calcValue(0, 0)}px) rotate(40deg)`,
                    }}
                >
                    <img src={Sticky2} alt="sticky background" />
                </div>
                <div className="relative z-30">
                    {/* first section */}
                    <Hero dateTime={blogData[blogIndex]?.modified_gmt} caption={blogData[blogIndex]?.title.rendered} />

                    {!blogLoaded ? (
                        <div className="w-full h-60 flex items-center justify-center">
                            <Loading180Ring width={48} height={48} />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 xl:gap-20 md:grid-cols-2 lg:grid-cols-3 pb-8 border-solid border-b">
                            <ContentWrapper
                                className="col-span-1 lg:col-span-2 detail"
                                description={blogData[blogIndex]?.content.rendered}
                            />
                            <div className="col-span-1 latest-news-container w-full md:!w-[350px] md:before:hidden md:after:hidden">
                                <div className="flex flex-col items-center justify-center rounded-t-[10px] px-5 py-7 md:px-10 md:py-14">
                                    <h4 className="gradient-text2 font-bold text-[28px] leading-[37px] -tracking-[0.7px]">
                                        {t('blog.detail.latest-news')}
                                    </h4>
                                    <div className="grid gap-4 pt-10">
                                        {blogData?.length !== 0 &&
                                            blogData.map((item, index) => {
                                                if (index >= 5 && !viewAll) return <div key={index}></div>;
                                                return (
                                                    <BlogCard
                                                        key={index}
                                                        imgUrl={item.jetpack_featured_media_url}
                                                        type={item.tags}
                                                        caption={item.title.rendered}
                                                        description={item.content.rendered}
                                                        clickHandler={() => goDetail(index)}
                                                        detail
                                                    />
                                                );
                                            })}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center rounded-b-[10px] pb-10 md:border-t md:border-solid md:border-black md:py-4 w-full">
                                    <SecondaryButton
                                        className={clsx(
                                            'md:font-bold md:text-[14px] md:leading-[17px] md:text-[#333333] md:underline md:!border-none md:before:hidden md:hover:!text-inherit',
                                            viewAll
                                                ? 'opacity-20 before:hidden hover:!text-inherit !border-[#0000ff]'
                                                : 'md:opacity-100'
                                        )}
                                        text={t('blog.view-all')}
                                        color={'black'}
                                        clickHandler={() => setViewAll(true)}
                                        isDisabled={viewAll}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
