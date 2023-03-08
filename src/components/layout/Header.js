import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../../assets/logo/fc/full.svg';
import LogoWhite from '../../assets/logo/logo-white.svg';
import Cross from '../../assets/svg/Cross';
import Sticky1 from '../../assets/png/sticky1.png';
import Sticky2 from '../../assets/png/sticky2.png';
import Sticky4 from '../../assets/png/sticky4.png';
import { navigation } from '../../config/constants';
import { MenuIcon } from '../../assets/icons';

const Header = () => {
    const [menuOpened, setMenuOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div className="max-w-[1220px] mx-auto pt-8 md:pt-16 relative z-30">
            <div className="flex justify-between items-center z-10 relative">
                <Link to="/">
                    <img className="h-8" src={Logo} alt="faculty capital logo" />
                </Link>
                <button onClick={() => setMenuOpen((prev) => !prev)}>
                    <MenuIcon width={32} height={32} fill={location.pathname === '/contact' ? '#333333' : 'white'} />
                    {/* <img src={DotSvg} alt="9-dot hamburger" className="w-8 h-8" /> */}
                </button>
            </div>
            <div
                className={`fixed w-screen h-screen sp-menu left-0 top-0 px-6 md:px-4 z-40 transition ${
                    menuOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="relative h-full">
                    <div className="flex justify-between items-center z-30 max-w-[1220px] mx-auto pt-8 md:pt-16">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            <img className="h-8" src={LogoWhite} alt="faculty capital logo" />
                        </Link>
                        <button onClick={() => setMenuOpen((prev) => !prev)}>
                            <Cross />
                        </button>
                    </div>
                    <div className="h-full pb-24 grid grid-cols-1 gap-y-6 md:gap-y-4 justify-items-center content-center relative z-60">
                        {navigation.map((item, index) => (
                            <Link to={item.link} key={index} onClick={() => setMenuOpen(false)}>
                                <span className="text-white text-3xl md:text-5xl font-extrabold">{t(item.label)}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="sticky1 absolute">
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                    <div className="sticky2 absolute rotate-[30deg] ">
                        <img src={Sticky2} alt="sticky background" />
                    </div>
                    <div className="sticky3 absolute -rotate-[50deg] top-none">
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div className="sticky4 absolute rotate-[120deg]">
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div className="sticky5 absolute rotate-[250deg]">
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
