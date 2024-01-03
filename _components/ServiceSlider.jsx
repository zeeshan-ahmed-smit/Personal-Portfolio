// icons
import {
  RxDesktop,
  RxArrowTopRight
} from "react-icons/rx";

// service Data
const serviceData = [

  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'Empower your brand online with our expert web development services, creating sleek and functional websites that captivate your audience.',
  },
  {
    icon: <RxDesktop />,
    title: 'App Development',
    description: 'Elevate your digital footprint with our expert app development services, delivering innovative and user-centric solutions for seamless mobile experiences.',
  },
];

const ServiceSlider = () => {
  return (
    <div className=" flex gap-5 flex-col sm:flex-row">
      {serviceData.map((item, index) => {
        return (
          <div key={index} className="bg-[rgba(65,47,123,0.15)] w-full h-[300px] rounded-lg px-6 py-8 flex
             flex-col gap-x-5 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icons */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* title,desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 
                group-hover:text-accent transition-all duration-300"/>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default ServiceSlider;
