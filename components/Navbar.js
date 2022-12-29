import { BiHomeAlt } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className="w-12 mx-auto mt-10">
      <ul className="space-y-10">
        <li className="bg-primary rounded-full p-2">
            <BiHomeAlt className="w-8 h-8"></BiHomeAlt>
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
        <li>
            <BiHomeAlt className="w-8 h-8"></BiHomeAlt>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
