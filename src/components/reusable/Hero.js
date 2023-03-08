import moment from 'moment';

const Hero = ({ dateTime = '', caption, description, className }) => {
    return (
        <div className={`${className}`}>
            <p className="mt-28 font-bold text-[16px] text-[#333333] leading-[28px] -tracking-[0.4px] opacity-20">
                {dateTime !== '' && moment(dateTime).format('DD/MM/YYYY')}
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl max-w-[80vw] sm:max-w-[60vw] md:max-w-[600px] font-extrabold mt-4 -tracking-[1.1px]">
                {caption}
            </h1>
            <p className="text-sm md:text-lg max-w-[520px] mt-12">{description}</p>
        </div>
    );
};

export default Hero;
