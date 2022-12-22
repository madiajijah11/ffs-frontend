import { Link } from "react-router-dom";
import Logo from "../assets/images/FFS-removebg.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducers";
import jwt_decode from "jwt-decode";

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
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const decode = jwt_decode(token);
  const role = decode.role;

  return (
    <>
      <nav className="navbar bg-base-100 px-2 sm:px-20 py-6">
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
          </div>
          <Link to="#" className="normal-case text-xl font-bold">
            <img src={Logo} alt="Logo" className="w-20" />
          </Link>
          {role === "2" && (
            <Link to="/home" className="normal-case text-xl font-bold">
              Home
            </Link>
          )}
        </div>
        <div className="navbar-end">
          <div className="hidden sm:inline dropdown dropdown-end mr-1">
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
          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline btn-primary mr-2">
                Profile
              </Link>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login-employee"
                className="btn btn-outline btn-primary mr-2"
              >
                Masuk
              </Link>
              <Link to="/register-employee" className="btn btn-primary">
                Daftar
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
