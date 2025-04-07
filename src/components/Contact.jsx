import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    // Animation for the subtitle
    gsap.fromTo(
      "#text",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#text",
          start: "top 80%", // Starts when #text reaches 80% of the viewport
          end: "top 50%", // Ends when it reaches 50%
          scrub: true, // Smooth animation while scrolling
        },
      }
    );

    // Animation for the main text
    gsap.fromTo(
      "#text2",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#text2",
          start: "top 100%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <p id="text" className="mb-10 font-general text-[12px] uppercase">
            Join The Event
          </p>
          <div className="container overflow-hidden">
            <h1
              id="text2"
              className="special-font !md:text-[10rem] w-full font-zentry !text-8xl !font-black !leading-[1]"
            >
              "Visit The<b> Of</b>ficial 
              <br /> Website."
            </h1>
          </div>
          <Button
            title={
              <><a href="https://cpl-20.vercel.app/">
                Do IT OR ELSE <br />
                (ง •̀_•́)ง
              </a>
                
              </>
            }
            containerClass="mt-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
