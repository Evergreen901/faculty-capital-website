import { useState } from 'react';
import { ArrowButtonIcon } from '../../assets/icons';

const NavButtonGroup = ({
    className,
    onPrev,
    onNext,
    isVertical = false,
    prevDisabled = false,
    nextDisabled = false,
}) => {
    const [prevButtonHover, setPrevButtonHover] = useState(false);
    const [nextButtonHover, setNextButtonHover] = useState(false);

    return (
        <div className={`grid grid-cols-2 gap-x-2 w-16 ${className}`}>
            <button
                className={`transition ${isVertical ? '-rotate-90' : 'rotate-180'} w-6 h-6`}
                onMouseOver={() => setPrevButtonHover(true)}
                onMouseOut={() => setPrevButtonHover(false)}
                onClick={onPrev}
                disabled={prevDisabled}
            >
                <ArrowButtonIcon fill={prevButtonHover && !prevDisabled ? '' : '#333333'} />
            </button>
            <button
                className={`transition ${isVertical ? 'rotate-90' : ''} w-6 h-6`}
                onMouseOver={() => setNextButtonHover(true)}
                onMouseOut={() => setNextButtonHover(false)}
                onClick={onNext}
                disabled={nextDisabled}
            >
                <ArrowButtonIcon fill={nextButtonHover && !nextDisabled ? '' : '#333333'} />
            </button>
        </div>
    );
};

export default NavButtonGroup;
