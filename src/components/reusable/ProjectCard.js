import clsx from 'clsx';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContentWrapper, ExternalLink } from '../reusable';

const ProjectCard = ({ icon1, icon2, title, description, website, detail = false }) => {
    const { t } = useTranslation();
    const [detailOpen, setDetailOpen] = useState(false);
    const [readMore, setReadMore] = useState(false);

    return (
        <div
            className={clsx('portfolio-item', !detail ? 'hover:block' : 'hover:none !w-full')}
            onMouseOver={() => (!detail ? void 0 : setDetailOpen(true))}
            onMouseOut={() => (!detail ? void 0 : setDetailOpen(false))}
        >
            <div className={clsx('portfolio-icon')}>
                {icon2 ? (
                    <img className="w-full h-[auto] max-h-[100%] object-contain" src={icon2} alt="..." />
                ) : (
                    <>
                        {icon1 && <img className="w-[42px] h-[42px]" src={icon1} alt="..." />}
                        <h2 className="ml-4 text-3xl text-center font-extrabold">{title}</h2>
                    </>
                )}
            </div>
            <div className={clsx('detail transition absolute', detailOpen ? 'opacity-100' : 'opacity-0')}>
                <div className={readMore ? 'overflow-y-scroll custom-scrollbar' : 'h-[60%] overflow-hidden mask'}>
                    <ContentWrapper description={description} type={'white'} className={`!h-max`} />
                </div>
                {!readMore && (
                    <span
                        className="underline text-white font-bold cursor-pointer hover:opacity-80 transition"
                        onClick={() => setReadMore(true)}
                    >
                        {t('button.read-more')}
                    </span>
                )}
                <ExternalLink
                    to={website}
                    className="font-bold text-[16px] leading-[28px] -tracking-[0.4px] text-[#FAFAFA] underline"
                >
                    {t('button.go-to-their-website')}
                </ExternalLink>
            </div>
        </div>
    );
};

export default ProjectCard;
