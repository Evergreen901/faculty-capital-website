import clsx from 'clsx';
import React, { useEffect } from 'react';

const CustomSlider = ({ sliderRef, children, className, noMask = false, testimonialType = false }) => {
    useEffect(() => {
        let isDown = false;
        let startX;
        let scrollLeft;

        sliderRef.current?.addEventListener('mousedown', (e) => {
            isDown = true;
            sliderRef.current.classList.add('active');
            startX = e.pageX - sliderRef.current.offsetLeft;
            scrollLeft = sliderRef.current.scrollLeft;
        });
        sliderRef.current?.addEventListener('mouseleave', () => {
            isDown = false;
            sliderRef.current.classList.remove('active');
        });
        sliderRef.current?.addEventListener('mouseup', () => {
            isDown = false;
            sliderRef.current.classList.remove('active');
        });
        sliderRef.current?.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - sliderRef.current.offsetLeft;
            const walk = (x - startX) * 1; //scroll-fast
            sliderRef.current.scrollLeft = scrollLeft - walk;
        });
    });

    return (
        <div
            className={clsx(
                className,
                'hide-scrollbar cursor-grab grid grid-rows-1 overflow-x-scroll overflow-y-hidden relative grid-flow-col gap-x-4 py-12 justify-items-center',
                noMask ? '' : 'mask-area'
            )}
            ref={sliderRef}
        >
            {children}
        </div>
    );
};

export default CustomSlider;
