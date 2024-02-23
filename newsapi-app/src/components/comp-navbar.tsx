"use client";
import { cookies } from "next/headers";
import Link from "next/link";
import { FaStickerMule } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  // console.log(pathname, "pathname navbar");
  const handleToSearchPage = (event: any) => {
    event.preventDefault();
    // console.log(event.target.search.value);
    router.push(`/search?q=${event.target.search.value}`);
  };
  return (
    <>
      <div className="navbar bg-black sticky top-0 z-50">
        <div className="navbar-start flex">
          <Link href="/">
            <p className="btn btn-ghost text-xl text-white">
              <FaStickerMule className="text-4xl m-0, p-0" />
              The Mule™
            </p>
          </Link>
        </div>

        {pathname !== "/search" && (
          <div className="navbar-end flex">
            <form className="flex w-96" onSubmit={handleToSearchPage}>
              {/* <form className="flex w-96" onSubmit={handleSearch}> */}
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
        )}
      </div>
    </>
  );
}
