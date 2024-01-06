import Bulb from "@/_components/Bulb";
import { BsArrowRight } from "react-icons/bs";


const Contact = () => {


  return (
    <div id="contact" className="relative overflow-hidden h-auto bg-primary/70">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-12">
            let's <span className="text-accent">connect</span>
          </h2>

          {/* form */}
          <form className="flex-1 flex flex-col gap-6 w-full mx-auto">

            {/* group */}
            <div className="flex gap-6 w-full flex-wrap xs:flex-nowrap">
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>

              <input type="text" placeholder="Subject" className="input" />
              <textarea type="text" placeholder="Message" className="textarea"></textarea>

              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all
               duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let's talk</span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100
                 transition-all duration-300 absolute text-[22px]"/>
              </button>

          </form>

        </div>
      </div>
      {/* bulb */}
      <div><Bulb /></div>
    </div>
  );
};

export default Contact;
