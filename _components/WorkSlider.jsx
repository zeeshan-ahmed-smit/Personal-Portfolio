import Image from "next/image";

// icon
import { BsArrowRight } from 'react-icons/bs'

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};


import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { Navigation, Pagination } from 'swiper/modules'

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[240px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className="relative rounded-lg overflow-hidden flex item justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden">
                      {/* image */}
                      <Image src={image.path} alt="" width={500} height={300} />
                      {/*overflow gradient  */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] 
                          opacity-0 group-hover:opacity-80 transition-all duration-700 ">
                      </div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:translate-y-10 group-hover:xl:-translate-y-20
                       transition-all duration-300">
                        <div className="flex items-center cursor-pointer mb-5  gap-x-2 text-[16px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">Live</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">Project</div>
                          {/* icon */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                        <div className="flex items-center cursor-pointer gap-x-2 text-[16px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">Github</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">Link</div>
                          {/* icon */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
};

export default WorkSlider;

