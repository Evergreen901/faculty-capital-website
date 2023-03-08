import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { ContentWrapper, ExternalLink } from '../reusable';
import { TelegramIcon } from '../../assets/icons';

const TestimonialCard = ({
    avatar,
    name,
    text,
    position,
    email = '',
    telegram = '',
    readMore = false,
    isStory = false,
}) => {
    const [collapsed, setCollapsed] = useState(true);
    const [detailOpen, setDetailOpen] = useState(false);
    const [detailReadMore, setDetailReadMore] = useState(false);
    const { t } = useTranslation();

    return (
        <div
            className={clsx('testimonial-card-container', !isStory ? '!bg-white !shadow-lg' : '!rounded-[10px]')}
            onMouseOver={() => (!isStory ? void 0 : setDetailOpen(true))}
            onMouseOut={() => (!isStory ? void 0 : setDetailOpen(false))}
        >
            <div className={clsx('relative', !isStory ? '' : 'rounded-[10px] aspect-square', 'overflow-hidden')}>
                <img
                    className={clsx(
                        'rounded-[5px] transition',
                        !isStory ? 'w-40 h-40' : 'rounded-[10px] my-4 scale-125',
                        detailOpen ? 'scale-100' : ''
                    )}
                    src={avatar}
                    alt="testimonial avatar"
                />
                <div className={clsx('detail transition', detailOpen ? '' : '!opacity-0', !isStory ? '!hidden' : '')}>
                    <div
                        className={` ${
                            detailReadMore
                                ? 'overflow-y-scroll !h-full mb-4 custom-scrollbar'
                                : '!h-[60%] overflow-hidden'
                        }`}
                    >
                        <ContentWrapper
                            description={text}
                            type={'white'}
                            className={`!h-max ${detailReadMore ? '' : 'mask'}`}
                        />
                    </div>
                    {!detailReadMore && (
                        <span
                            className="underline text-white font-bold cursor-pointer hover:opacity-80 transition"
                            onClick={() => setDetailReadMore(true)}
                        >
                            {t('button.read-more')}
                        </span>
                    )}
                    <div>
                        <ExternalLink to={`mailto:${email}`}>{email}</ExternalLink>
                        <ExternalLink
                            to={`${t('telegram.link')}${telegram}`}
                            className="social-button relative w-6 h-6 lg:w-8 lg:h-8"
                        >
                            <TelegramIcon width={24} height={24} fill="white" />
                        </ExternalLink>
                    </div>
                </div>
            </div>
            <p
                className={clsx(
                    'pt-4',
                    !isStory
                        ? ''
                        : 'font-bold text-[20px] leading-[25px] -tracking-[0.5] md:text-[22px] md:leading-[28px] md:-tracking-[0.55px] text-[#303336] mx-2'
                )}
            >
                {name}
            </p>
            <p
                className={clsx(
                    'pb-4 font-bold text-[16px] leading-[28px] -tracking-[0.4px]',
                    !isStory ? 'text-[#333333]' : 'mx-2 text-[#CFCFCF] uppercase'
                )}
            >
                {position}
            </p>
            {!isStory && (
                <div className={clsx(!isStory ? '' : 'mx-2')}>
                    <p
                        className={clsx(
                            'transition text-[16px] leading-[28px] -tracking-[0.4px] text-[#333333]',
                            readMore && !collapsed ? '!h-fit' : 'short-lines short-lines-4'
                        )}
                    >
                        {text}
                    </p>
                    {readMore && (
                        <span
                            className="underline text-blue-500 font-bold cursor-pointer hover:opacity-80 transition"
                            onClick={() => setCollapsed((prev) => !prev)}
                        >
                            {collapsed ? t('button.read-more') : t('button.read-less')}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default TestimonialCard;
