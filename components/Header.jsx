import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4">
          <Link href={'/'}>
            <h1 className="text-[1.5rem] tracking-[.05em] font-lobster xs:text-[1.8rem] sm:text-[2.5rem]">Zeeshan <span className="text-accent">Ahmed</span></h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
