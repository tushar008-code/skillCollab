/** @format */

import { useAuthUser } from "@/hooks/useAuthUser";
import notifier from "./assets/Group.png";
import guestImg from "./assets/guest.png";
import { IoSearchSharp } from "react-icons/io5";
import useSearch from "../SearchBox/useSearch";

function OptionsBox({ role }: { role: string }) {
  const { authUser } = useAuthUser();
  const { setSearchForm } = useSearch();
  let userImg;
  if (role === "guest")
    userImg = (
      <img
        className="h-9 w-9 object-cover mobile:h-8 mobile:w-8 rounded-full border-black border-solid border-1px "
        src={guestImg}
        alt=""
      />
    );
  if (role === "user")
    userImg = (
      <img
        className="h-9 w-9 object-cover mobile:h-8 mobile:w-8 rounded-full border-black border-solid border-1px "
        src={authUser?.profilePhoto}
        alt=""
      />
    );

  return (
    <div className="options order-3 flex-1 mobile:order-2 mobile:basis-1/2 ">
      <ul className="flex items-center justify-end ">
        <li className="hidden mobile:block" onClick={() => setSearchForm(true)}>
          <IoSearchSharp size={24} />
        </li>
        {role === "user" && (
          <li className=" h-10 flex items-center justify-center w-10 rounded-full bg-white mobile:mx-2 ">
            <img className="h-5 w-5 object-cover" src={notifier} alt="" />
          </li>
        )}

        <li className="mx-4 mobile:mx-2">{userImg}</li>
      </ul>
    </div>
  );
}

export default OptionsBox;
