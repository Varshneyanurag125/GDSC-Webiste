import Link from "next/link";
import Image from "next/image";
import Profile from "../../public/gdscweblogo.png";

export default function Header() {
  return (
    <div className="w-3/4 my-5 z-50 left-48">
      <nav className="relative px-1 py-2 flex justify-between items-center bg-transparent border border-gray-600 rounded-full">
        <Link
          className=" leading-none flex items-center justify-center gap-2 lg:mr-2"
          href="#"
        >
          <Image
            height={35}
            width={35}
            src={Profile}
            alt="logo"
            className="lg:ml-3 line-clamp-2 object-fill"
          ></Image>
          <span className=" capitalize font-normal text-white text-lg line-clamp-3">
            Google devlepor student clubs
          </span>
        </Link>
        <div className="lg:hidden">
          <button class="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden text-white font-normal lg:flex lg:mx-auto lg:items-center lg:w-auto lg:gap-9  flex-wrap">
          <li>
            <Link className=" hover:text-gray-100 px-1 py-3" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className=" hover:text-gray-100 px-1 py-3" href="/members">
              Members
            </Link>
          </li>
          <li>
            <Link
              className=" hover:text-gray-100 px-1 py-3"
              href="/MemberDetail"
            >
              Member Detail
            </Link>
          </li>
          <li>
            <Link className=" hover:text-gray-100 px-1 py-3" href="/timeline">
              Timeline
            </Link>
          </li>
        </ul>
        <Link
          className="hidden lg:inline-block lg:mr-3 lg:ml-2  bg-white  rounded-full "
          href="/"
        >
          <button className=" px-8 z-30 py-2 bg-green-500 rounded-full text-white relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-green-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-54f00 after:transition-all after:duration-500 transition-all duration-700 text-base">
            Login
          </button>
        </Link>
      </nav>
    </div>
  );
}
