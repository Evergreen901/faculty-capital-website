import 'tw-elements';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef, useState } from 'react';
import { useWidth } from '../../hooks';
import NavButtonGroup from './NavButtonGroup';

var ang = -30;
var angStart = 0;
var isStart = false;

const CompanyView = ({ selected, setSelected, data }) => {
    const { t } = useTranslation();
    const windowWidth = useWidth();
    const targetRef = useRef();
    const [angle, setAngle] = useState(-30);
    const highlighted = 11 - (parseInt((parseInt(angle + 1080 + 15) % 360) / 30) % 12);
    const radius = windowWidth > 768 ? 640 : windowWidth * 0.8;
    const itemSize = windowWidth > 768 ? 72 : windowWidth > 500 ? 60 : 40;

    const angXY = (ev) => {
        if (!targetRef.current) return;
        const bcr = targetRef.current.getBoundingClientRect();
        const radius = bcr.width / 2;
        const { clientX, clientY } = ev.touches ? ev.touches[0] : ev;
        const y = clientY - bcr.top - radius; // y from center
        const x = clientX - bcr.left - radius; // x from center
        return (Math.atan2(y, x) * 180) / 3.14;
    };

    const mousedown = (ev) => {
        isStart = true;
        angStart = angXY(ev) - ang;
    };

    const mousemove = (ev) => {
        if (!isStart || !targetRef.current) return;
        ev.preventDefault();
        ang = angXY(ev) - angStart;
        setAngle(ang);
    };

    const mouseup = () => {
        isStart = false;
    };

    useEffect(() => {
        targetRef.current && targetRef.current.addEventListener('mousedown', mousedown);
        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setSelected(highlighted);

        // eslint-disable-next-line
    }, [highlighted]);

    const rotate = (distance, direction, speed, step) => {
        let rotateAmount = 0;
        const slideTimer = setInterval(function () {
            if (direction === 'next') {
                ang -= step;
            } else {
                ang += step;
            }
            setAngle(ang);
            rotateAmount += step;
            if (rotateAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    };

    const onNext = () => {
        rotate(30, 'next', 1, 1);
    };

    const onPrev = () => {
        rotate(30, 'prev', 1, 1);
    };

    const handleClick = (index) => {
        let delta = highlighted - index;
        if (delta > 6) {
            delta = delta - 12;
        }

        if (delta < -6) {
            delta = delta + 12;
        }

        if (delta < 0) {
            rotate(-delta * 30, 'next', 1, 1);
        } else {
            rotate(delta * 30, 'prev', 1, 1);
        }
    };

    return (
        <div className="flex flex-col tablet:flex-row-reverse items-end lg:block">
            <div className="overflow-hidden pl-10 sm:h-[60vw] md:pl-0 md:w-[600px] md:h-[450px] radial-mask-area">
                <div
                    className="relative border-dashed border-2 border-gray-300 rounded-full top-[30vw] left-[10vw] sm:left-[0] mobile:top-[20vw] md:top-[80px!important] md:left-[100px]"
                    ref={targetRef}
                    style={{ width: radius, height: radius }}
                >
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute right-[50%] bottom-[50%] pointer-events-none`}
                            style={{
                                paddingBottom: radius,
                                transform: `rotateZ(${ang + index * 30}deg)`,
                                right: `calc(50% - ${itemSize / 2}px)`,
                                width: `${itemSize}px`,
                                bottom: `calc(50% - ${radius / 2}px - ${itemSize / 2}px)`,
                            }}
                        >
                            <div
                                className={`pointer-events-auto transition flex items-center justify-center overflow-hidden ${
                                    highlighted === index ? 'rounded-[16px]' : 'rounded-lg'
                                }`}
                                style={{
                                    width: highlighted === index ? itemSize * 1.3 : itemSize,
                                    height: highlighted === index ? itemSize * 1.3 : itemSize,
                                    marginLeft: highlighted === index ? itemSize * -0.15 : 0,
                                }}
                                onClick={() => {
                                    handleClick(index);
                                }}
                            >
                                <img
                                    src={highlighted === index ? item.mainLogo : item.grayLogo}
                                    alt="company logo"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    ))}
                    <NavButtonGroup className="absolute left-[40%] top-[35%]" onNext={onNext} onPrev={onPrev} />
                </div>
            </div>
            <div className="grow shrink basis-0 lg:hidden">
                {/* <img className="mt-16 w-[40vw] sm:w-fit" src={data[selected].title} alt="company logo" /> */}
                <p className="mt-12 text-sm md:text-lg">{t(data[selected].description)}</p>
            </div>
        </div>
    );
};

export default CompanyView;
