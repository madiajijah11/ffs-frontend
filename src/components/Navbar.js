const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#">Item 1</a>
              </li>
              <li tabIndex={0}>
                <a href="#" className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="#">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#">Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn btn-ghost normal-case text-xl">
            FFS
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#">Item 1</a>
            </li>
            <li tabIndex={0}>
              <a href="#">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="#">Submenu 1</a>
                </li>
                <li>
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end mr-1">
            <div tabIndex={0} className="btn gap-1 normal-case btn-ghost">
              <span className="hidden md:inline">Theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2x1 mt-16">
              <div className="grid grid-cols1 gap-3 p-3" tabIndex={0}>
                {themes.map((theme) => (
                  <div
                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
                    data-set-theme={theme}
                    key={theme}
                    data-act-classname="outline"
                  >
                    <div
                      data-theme={theme}
                      className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                    >
                      <div className="grid grid-cols-5 grid-rows-3">
                        <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                          <div className="flex-grow text-sm font-bold">
                            {theme}
                          </div>
                          <div className="flex flex-shrink-0 flex-wrap gap-1">
                            <div className="bg-primary w-2 rounded" />
                            <div className="bg-secondary w-2 rounded" />
                            <div className="bg-accent w-2 rounded" />
                            <div className="bg-neutral w-2 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            Get started
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
