import React, { useState } from 'react'
import { useRef } from 'react';
const BentoCard = ({src,title,description,isComingSoon})=>{
    const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');
    return(
        <div className='relative size-full'>
           {isVideo ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
        />
      ) : (
        <img
          src={src}
          alt={title || 'Bento Card'}
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
        />
      )}
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h3 className='bento-title special-font text-black'>{title}</h3>
                    <p className='mt-3 max-w-64 text-base md:text-lg font-circular-web -left-0  text-black'>{description}</p>
                </div>
            </div>
        
        </div>
    )
}
const BentoTilt = ({children,className=" "})=>{
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.9) * 5;
    const tiltY = (relativeX - 0.9) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  )
}
const Features = () => {
  return (
    <section className="bg-black pb-52">
        <div className=" container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular-web text-lg text-blue-50">
                    MEET OUR TEAM
                </p>
            
            <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50 '>
            Meet the team that debugs life one line at a time!
            
            </p>
            </div>
            <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard
                src={'videos/pres.jpg'}
                title={<><span className="text-white">Pres<b>id</b>ent</span></>}
                description={<span className="text-white"><b>Ishanvi Verma</b></span>}
                isComingSoon
                />
            </BentoTilt>
            <div className='grid h-[90vh] w-full grid-cols-2 grid-rows-2 mb-9 gap-9 '>
            <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                <BentoCard
                src="videos/feature-2.png"
                title={<><span className="text-white">M<b>ul</b>timedi<b>a</b> & Desi<b>gn</b><br/> <b>h</b>ead</span></>}
                description={<><span className="text-white"><b>Skund Kumar</b></span></>}
                />
           </BentoTilt>
           <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                <BentoCard
                src={"videos/vp.jpg"}
                title={<>Vice <br/><b>Pre</b>sident</>}
                description={<><b>Manan Malik</b></>}
                />
           </BentoTilt>
           <BentoTilt className='bento-tilt_1 me-14  md:col-span-1 md:me-0'>
                <BentoCard
                src={"videos/adya.png"}
                title={<>Gen <br/><b>sec</b>ratary</>}
                description={<><b>Adya Rastogi</b></>}
                />
           </BentoTilt>
           
            </div>
            <div className='grid h-[90vh] w-full grid-cols-2 grid-rows-2 gap-9 mb-9'>
              
            <BentoTilt className='bento-tilt_1 md:col-span-1 md:me-0'>
                <BentoCard
                src={"videos/karan.jpg"}
                title={<>Man<b>A</b>gement <br/> Head</>}
                description={<><b>Karan Tyagi</b></>}
                />
           </BentoTilt>
           <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                <BentoCard
                src="videos/tech.jpg"
                title={<><span className="text-black">Te<b>c</b>h <b>h</b>ead</span></>}
                description={<><span className="text-black"><b>Chirag</b></span></>}
                />
           </BentoTilt>
           <BentoTilt className='bento-tilt_1  md:col-span-1 md:ms-0'>
                <BentoCard
                src={"videos/social.jpg"}
                title={<>Soc<b>Al</b> Media <br/> Head</>}
                description={<><b>Shreya</b></>}
                />
           </BentoTilt>
           
            
            </div>
            <div className='grid h-[50vh] w-full grid-cols-2 grid-rows-1 gap-9 '>
           <BentoTilt className='bento-tilt_1 me-32 md:col-span-1 md:me-0'>
                <BentoCard
                src={"videos/naman.jpg"}
                title={<>Fin<b>A</b>nce<br/> Head</>}
                description={<><b>Naman Garg</b></>}
                />
           </BentoTilt>
           <BentoTilt className='bento-tilt_1 ms-14 md:col-span-1 md:ms-0'>
                <BentoCard
                src={"videos/pr.jpg"}
                title={<><span className="text-white">PR<b> & <br/> o</b>utreach<br/> Head</span></>}
                description={<><span className="text-white"><b>raunak</b></span></>}
                />
           </BentoTilt>
           
           </div>
           <BentoTilt className='border-hsla relative mb-7 mt-9 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                
                <BentoCard
                
                src="videos/hero-1.mp4"
                title={<><span className="text-white">The<b> T</b>eam</span></>}
              
                />
                
            </BentoTilt>
        </div>
    </section>
  )
}

export default Features