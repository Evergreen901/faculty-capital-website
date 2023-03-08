import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import {
    Hero,
    CustomSelect,
    BlogCard,
    InsightsSignUpCard,
    ImageSlider,
    BannerParallax,
    SecondaryButton,
} from '../reusable';
import { useTranslation } from 'react-i18next';
import GlobalContext from '../../context/global/GlobalContext';
import { useWidth } from '../../hooks';
import { Loading180Ring } from '../../assets/loading';
import { BLOG_TAG_TYPE } from '../../config/constants';
import Sticky2 from '../../assets/png/sticky2.png';
import Sticky4 from '../../assets/png/sticky4.png';

const Blog = () => {
    const { blogData, blogLoaded, featuredBlogs, setSearchBlogs, searchBlogs } = useContext(GlobalContext);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [viewAll, setViewAll] = useState(false);
    const windowWidth = useWidth();

    const getColSpan = () => {
        if (!searchBlogs || !searchBlogs.length) return 1;
        if (searchBlogs.length % 3 === 0) return 1;
    };

    const goDetail = (index) => {
        navigate(`/blog/details/${index}`);
    };

    const itemChanged = (selected) => {
        const searchResult = blogData.filter((el) => {
            if (Number(selected.value) === BLOG_TAG_TYPE.ALL || el.tags.includes(Number(selected.value))) {
                return true;
            }
            return false;
        });
        setSearchBlogs(searchResult);
    };

    const [scrollPos, setScrollPos] = useState();

    window.addEventListener('scroll', (e) => {
        setScrollPos(window.scrollY);
    });

    const calcValue = (minValue, maxValue) => {
        return minValue + parseInt(((maxValue - minValue) * scrollPos) / 600);
    };

    return (
        <div className="h-full relative pt-[20vw] md:pt-24 xl:pt-0">
            <div className="blog-container after:hidden before:hidden md:after:block md:before:block relative">
                <div className="absolute left-0 w-[120%] h-full overflow-x-clip">
                    <BannerParallax type="blog" />
                </div>
                <div
                    className={`absolute rotate-[140deg] top-[50vw] -left-[120px] w-[200px] h-[230px]`}
                    style={{
                        transform: `translate(${calcValue(0, -50)}px, ${calcValue(0, 0)}px) rotate(140deg)`,
                    }}
                >
                    <img src={Sticky4} alt="sticky background" />
                </div>
                <div
                    className={`absolute rotate-[300deg] top-[50vw] -right-[120px] w-[200px] h-[230px]`}
                    style={{
                        transform: `translate(${calcValue(0, 50)}px, ${calcValue(0, 0)}px) rotate(300deg)`,
                    }}
                >
                    <img src={Sticky2} alt="sticky background" />
                </div>
                <div className="relative z-30">
                    {/* first section */}
                    <Hero caption={t('blog.title')} description={t('blog.description')} />

                    {!blogLoaded ? (
                        <div className="w-full h-60 flex items-center justify-center">
                            <Loading180Ring width={48} height={48} />
                        </div>
                    ) : (
                        <>
                            {/* second section */}
                            <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3">
                                <div className="flex items-center justify-between md:col-end-3 lg:col-end-4">
                                    <span className="font-medium text-[14px] text-[#333333] leading-[21px]">
                                        {searchBlogs?.length} {t('filters.result')}
                                    </span>
                                    <CustomSelect changeHandler={itemChanged} />
                                </div>
                            </div>
                            <div className="flex flex-col items-center md:grid md:justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <ImageSlider sliderData={featuredBlogs} className="col-span-2 hidden md:block" />
                                {searchBlogs?.length !== 0 &&
                                    searchBlogs.map((item, index) => {
                                        if (windowWidth <= 768 && !viewAll && index >= 5)
                                            return <div key={index}></div>;
                                        return (
                                            <BlogCard
                                                key={index}
                                                imgUrl={item.jetpack_featured_media_url}
                                                type={item.tags}
                                                caption={item.title.rendered}
                                                description={item.content.rendered}
                                                clickHandler={() => goDetail(item.blogIndex)}
                                            />
                                        );
                                    })}
                                <SecondaryButton
                                    className={clsx(
                                        'w-[40vw] my-10 md:hidden',
                                        viewAll
                                            ? 'opacity-20 before:hidden hover:!text-inherit !border-[#0000ff]'
                                            : 'md:opacity-100'
                                    )}
                                    text={t('button.view-more')}
                                    color={'black'}
                                    clickHandler={() => setViewAll(true)}
                                    isDisabled={viewAll}
                                />
                                <InsightsSignUpCard type={getColSpan()} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
