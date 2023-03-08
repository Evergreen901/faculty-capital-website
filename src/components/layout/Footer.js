import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';
import LogoFooter from '../../assets/logo/fc/main-white.svg';
import { navigation } from '../../config/constants';
import { ExternalLink } from '../reusable';
import { TwitterIcon, LinkedinIcon } from '../../assets/icons';

const Footer = () => {
    const messageRef = useRef();
    const capitalRef = useRef();
    const emailRef = useRef();
    const { t } = useTranslation();

    if (messageRef.current) messageRef.current.innerHTML = t('footer.message');
    if (capitalRef.current) capitalRef.current.innerHTML = t('footer.capital');
    if (emailRef.current) emailRef.current.innerHTML = t('footer.email');

    return (
        <div className="-mx-8 pt-20">
            <div className="bg-gradient-to-b lg:bg-gradient-to-l from-cyan-500 to-blue-500 pb-20 px-8">
                <div className="relative max-w-[1220px] mx-auto">
                    <div className="flex items-center lg:items-end justify-between flex-col lg:flex-row">
                        <div>
                            <div className="w-full lg:w-fit pt-20 lg:pt-28 grid grid-cols-1 justify-items-center lg:justify-items-start">
                                <img src={LogoFooter} alt="logo footer" />
                            </div>
                            <div className="mt-12 grid grid-cols-1 lg:grid-flow-col gap-x-12 gap-y-8 justify-items-center lg:justify-items-start">
                                {navigation.map((item, index) => (
                                    <Link to={item.link} key={index}>
                                        <span className="text-white text-xl lg:text-lg font-bold">{t(item.label)}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-10 lg:gap-y-[11px] mt-20 lg:mt-0">
                            <div className="grid grid-flow-col justify-center lg:justify-end gap-x-6 lg:gap-x-2">
                                <ExternalLink
                                    to={t('footer.social.twitter')}
                                    className="social-button relative w-8 h-8 lg:w-12 lg:h-12"
                                >
                                    <div className="absolute svg-wrapper">
                                        <TwitterIcon height={32} width={32} fill="#ffffff" />
                                    </div>
                                    <div className="absolute svg-wrapper">
                                        <TwitterIcon height={32} width={32} />
                                    </div>
                                </ExternalLink>
                                <ExternalLink
                                    to={t('footer.social.linkedin')}
                                    className="social-button relative w-8 h-8 lg:w-12 lg:h-12 -mt-1"
                                >
                                    <div className="absolute svg-wrapper">
                                        <LinkedinIcon height={28} width={28} fill="#ffffff" />
                                    </div>
                                    <div className="absolute svg-wrapper">
                                        <LinkedinIcon height={28} width={28} />
                                    </div>
                                </ExternalLink>
                            </div>
                            <p className="text-xl text-white text-center lg:text-right font-bold" ref={emailRef} />
                            <p className="text-[14px] text-white text-center lg:text-right" ref={capitalRef} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
