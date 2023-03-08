import { useState } from 'react';
import Sticky1 from '../../assets/png/sticky1.png';
import Sticky2 from '../../assets/png/sticky2.png';
import Sticky3 from '../../assets/png/sticky3.png';
import Sticky4 from '../../assets/png/sticky4.png';

const BannerParallax = ({ type = 'home' }) => {
    const [scrollPos, setScrollPos] = useState();

    window.addEventListener('scroll', (e) => {
        setScrollPos(window.scrollY);
    });

    const calcValue = (minValue, maxValue) => {
        return minValue + parseInt(((maxValue - minValue) * scrollPos) / 600);
    };

    return (
        <>
            {type === 'home' && (
                <>
                    <div className="z-10 absolute bg-gradient-to-r from-cyan-500 to-blue-500 h-[150vw] w-[60vw] -right-[25vw] -top-[150vw] md:h-[1500px] md:w-[800px] md:-right-[400px] md:-top-[1200px] xl:w-[1200px] xl:-right-[800px] xl:-top-[900px] rounded-[5vw] md:rounded-[40px] skew-y-[40deg]" />
                    <div
                        className={`z-[16] absolute w-[30vw] -right-[10vw] -top-[35vw] md:right-[100px] md:top-[-50px] md:w-[280px] transition rotate-[30deg]`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute -right-[50px] lg:-right-[100px] top-[300px] w-[280px] transition rotate-[110deg] hidden md:block`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute right-[0px] top-[150px] w-[450px] transition rotate-[60deg]  hidden xl:block`}
                        style={{
                            transform: `translate(${calcValue(0, -120)}px, ${calcValue(0, 30)}px) rotate(60deg)`,
                        }}
                    >
                        <img src={Sticky2} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[40vw] -right-[30vw] -top-[30vw] md:-right-[450px] md:-top-[50px] md:w-[400px] transition rotate-[30deg]`}
                        style={{
                            transform: `translate(${calcValue(0, 120)}px, ${calcValue(0, 120)}px) rotate(30deg)`,
                        }}
                    >
                        <img src={Sticky2} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[30vw] -right-[20vw] -top-[40vw] md:-right-[350px] md:-top-[100px] md:w-[400px] transition`}
                        style={{
                            transform: `translate(${calcValue(0, 100)}px, ${calcValue(0, 100)}px)`,
                        }}
                    >
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[35vw] -top-[45vw] right-[20vw] md:right-[200px] md:-top-[150px] md:w-[350px] transition`}
                        style={{
                            transform: `translate(${calcValue(0, -100)}px, ${calcValue(0, 100)}px)`,
                        }}
                    >
                        <img src={Sticky3} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[35vw] right-[25vw] -top-[73vw] md:right-[400px] md:-top-[400px] md:w-[350px] transition rotate-[270deg]`}
                        style={{
                            transform: `translate(${calcValue(0, -100)}px, ${calcValue(0, 100)}px) rotate(270deg)`,
                        }}
                    >
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                </>
            )}
            {type === 'story' && (
                <>
                    <div className="z-10 absolute bg-gradient-to-r from-cyan-500 to-blue-500 h-[150vw] w-[60vw] -right-[25vw] -top-[150vw] md:h-[1500px] md:w-[800px] md:-right-[400px] md:-top-[1000px] xl:w-[1200px] xl:-right-[800px] xl:-top-[900px] rounded-[5vw] md:rounded-[40px] md:skew-x-[15deg] skew-y-[40deg] md:skew-y-[25deg]" />
                    <div
                        className={`z-[15] absolute w-[20vw] right-0 -top-[70vw] md:-right-[90px] md:top-[-50px] md:w-[280px] transition rotate-[30deg]`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute -right-[10vw] md:-right-[100px] -top-[20vw] md:top-[300px] w-[20vw] md:w-[280px] transition rotate-[65deg]`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute right-0 md:right-[0px] -top-[50vw] md:-top-[100px] w-[30vw] md:w-[450px] transition rotate-[280deg]`}
                        style={{
                            transform: `translate(${calcValue(0, -120)}px, ${calcValue(0, 30)}px) rotate(280deg)`,
                        }}
                    >
                        <img src={Sticky2} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[30vw] right-[5vw] -top-[40vw] md:right-[130px] md:top-[80px] md:w-[400px] rotate-[260deg] transition`}
                        style={{
                            transform: `translate(${calcValue(0, 100)}px, ${calcValue(0, 100)}px) rotate(260deg)`,
                        }}
                    >
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[16] absolute -right-[50px] md:right-[190px] top-[-350px] w-[280px] transition rotate-[110deg] hidden md:block`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[35vw] right-[25vw] -top-[73vw] md:right-[260px] md:-top-[400px] md:w-[350px] transition rotate-[270deg] hidden md:block`}
                        style={{
                            transform: `translate(${calcValue(0, -100)}px, ${calcValue(0, 100)}px) rotate(270deg)`,
                        }}
                    >
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                </>
            )}
            {type === 'portfolio' && (
                <>
                    <div className="z-10 absolute bg-gradient-to-r from-cyan-500 to-blue-500 h-[150vw] w-[60vw] -right-[25vw] -top-[150vw] md:h-[1500px] md:w-[800px] md:right-[120px] md:-top-[1350px] xl:w-[1200px] xl:-right-[200px] xl:-top-[1280px] rounded-[5vw] md:rounded-[40px] md:skew-x-[30deg] skew-y-[40deg] md:skew-y-[20deg]" />
                    <div
                        className={`z-[15] absolute w-[25vw] -top-[65vw] right-[10vw] md:-right-[15px] md:-top-[60px] md:w-[350px] transition rotate-[220deg]`}
                        style={{
                            transform: `translate(${calcValue(0, -100)}px, ${calcValue(0, 100)}px) rotate(220deg)`,
                        }}
                    >
                        <img src={Sticky3} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[25vw] right-[0vw] -top-[30vw] md:right-[300px] md:-top-[235px] md:w-[350px] transition rotate-[250deg]`}
                        style={{
                            transform: `translate(${calcValue(0, -100)}px, ${calcValue(0, 100)}px) rotate(250deg)`,
                        }}
                    >
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                </>
            )}
            {type === 'blog' && (
                <>
                    <div className="z-10 absolute bg-gradient-to-r from-cyan-500 to-blue-500 h-[150vw] w-[60vw] -right-[25vw] -top-[150vw] md:h-[1500px] md:w-[800px] md:right-[120px] md:-top-[1350px] xl:w-[1200px] xl:-right-[200px] xl:-top-[1280px] rounded-[5vw] md:rounded-[40px] md:skew-x-[30deg] skew-y-[40deg] md:skew-y-[20deg]" />
                    <div
                        className={`z-[15] absolute w-[25vw] right-[20vw] md:right-[180px] -top-[45vw] md:-top-[350px] md:w-[450px] transition rotate-[195deg]`}
                        style={{
                            transform: `translate(${calcValue(0, -120)}px, ${calcValue(0, 30)}px) rotate(195deg)`,
                        }}
                    >
                        <img src={Sticky2} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[20vw] right-0 -top-[70vw] md:-right-[90px] md:top-[-50px] md:w-[280px] transition rotate-[30deg] block md:hidden`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute -right-[10vw] md:-right-[100px] -top-[20vw] md:top-[300px] w-[20vw] md:w-[280px] transition rotate-[65deg] block md:hidden`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[30vw] -right-[15vw] -top-[40vw] md:right-[130px] md:top-[80px] md:w-[400px] rotate-[260deg] transition block md:hidden`}
                        style={{
                            transform: `translate(${calcValue(0, 100)}px, ${calcValue(0, 100)}px) rotate(260deg)`,
                        }}
                    >
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                </>
            )}
            {type === 'blog-detail' && (
                <>
                    <div className="z-10 absolute bg-gradient-to-r from-cyan-500 to-blue-500 h-[150vw] w-[60vw] -right-[25vw] -top-[150vw] md:h-[1500px] md:w-[800px] md:right-[120px] md:-top-[1350px] xl:w-[1200px] xl:-right-[200px] xl:-top-[1280px] rounded-[5vw] md:rounded-[40px] md:skew-x-[30deg] skew-y-[40deg] md:skew-y-[20deg]" />
                    <div
                        className={`z-[15] absolute w-[25vw] -right-[5vw] md:right-[180px] -top-[45vw] md:-top-[350px] md:w-[450px] transition rotate-[195deg]`}
                        style={{
                            transform: `translate(${calcValue(0, -120)}px, ${calcValue(0, 30)}px) rotate(195deg)`,
                        }}
                    >
                        <img src={Sticky2} alt="sticky background" />
                    </div>
                </>
            )}
            {type === 'solution' && (
                <>
                    <div className="z-10 absolute bg-gradient-to-r from-cyan-500 to-blue-500 h-[150vw] w-[60vw] -right-[25vw] -top-[100vw] md:h-[1500px] md:w-[800px] md:right-[1200px] md:-top-[1435px] xl:w-[1200px] xl:right-[1000px] xl:-top-[1460px] rounded-[5vw] md:rounded-[160px] md:skew-x-[65deg] skew-y-[40deg] md:-skew-y-[15deg]" />
                    <div
                        className={`z-[15] absolute w-[25vw] right-[15vw] md:-right-[100px] top-[10vw] md:-top-[220px] md:w-[450px] transition rotate-[235deg]`}
                        style={{
                            transform: `translate(${calcValue(0, -120)}px, ${calcValue(0, 30)}px) rotate(235deg)`,
                        }}
                    >
                        <img src={Sticky2} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[14] absolute w-[20vw] right-[5vw] -top-[25vw] md:right-[75px] md:top-[35px] md:w-[280px] transition rotate-[20deg]`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[16] absolute -right-[10vw] md:right-[245px] top-[40vw] md:-top-[195px] w-[20vw] md:w-[280px] transition rotate-[75deg]`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[30vw] -right-[20vw] top-[15vw] md:-right-[235px] md:top-[0px] md:w-[400px] rotate-[260deg] md:rotate-[215deg] transition`}
                        style={{
                            transform: `translate(${calcValue(0, 100)}px, ${calcValue(0, 100)}px) rotate(215deg)`,
                        }}
                    >
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute -right-[50px] lg:right-[550px] top-[-385px] w-[280px] transition rotate-[25deg] hidden md:block`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute w-[35vw] -right-[25vw] top-[55vw] md:right-[315px] md:-top-[170px] md:w-[350px] transition -rotate-[30deg] md:rotate-[215deg]`}
                        style={{
                            transform: `translate(${calcValue(0, -100)}px, ${calcValue(0, 100)}px) rotate(215deg)`,
                        }}
                    >
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                </>
            )}
            {type === 'contact' && (
                <>
                    <div
                        className={`z-[15] absolute w-[30vw] right-[15vw] top-[0vw] md:-top-[10vw] lg:right-[600px] lg:-top-[150px] lg:w-[350px] transition rotate-[240deg] lg:rotate-[5deg]`}
                        style={{
                            transform: `translate(${calcValue(0, -100)}px, ${calcValue(0, 100)}px) rotate(5deg)`,
                        }}
                    >
                        <img src={Sticky1} alt="sticky background" />
                    </div>
                    <div
                        className={`z-[15] absolute -right-[230px] top-[400px] w-[280px] transition rotate-[145deg] hidden md:block`}
                    >
                        <img src={Sticky4} alt="sticky background" />
                    </div>
                </>
            )}
        </>
    );
};

export default BannerParallax;
