import React from 'react'
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
                    <p className='mt-3 max-w-64 text-base md:text-lg font-circular-web text-black'>{description}</p>
                </div>
            </div>
        
        </div>
    )
}
const Features = () => {
  return (
    <section className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular-web text-lg text-blue-50">
                    MEET OUR TEAM
                </p>
            
            <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50 '>
                some random paragraph............
                sfsdf
                sddfsdf
                sdfsdfsdfsdfsdfsf
            
            </p>
            </div>
            <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard
                src="videos/feature-1.mp4"
                title={<>Pres<b>id</b>ent</>}
                description={<b>Ishanvi Verma</b>}
                isComingSoon
                />
            </div>
            <div className='grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-9 '>
            <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                <BentoCard
                src="videos/feature-2.png"
                title={<>M<b>ul</b>timedi<b>a</b> & Desi<b>gn</b><br/> <b>h</b>ead</>}
                description={<><b>Skund Kumar</b></>}
                />
           </div>
           <div className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                <BentoCard
                src={"videos/vp.jpg"}
                title={<>Vice <br/><b>Pre</b>sident</>}
                description={<><b>Manan Malik</b></>}
                />
           </div>
           <div className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                <BentoCard
                src={"videos/sec.jpg"}
                title={<>Gen <br/><b>sec</b>ratary</>}
                description={<><b>Adya Rastogi</b></>}
                />
           </div>

            </div>
        </div>
    </section>
  )
}

export default Features