import Link from 'next/link';
import { BiHomeAlt2, BiUser, BiBulb } from 'react-icons/bi';
import { IoMdCodeWorking } from 'react-icons/io';

export default function Navbar() {
  return (
    <>
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 rounded-full bottom-4 left-1/2">
        <div className="flex justify-center items-center gap-20 md:gap-20 h-full max-w-lg mx-auto">
          <Link href="/">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <BiHomeAlt2 className="h-6 w-6 md:hidden text-white hover:text-pinks" />
              <p className="hidden text-white md:block md:hover:p-4 md:hover:rounded-full hover:bg-violets/10">About me</p>
            </div>
          </Link>
          <Link href="/skills">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <BiBulb className="h-6 w-6 md:hidden text-white hover:text-pinks" />
              <p className="hidden text-white md:block md:hover:p-4 md:hover:rounded-full hover:bg-violets/10">Skills</p>
            </div>
          </Link>
          <Link href="/projects">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <IoMdCodeWorking className="h-6 w-6 md:hidden text-white hover:text-pinks" />
              <p className="hidden text-white md:block md:hover:p-4 md:hover:rounded-full hover:bg-violets/10">Projects</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <BiUser className="h-6 w-6 md:hidden text-white hover:text-pinks" />
              <p className="hidden text-white md:block md:hover:p-4 md:hover:rounded-full hover:bg-violets/10">Contact</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
