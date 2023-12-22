import ServiceSlider from "@/_components/ServiceSlider";
import Bulb from "@/_components/Bulb";

const Services = () => {
  return (
    <div id="services" className="h-screen bg-primary/30 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-14">
          {/* text */}
          <div className="text-center flex xl:w-[32vw] flex-col lg:text-left mb-4
          xl:mb-0">
            <h2 className="h2">
              My Services <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic explicabo? Laudantium,
              itaque? Temporibus, non. Sequi nesciunt earum rerum ea autem eius quos? Neque nihil qui assumenda sint,
              </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
          {/* slider */}
          <ServiceSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;