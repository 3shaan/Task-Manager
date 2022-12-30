import { Tooltip } from "flowbite-react";
import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { IoPersonAddSharp } from "react-icons/io5";
import { BsFillCalendarCheckFill, BsFillLightbulbFill } from "react-icons/bs";
import { useContext } from "react";
import { useRouter } from "next/router";
import { authContext } from "../Context/Context";

const Navbar = () => {
  const router = useRouter();
  const { user , logOut} = useContext(authContext);
  return (
    <nav className="w-12 mx-auto mt-10">
      <ul className="space-y-10">
        <li
          className={
            router.pathname == "/" ? "bg-primary rounded-full p-2" : ""
          }
        >
          <Link href={"/"}>
            <Tooltip content="Home" placement="right" animation="duration-500">
              <BiHomeAlt className="w-8 h-8"></BiHomeAlt>
            </Tooltip>
          </Link>
        </li>
        <li
          className={
            router.pathname == "/allTasks" ? "bg-primary rounded-full p-2" : ""
          }
        >
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
        <li
          className={
            router.pathname == "/complete_task"
              ? "bg-primary rounded-full p-2"
              : ""
          }
        >
          <Link href={"/complete_task"}>
            <Tooltip
              content="Complete Task"
              placement="right"
              animation="duration-500"
            >
              <BsFillCalendarCheckFill className="w-7 h-7"></BsFillCalendarCheckFill>
            </Tooltip>
          </Link>
        </li>
        {user?.uid ? (
          <>
            <li onClick={logOut}>
              <div>
                <Tooltip
                  content="Login"
                  placement="right"
                  animation="duration-500"
                >
                  <FiLogOut className="w-7 h-7"></FiLogOut>
                </Tooltip>
              </div>
            </li>
          </>
        ) : (
          <>
            <li
              className={
                router.pathname == "/login" ? "bg-primary rounded-full p-2" : ""
              }
            >
              <Link href={"/login"}>
                <Tooltip
                  content="Login"
                  placement="right"
                  animation="duration-500"
                >
                  <IoPersonAddSharp className="w-7 h-7"></IoPersonAddSharp>
                </Tooltip>
              </Link>
            </li>
            <li
              className={
                router.pathname == "/signup"
                  ? "bg-primary rounded-full p-2"
                  : ""
              }
            >
              <Link href={"/signup"}>
                <Tooltip
                  content="Sign up"
                  placement="right"
                  animation="duration-500"
                >
                  <IoPersonAddSharp className="w-7 h-7"></IoPersonAddSharp>
                </Tooltip>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
