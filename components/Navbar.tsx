import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return ( 
    <div>
      <ul>
        <div className="flex justify-between my-10 items-center">
          <Link href=".">
            <li>Home</li>
          </Link>
          <div className="flex gap-10">
            <ModeToggle/>
          </div>
        </div>
      </ul>
    </div>
   );
}
 
export default Navbar;