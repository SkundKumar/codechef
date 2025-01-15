import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";


const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
          <div className="flex flex-col items-center text-center">
        
          <p className="mb-10 font-general text-[12px] uppercase">
            Join The Event
          </p>
            <div className="container overflow-hidden ">

            
         <h1 className="special-font !md:text-[10rem] w-full font-zentry !text-8xl !font-black !leading-[1]">"Fill the<b> Fo</b>rm to<br /> register now."</h1>
            
         </div>

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;