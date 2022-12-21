import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Icon } from "@iconify/react";

import { LoginRecruiter as loginAction } from "../redux/actions/authAction";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .password()
    .min(6, "Min lenght 6")
    .minLowercase(1, "Min lowercase 1")
    .minUppercase(1, "Min uppercase 1")
    .minNumbers(1, "Min numbers 1")
    .minSymbols(1, "Min symbol 1")
    .required("Required"),
});

// import { login } from "../redux/actions/authAction";
const LoginRecruiter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    //  error,
    loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (value) => {
    const email = value.email;
    const password = value.password;
    dispatch(loginAction({ email, password, cb: () => navigate("/") }));
  };
  return (
    <div className="flex font-sans">
      <div className="hidden md:block md:w-[50%] lg:flex-1 relative">
        <img
          className="absolute w-32 top-[30px] pl-[30px]"
          src={require("../assets/images/FFS-removebg.png")}
          alt="Logo"
        />
        <img
          className="absolute h-[100vh] w-[100%] z-[-1]"
          src={require("../assets/images/banner.png")}
          alt="Banner"
        />
        <div className="absolute z-[-1] bg-primary h-[100vh] w-[100%] opacity-80"></div>
        <div className="flex items-center justify-center h-[100vh] px-[40px]">
          <p className="text-white w-[450px] font-bold md:text-[3.5vw] leading-relaxed">
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </p>
        </div>
      </div>
      <div className="h-screen w-full px-[10%] pb-[50px] md:pb-[0px] md:w-[50%] lg:flex-1 flex flex-col justify-center md:px-14 bg-[#E5E5E5] overflow-y-auto">
        <div className="md:hidden block">
          <img
            className="h-auto w-[20%] mb-[50px] ml-auto"
            src={require("../assets/images/logo1.png")}
            alt="backgroundimage"
          />
        </div>
        <div className="text-[32px] font-bold mb-4">Halo, Recruiter</div>
        <p className="test-base mb-[30px]">Login dengan akunmu</p>
        {/* {error && (
          <div className="text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md">
            {error}
          </div>
        )} */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, dirty }) => (
            <Form>
              <div className="mb-5">
                <label className="block mb-2" htmlFor="email">
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  placeholder="Masukan alamat email"
                  className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                ></Field>
                {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <div className="mb-5 relative">
                <label className="block mb-2" htmlFor="password">
                  Kata Sandi
                </label>
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan kata sandi"
                  className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                ></Field>
                {showPassword ? (
                  <Icon
                    className="absolute top-[50%] right-4 w-[30px] h-auto"
                    icon="mdi:eye"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <Icon
                    className="absolute top-[50%] right-4 w-[30px] h-auto"
                    icon="mdi:eye-off"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}

                {errors.password && touched.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}
              </div>
              <div className="text-end mb-5">
                <Link
                  to="/reset-password"
                  className="text-end cursor-pointer hover:text-[#5E50A1]"
                >
                  Lupa kata sandi?
                </Link>
              </div>
              <div className="mb-5">
                <button
                  className="btn btn-warning border-[1px] border-solid border-[#FBB017] w-[100%] pl-3 h-[50px] rounded-[4px] text-white"
                  type="submit"
                  disabled={!dirty || loading}
                >
                  Masuk
                </button>
              </div>
              <p className="text-center">
                Anda belum punya akun?{" "}
                <Link
                  to="/register-recruiter"
                  className="text-primary hover:font-bold"
                >
                  Daftar disini
                </Link>
              </p>
              <p className="text-center mt-3">
                Daftar sebagai Pekerja?{" "}
                <Link
                  to="/register-employee"
                  className="text-primary hover:font-bold"
                >
                  Daftar disini
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginRecruiter;
