// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

import Link from 'next/link';
// import { useRouter } from 'next/router';


// nav data
export const navData = [
  { name: 'home', path: '/#home', icon: <HiHome /> },
  { name: 'about', path: '/#about', icon: <HiUser /> },
  { name: 'services', path: '/#services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/#work', icon: <HiViewColumns /> },
  {
    name: 'contact',
    path: '/#contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  // const router = useRouter();
  // const pathName = router.pathname;

  return (
    <nav className='flex flex-col gap-y-4 items-center 
    xl:justify-center fixed h-max bottom-0 mt-auto xl:right-[2%] 
     w-full xl:w-16 xl:max-w-md xl:h-screen z-50'>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between 
      xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 
      bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>

        {navData.map((link, index) => {
          return <Link
            href={link.path}
            key={index}
            className="relative flex item-center group hover:text-accent transition-all duration-300">
            {/* tooltip */}
            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[5px]'>
                <div className='text-[12px] leading-none capitalize font-semibold'>{link.name}</div>
                {/* triangle */}
                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
              </div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        })}

      </div>
    </nav>
  )
};

export default Nav;
