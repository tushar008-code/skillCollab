import { Button } from "@/components/ui/button";
import { useAuthUser } from "@/hooks/useAuthUser";
import { MdEdit } from "react-icons/md";

function ProfileCard() {
  const { authUser } = useAuthUser();
  console.log(authUser);

  return (
    <div className="profile-card relative object-cover text-white rounded-lg overflow-hidden max-h-[255px] h-full after:h-full after:w-full after:absolute after:top-0 after:left-0  after:bg-black/70">
      <img
        src={authUser?.coverPhoto}
        alt=""
        className="w-full h-[255px] object-cover"
      />
      <div className="box absolute top-0 left-0 flex items-center z-10 flex-col justify-center text-center h-full w-full">
        <img
          src={authUser?.profilePhoto}
          alt=""
          className="h-16 w-16 rounded-full object-cover mb-5"
        />
        <h3 className="font-bold text-lg ">
          {authUser?.firstName + " " + authUser?.lastName}
        </h3>
        <h4 className="font-medium text-xs mb-4">{authUser?.expertise}</h4>
        <Button variant={"outline"} className="h-30 flex gap-[5px]">
          <MdEdit size={12} />
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

export default ProfileCard;
