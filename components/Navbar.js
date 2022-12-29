import { Tooltip } from "flowbite-react";
import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillLightbulbFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="w-12 mx-auto mt-10">
      <ul className="space-y-10">
        <li className="bg-primary rounded-full p-2">
          <Link href={"/"}>
            <Tooltip content="Home" placement="right" animation="duration-500">
              <BiHomeAlt className="w-8 h-8"></BiHomeAlt>
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link href={"/allTasks"}>
            <Tooltip
              content="All Task"
              placement="right"
              animation="duration-500"
            >
              <BsFillLightbulbFill className="w-8 h-8"></BsFillLightbulbFill>
            </Tooltip>
          </Link>
        </li>
        <li>
          <BiHomeAlt className="w-8 h-8"></BiHomeAlt>
        </li>
        <li>
          <BiHomeAlt className="w-8 h-8"></BiHomeAlt>
        </li>
        <li>
          <BiHomeAlt className="w-8 h-8"></BiHomeAlt>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
