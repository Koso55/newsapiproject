// import { handleLoginAction } from "@/actions/login";
import { cookies } from "next/headers";
import Link from "next/link";
import { FaStickerMule } from "react-icons/fa";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default function NavBar() {
  // console.log(isLoggedIn, "<<<<<<FROM NAVBAR");
  return (
    <>
      <div id="NAVBAR-MOTHER" className="navbar bg-black sticky top-0 z-50">
        {/* NAVBAR KIRI */}

        <div className="navbar-start flex">
          <Link href="/">
            <p className="btn btn-ghost text-xl text-white">
              <FaStickerMule className="text-4xl m-0, p-0" />
              The Mule™
            </p>
          </Link>
        </div>

        {/* TITLE */}
        <div className="navbar-center"></div>

        <div className="navbar-end flex">
          <form className="flex w-96">
          {/* <form className="flex" onSubmit={handleSearch}> */}
            <input
              type="text"
              placeholder="search news"
              name="search"
              className="input input-bordered w-full flex-auto"
            />
            <button className="btn btn-ghost btn-circle" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
