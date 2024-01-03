import Image from "next/image";
import Link from "next/link";

// icon
import { BsArrowRight } from 'react-icons/bs'

// data
const workSlides = {

  images: [
    {
      title: 'title',
      path: '/thumb1.png',
      githubUrl: 'https://github.com/zeeshan-ahmed-smit/Movies-website-using-react.js.git',
      liveUrl: 'https://themovix.surge.sh/',
    },
    {
      title: 'title',
      path: '/thumb2.png',
      githubUrl: 'https://github.com/zeeshan-ahmed-smit/barber-website-landing-page.git',
      liveUrl: 'https://zeeshan-barber.netlify.app/',
    },
    {
      title: 'title',
      path: '/thumb8.png',
      githubUrl: 'https://github.com/zeeshan-ahmed-smit/Developer-Portfolio-Nextjs.git',
      liveUrl: 'https://zeeshanafridi.vercel.app',
    },
    {
      title: 'title',
      path: '/thumb6.png',
      githubUrl: 'https://github.com/zeeshan-ahmed-smit/Developer-PortFolio_HTML_CSS_JS',
      liveUrl: 'https://developer-prtfolio-2023.netlify.app',
    },
  ],
};



const WorkSlider = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
      {workSlides.images.map((image, index) => {
        return (
          <div key={index} className="w-full">
                <div className="relative rounded-lg overflow-hidden flex item justify-center group">
                  <div className="flex items-center justify-center relative overflow-hidden">
                    {/* image */}
                    <Image src={image.path} alt="" width={500} height={300} />
                    {/*overflow gradient  */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] 
                          opacity-0 group-hover:opacity-80 transition-all duration-700 ">
                    </div>
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-20 sm:group-hover:-translate-y-10  group-hover:xl:-translate-y-14
                       transition-all duration-300">
                      <Link href={image.liveUrl}  className="flex p-1 mb-3 items-center cursor-pointer  gap-x-2 text-[16px] tracking-[0.2em]">
                        {/* title part 1 */}
                        <div className="delay-100">Live</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">Project</div>
                        {/* icon */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </Link>
                      <Link href={image.githubUrl} className="flex  p-1 items-center cursor-pointer gap-x-2 text-[16px] tracking-[0.2em]">
                        {/* title part 1 */}
                        <div className="delay-100">Github</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">Link</div>
                        {/* icon */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
          </div>
        );
      })}
    </div>
  )
};

export default WorkSlider;

