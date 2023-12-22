import { useState } from "react";
// import { Fade } from "react-awesome-reveal";
// import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState<boolean>(false);
  const onProfile = () => {
    setProfile(!profile);
  };
  return (
    <header
      className=" flex items-center justify-between max-md:hidden relative hover:cursor-pointer z-[9999]"
      onClick={() => {
        onProfile();
      }}
      onMouseEnter={onProfile}
      onMouseLeave={onProfile}
    >
      <img
        // src={vite}
        alt=""
        className="w-[50px] h-[50px] rounded-full border object-cover"
      />
      <div className=" ml-4 leading-tight">
        <div className="font-bold">Francis Uzoigwe</div>
        <div className="text-[13px]">Afara Technical School</div>
      </div>
      {/* {profile ? (
        <Fade>
          <div className="w-full h-[250px] rounded-md bg-white pl-3 flex flex-col shadow-2xl absolute left-0 top-12 transition-all duration-300 z-[9999]">
            <img
              src=""
              alt=""
              className="w-[70px] h-[70px] rounded-full border bg-red-500 mt-2"
            />
            <div>Francis Uzoigwe</div>
            <Link to="/auth">
              <div className="font-bold my-2">Dashboard</div>
            </Link>
            <Link to="/auth/profile">
              <div className="font-bold my-2">Profile</div>
            </Link>
            <div className="font-bold my-2 hover:scale-105 transition-all duration-300">
              Logout
            </div>
          </div>
        </Fade>
      ) : null} */}
    </header>
  );
};

export default Profile;
