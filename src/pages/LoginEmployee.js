import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginEmployee as loginAction } from "../redux/actions/authAction";

const LoginEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { error, loading } = useSelector((state) => state.auth);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAction({ ...value, cb: () => navigate("/") }));
  };

  return (
    <div className="px-4 py-10 md:px-20 md:py-10 flex ">
      <div className="hidden md:block bg-sign bg-cover flex-[0.6]">
        <div className="bg-primary opacity-50 h-full w-full p-11">
          <div>
            <img
              className="h-10 w-10 mb-32"
              src={require("../assets/images/logo1.png")}
              alt="backgroundimage"
            />
          </div>
          <div className="text-[40px] font-bold">
            <div>Temukan developer</div>
            <div>berbakat & terbaik</div>
            <div>di berbagai bidang</div>
            <div>keahlian</div>
          </div>
        </div>
      </div>
      <div className="pt-0 pl-0 md:pt-28 md:pl-16 flex-1 md:flex-[0.5] w-full">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="md:hidden block">
              <img
                className="h-10 w-10 mb-32"
                src={require("../assets/images/logo1.png")}
                alt="backgroundimage"
              />
            </div>
            <div className="text-[32px] font-bold mb-4">Halo, Pewpeople</div>
            <p className="test-base mb-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            {/* {error && (
              <div className="text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md">
                {error}
              </div>
            )} */}

            <div className="flex flex-col mb-8">
              <label className="mb-1" htmlFor="email">
                Email
              </label>
              <input
                // value={value.email}
                // onChange={(event) =>
                //   setValue({ ...value, email: event.target.value })
                // }
                className="p-4"
                type="email"
                name="email"
                placeholder="Masukan alamat email"
                value={value.email}
                onChange={(event) =>
                  setValue({ ...value, email: event.target.value })
                }
              ></input>
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-1" htmlFor="password">
                Kata Sandi
              </label>
              <input
                // value={value.password}
                // onChange={(event) =>
                //   setValue({ ...value, password: event.target.value })
                // }
                className="p-4"
                type="password"
                name="password"
                placeholder="Masukan kata sandi"
                value={value.password}
                onChange={(event) =>
                  setValue({ ...value, password: event.target.value })
                }
              ></input>
            </div>
            <Link to='/reset-password'>
              <div className="flex justify-end mb-6">Lupa kata sandi?</div>
            </Link>
            <div>
              <button className="btn w-full" type="submit"
              // disabled={loading}
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
        <div className="mt-7 text-center">
          <span>Anda belum punya akun? </span>
          <Link to="/register-employee">
            <span>Daftar Disini</span>
          </Link>
        </div>
        <div className="mt-7 text-center">
          <span>Login sebagai Recruiter? </span>
          <Link to="/login-recruiter">
            <span>Login Disini</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginEmployee;
