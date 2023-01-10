import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiShoppingBag, HiUser } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import Link from "next/link";
import { useContext, useState } from "react";
import ProjectAddModal from "./ProjectAddModal";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { authContext } from "../Context/Context";
const ProjectBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { user } = useContext(authContext);
  const { data:project , isLoading, isError, error} = useQuery({
    queryKey: ['project single'],
    queryFn: async () => {
       const res = await fetch(
         `/api/projects?email=eshan@eshan.com`
       );
      const data = await res.json();
      return data;
    }
  })
  console.log(project)

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }
  return (
    <div>
      <aside class="w-64" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Project
            </span>
            <div>
              <button
                onClick={() => setModalOpen(true)}
                className="text-primary flex items-center gap-1"
              >
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
            {project &&
              project.map((pro) => {
                return ( <li key={pro._id}>
                  <Link
                    href={`/project/${pro?.ProjectName}`}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {/* <ImOffice className="text-xl"></ImOffice> */}
                    <span class="ml-3">{pro?.ProjectName}</span>
                    
                  </Link>
                </li>)
              })}
          </ul>
        </div>
      </aside>
      <ProjectAddModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      ></ProjectAddModal>
    </div>
  );
};

export default ProjectBar;
