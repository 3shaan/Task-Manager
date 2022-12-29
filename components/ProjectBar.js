import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  
} from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
const ProjectBar = () => {
  return (
    <div>
      <div className="w-fit h-screen">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-semibold">Project</span>
                  <div>
                    <button className="text-primary flex items-center gap-1">
                      <AiOutlinePlus></AiOutlinePlus> Add New
                    </button>
                  </div>
                </div>
              </Sidebar.Item>
              <Sidebar.Collapse icon={BsPersonFill} label="Personal">
                <Sidebar.Item href="#">Products</Sidebar.Item>
                <Sidebar.Item href="#">Army</Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default ProjectBar;
