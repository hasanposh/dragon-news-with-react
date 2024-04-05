import { IoLogoGoogle } from "react-icons/io";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSidesNav = () => {
  return (
    <div className="p-4 space-y-10">
      <div className="space-y-3 ">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-ghost border-black text-lg w-full">
          <IoLogoGoogle />
          Login WIth Google
        </button>
        <button className="btn btn-ghost border-black text-lg w-full">
          <FaGithub />
          Login WIth gitHub
        </button>
      </div>
      <div className="">
        <h2 className="text-2xl my-5">Find Us On</h2>
        <a className="flex items-center gap-3 border p-4 rounded-t-md text-lg w-full">
          <FaFacebook />
          Facebook
        </a>
        <a className="flex items-center gap-3 border-x p-4 text-lg w-full">
          <FaTwitter />
          Twitter
        </a>
        <a className="flex items-center gap-3 border p-4 r rounded-b-md text-lg w-full">
          <FaSquareInstagram />
          Instragram
        </a>
      </div>
      {/* qZone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSidesNav;
