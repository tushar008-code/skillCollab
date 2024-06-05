import { Button } from "@/components/ui/button";
import { useAuthUser } from "@/hooks/useAuthUser";

function Profile() {
  const { authUser } = useAuthUser();
  return (
    <section className="profile-sec">
      <div className="container">
        <div className="profile-head rounded-xl overflow-hidden shadow-lg">
          <div className="profile-top relative">
            <img
              src={authUser?.coverPhoto}
              alt=""
              className="h-[250px] w-full object-cover object-[0px_-160px] brightness-50"
            />
            <Button
              variant={"outline"}
              className="absolute bottom-5 right-10 text-white h-[35px]"
            >
              Edit Cover Photo
            </Button>
          </div>
          <div className="profile-bottom px-10 pb-10">
            <div className="left flex items-start gap-5">
              <img
                src={authUser?.profilePhoto}
                alt=""
                className="h-[180px] w-[180px] relative mt-[-90px] object-cover rounded-full"
              />
              <div className="text">
                <h4 className="text-3xl font-bold mt-4 mb-1">
                  {authUser?.firstName + " " + authUser?.lastName}
                </h4>
                <p className="text-base text-gray-500 mb-1">
                  {authUser?.description}
                </p>
                <h6 className="text-[#198aaa] font-semibold">
                  {authUser?.followers?.length} followers
                </h6>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
        <div className="profile-body"></div>
      </div>
    </section>
  );
}

export default Profile;
