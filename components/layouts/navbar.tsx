import Image from "next/image";
import ShoppingCartIcon from "../icons/shopping-cart";

export default function Navbar() {
  return (
    <nav className="relative z-50">
      <div
        className="bg-white flex items-center justify-between mx-auto px-4 py-2 md:py-3 fixed w-full"
        style={{
          borderBottom: "1px solid #f1e0ff",
        }}
      >
        <div className="w-full block w-auto pl-0">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex space-x-2 items-center">
              <div className="logo">
                <Image
                  src="https://static.myalbum.io/_static/logo.svg"
                  alt="logo"
                  width={115}
                  height={21}
                />
              </div>
              <span className="self-center text-slate-700 hidden md:block">
                myalbum
              </span>
            </a>

            <span
              className="self-center pl-3 hidden md:block"
              style={{
                borderLeft: "1px solid #171717",
              }}
            >
              Photo Albums Reinvented
            </span>
          </div>
        </div>
        <div className="w-full block w-auto" id="navbar-default">
          <ul className="flex items-center md:p-0 flex-row space-x-2 md:space-x-5 justify-end">
            <li>
              <a href="#" className="block" aria-current="page">
                <button className="px-4 py-2 border-0">
                  <ShoppingCartIcon />
                </button>
              </a>
            </li>
            <li>
              <a href="#" className="block" aria-current="page">
                <button className="rounded-full px-4 py-1 border-slate-700 border border-solid hover:bg-violet-700 hover:text-white hover:border-violet-700">
                  Login
                </button>
              </a>
            </li>
            <li>
              <a href="#" className="block" aria-current="page">
                <button className="rounded-full bg-violet-700	text-white border-violet-700 px-4 py-1 border-solid border hover:opacity-50">
                  Register
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
