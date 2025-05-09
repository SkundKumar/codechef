import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-10 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[12px]">
          Welcome to codechef
        </h2>
        <AnimatedTitle
          title="Introducing<b> CPL</b>"
          containerClass="mt-5 !text-black !text-8xl sm:!text-6xl text-center"
        />
        <AnimatedTitle
          title="<b></b>"
          containerClass="!mt-0 !text-black !text-8xl !md:text-4xl !sm:text-2xl text-center"
        />
        <div className="about-subtext">
          <p>CodeChef Premier League</p>
          <p>stay tuned to find out</p>
        </div>
      </div>
      <div className="h-dvh w-screen mt-0 "id="clip">
        <div className="mask-clip-path about-image">
          {/* For Desktop */}
          <img
            src="img/2025.png"
            alt="Desktop Image"
            className="hidden md:block absolute left-0 top-0 size-full object-cover"
          />
          {/* For Mobile */}
          <img
            src="img/2025-mob.png"
            alt="Mobile Image"
            className="block md:hidden absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
