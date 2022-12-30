import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiShoppingBag, HiUser } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import Link from "next/link";
const ProjectBar = () => {
  return (
    <div>
      <aside class="w-64" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Project
            </span>
            <div>
              <button className="text-primary flex items-center gap-1">
                <AiOutlinePlus></AiOutlinePlus> Add New
              </button>
            </div>
          </div>
          <ul class="space-y-2">
            <li>
              <Link
                href="/project/Personal"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BsPersonFill className="text-xl"></BsPersonFill>
                <span class="ml-3">Personal</span>
              </Link>
            </li>
            <li>
              <Link
                href="/project/Family"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdFamilyRestroom className="text-xl"></MdFamilyRestroom>
                <span class="ml-3">Family</span>
              </Link>
            </li>
            <li>
              <Link
                href="/project/Office"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ImOffice className="text-xl"></ImOffice>
                <span class="ml-3">office</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default ProjectBar;
