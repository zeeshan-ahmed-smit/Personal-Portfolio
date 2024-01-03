import Link from "next/link";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill, RiGithubFill, RiInstagramFill } from 'react-icons/ri'

const Socials = () => {
  return (
    <div
      className="flex items-center gap-x-5 text-[1.2rem]">
      <Link href={'https://www.linkedin.com/in/zeeshan-ahmed-smit/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill />
      </Link>
      <Link href={'https://www.github.com/zeeshan-ahmed-smit/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100043989196385'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiFacebookFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiTwitterFill />
      </Link>
    </div>
  )
};

export default Socials;
