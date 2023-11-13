import React, { useContext } from "react";

import { ImProfile, ImLibrary, ImHistory, ImStatsBars2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { authContext } from "../context/authContext";
import { v4 } from "uuid";

const footer = [
  "Help",

  "Status",

  "Writers",

  "Blog",

  "Careers",

  "Privacy",

  "Terms",

  "About",

  "Text to speech",

  "Teams",
];

const ProfileOptions = () => {
  const { auth } = useContext(authContext);
  return (
    <div className="w-full bg-white max-h-[90vh] overflow-y-scroll no-scrollbar">
      <div>
        <div className="p-3 w-full border-b-[1px] border-gray-200 text-gray-500">
          <Link className="flex gap-3 items-center my-3 text-lg">
            <ImProfile className="text-2xl" /> <p>Profile</p>
          </Link>
          <Link className="flex gap-3 items-center my-3 text-lg">
            <ImLibrary className="text-2xl" /> <p>Library</p>
          </Link>
          <Link className="flex gap-3 items-center my-3 text-lg">
            <ImHistory className="text-2xl" /> <p>Stories</p>
          </Link>
          <Link className="flex gap-3 items-center my-3 text-lg">
            <ImStatsBars2 className="text-2xl" /> <p>Stats</p>
          </Link>
        </div>

        <div className="p-3 border-b-[1px] border-gray-200 flex flex-col gap-3 text-[14px] text-gray-500">
          <Link>Settings</Link>
          <Link>Refine recommendations</Link>
          <Link>Manage publications</Link>
          <Link>Help</Link>
        </div>

        <div className="p-3 border-b-[1px] border-gray-200 flex flex-col gap-3 text-[14px] text-gray-500">
          <Link>Become a Medium Member</Link>
          <Link>Create a Masterdom account</Link>
          <Link>Apply for author verification</Link>
          <Link>Apply to the Partner Program</Link>
          <Link>Gift a membership</Link>
        </div>

        <div className="p-3 border-b-[1px] border-gray-200 flex flex-col gap-2 text-[14px] text-gray-500">
          <Link>Sign out</Link>
          <p>{auth.user.email}</p>
        </div>

        <div className="p-3  flex flex-wrap gap-1 text-[.7rem] text-gray-500">
          {footer && footer.map((item) => <Link key={v4()}>{item}</Link>)}
        </div>
      </div>
    </div>
  );
};

export default ProfileOptions;
