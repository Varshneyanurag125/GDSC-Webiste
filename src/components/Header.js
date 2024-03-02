import Link from "next/link";
import Image from "next/image";
import Profile from "../../public/gdscweblogo.png";

export default function Header() {
    return(
        <div className="fixed w-3/4 my-5 z-50 left-48">
            <nav className="relative px-1 py-2 flex justify-between items-center bg-transparent border border-gray-600 rounded-full">
          <Link className=" leading-none flex items-center justify-center gap-2 lg:mr-2" href="#">
			<Image height={35} width={35} src={Profile}alt="logo" className="lg:ml-3 line-clamp-2 object-fill"></Image>
			<span className=" capitalize font-normal text-white text-lg line-clamp-3">Google devlepor student clubs</span>
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
              <Link className=" hover:text-gray-100 px-1 py-3" href="/members" target="/blank">
                Members
              </Link>
            </li>
            <li>
              <Link className=" hover:text-gray-100 px-1 py-3" href="#">
                Blogs
              </Link>
            </li>
            <li>
              <Link className=" hover:text-gray-100 px-1 py-3" href="#">
                About
              </Link>
            </li>
          </ul>
          <Link className="hidden lg:inline-block lg:mr-3 lg:ml-2  bg-white  rounded-full "
            href="/">
				<button className=" px-8 z-30 py-2 bg-green-500 rounded-full text-white relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-green-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-54f00 after:transition-all after:duration-500 transition-all duration-700 text-base">Login</button>
			</Link>
        </nav>

        <div className="navbar-menu relative z-50 hidden">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 flex flex-col w-3/5 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto rounded-r-xl">
            <div className="flex items-center mb-8">
              <Link className="mr-auto flex items-center justify-center leading-none" href="/">
             	<Image height={20} width={20} src="" alt="logo" ></Image>
			 	<span className=" capitalize">Google Developer Student clubs</span>
              </Link>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link
                    className="block p-4 hover:bg-black hover:text-white rounded-full"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 hover:bg-black hover:text-white rounded-full"
                    href="/"
                  >
                    Members
                  </Link>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 hover:bg-black hover:text-white rounded-full"
                    href="/"
                  >
                    Blogs
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 hover:bg-black hover:text-white rounded-full"
                    href="/"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-4 mb-3 leading-loose text-xs text-center text-white bg-blue-600 hover:bg-blue-500 rounded-xl"
                  href="#"
                >
                  Log In
                </a>
              </div>
            </div>
          </nav>
        </div>
        </div>
    )
}