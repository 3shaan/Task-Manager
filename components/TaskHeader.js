import Image from "next/image";
import { FaSearchengin } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import TaskAddModal from "./TaskAddModal";
import { useState } from "react";
const TaskHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between">
      <div>
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearchengin className="text-xl text-gray-600"></FaSearchengin>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div>
        <button 
          onClick={()=>setOpen(true)}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center gap-1"
        >
         <AiOutlinePlus className="text-xl"></AiOutlinePlus>  New Task 
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
        <p>Benjamin</p>
      </div>
      <TaskAddModal open={open} setOpen={setOpen}></TaskAddModal>
    </div>
  );
};

export default TaskHeader;
