import React, { useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TfiInstagram } from 'react-icons/tfi';
import { PacmanLoader } from 'react-spinners';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
    const [currrentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(0);
    const totalVideo = 3;
    const nextVideoRef = useRef(null);
    const handleMiniVdClick = ()=>{
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }
    const handleVideoLoad=()=>{
        setLoadedVideo((prev)=>prev +1)
    }
    const upcomingVideoIndex = (currrentIndex % totalVideo)+1;
    const getVideoSource = (index) => `videos/hero-${index}.mp4`;
    useEffect(()=>{
      if(loadedVideo === totalVideo -1){
        setIsLoading(false)
      }
    },[loadedVideo])
   useGSAP(()=>{
    gsap.set('#video-frame',{
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius:'0 0 40% 10%'
   })
   gsap.from("#video-frame",{
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    borderRadius:'0% 0% 0% 0%',
    ease: 'power1.inOut',
    
    scrollTrigger:{
      trigger:"#video-frame",
      start:"center center",
      end:"bottom center",
      scrub:2
    }
   })
   })
    useGSAP(
        () => {
          if (hasClicked) {
            gsap.set("#next-video", { visibility: "visible" });
            gsap.to("#next-video", {
              transformOrigin: "center center",
              scale: 1,
              width: "100%",
              height: "100%",
              duration: 1,
              ease: "power1.inOut",
              onStart: () => nextVideoRef.current.play(),
            });
            gsap.from("#current-video", {
              transformOrigin: "center center",
              scale: 0,
              duration: 2.5,
              ease: "power1.inOut",
            });
          }
        },
        {
          dependencies: [currrentIndex],
          revertOnUpdate: true,
        }
      );
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

        <div id="video-frame" className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                    <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-700 ease-in-out hover:scale-100 hover:opacity-100'>
                        <video
                        ref={nextVideoRef}
                        src={getVideoSource((currrentIndex % totalVideo) + 1)}
                        loop
                        
                        id="current-video"
                        className='size-64 origin-center scale-150 rounded-full border-solid border-2 border-black object-cover object-center'
                        onLoadedData={handleVideoLoad}
                        />
                    </div>

                </div>
                <video
                ref={nextVideoRef}
                src={getVideoSource(currrentIndex)}
                loop
                
                id='next-video'
                className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                
                />
                <video
                src={getVideoSource(currrentIndex == totalVideo -1? 1 : currrentIndex)}
                autoPlay
                loop
                muted
                className='absolute left-0 top-0 size-full object-cover object-center'
                onLoadedData={handleVideoLoad}
                />
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 ">
          Get<b>S</b>et<b>C</b>ode
        </h1>
        <div className='absolute left-0 top-0 z-40 size-full'>
            <div className='mt-24 ml-3 sm:px-10'>
                <h1 className='special-font hero-heading text-blue-100'><b>C</b>ode<b>C</b>hef_<b>BU</b>
                </h1>
                <p className=' lg:ml-6 mt-3  mb-8 max-w-96 font-robert-regular text-blue-100 '>
                CodeChef's university-based community chapter <br/>promotes the art of programming among the student community.
                </p>
               <Button 
               
               id='Watch-edit'
               title='Watch Edit'
               leftIcon = {<TfiInstagram />} 
               containerClass="!bg-yellow-300 flex-center lg:ml-5 gap-5"
               redirect='https://www.instagram.com/codechef_bu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
               />

               
            </div>
        </div>
        
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black ">
          Get<b>S</b>et<b>C</b>ode
        </h1>
     </div>
  )
}

export default Hero