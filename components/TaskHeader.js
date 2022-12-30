import Image from "next/image";
import { FaBars, FaSearchengin } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import TaskAddModal from "./TaskAddModal";
import { useContext, useState } from "react";
import { authContext } from "../Context/Context";
import Link from "next/link";
const TaskHeader = () => {
  const {user } = useContext(authContext);
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const handleDarkMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
    setIsDark(true);
  };
  const handleLightMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    setIsDark(false);
  };
  return (
    <div className="flex justify-between px-2 lg:px-0 items-center">
      <div className="ml-4 hidden lg:block">
        <form className="flex items-center">
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearchengin className="text-xl text-gray-600"></FaSearchengin>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div>
        <button
          onClick={() => setOpen(true)}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center gap-1"
        >
          <AiOutlinePlus className="text-xl"></AiOutlinePlus> New Task
        </button>
      </div>
      <div className="flex gap-4">
        <Image
          src="https://i.ibb.co/5GCh95n/houyaka.png"
          alt=""
          width={40}
          height={40}
          className="rounded-lg"
        />
        <div>
          <p className="text-blue-700 font-semibold">
            {user?.displayName || "New User"}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-100">Personal</p>
        </div>
      </div>
      <div className="lg:hidden">
        <FaBars
          onClick={() => setIsMenuOpen(true)}
          className="text-3xl"
        ></FaBars>
      </div>

      <div className="text-3xl">
        {isDark ? (
          <BsSun onClick={handleLightMode} className='text-white'></BsSun>
        ) : (
          <BsFillMoonFill onClick={handleDarkMode}></BsFillMoonFill>
        )}
      </div>
      <div>
        {isMenuOpen && (
          <div class="absolute top-0 left-0 w-full z-50">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <Link
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                  >
                    <svg
                      class="w-8 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      stroke="currentColor"
                      fill="none"
                    >
                      <rect x="3" y="1" width="7" height="12" />
                      <rect x="3" y="17" width="7" height="6" />
                      <rect x="14" y="1" width="7" height="6" />
                      <rect x="14" y="11" width="7" height="12" />
                    </svg>
                    <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      Task Manager
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Home"
                      title="Home"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/allTasks"}
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Our product"
                      title="Our product"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      My Task
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/complete_task"}
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Product pricing"
                      title="Product pricing"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Complete Task
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sign in"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Sign in"
                      title="Sign in"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Sign up
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
      <TaskAddModal open={open} setOpen={setOpen}></TaskAddModal>
    </div>
  );
};

export default TaskHeader;
