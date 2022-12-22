import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerEmployee } from "../redux/actions/authAction";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { Icon } from "@iconify/react";

YupPassword(Yup);

const RegisterEmployeeSchema = Yup.object().shape({
  fullName: Yup.string().required("Nama harus diisi"),
  email: Yup.string().email("Email tidak valid").required("Email harus diisi"),
  phoneNumber: Yup.string()
    .required("Nomor telepon harus diisi")
    .matches(/^[0-9]+$/, "Nomor telepon harus angka")
    .min(10, "Nomor telepon minimal 10 karakter")
    .max(13, "Nomor telepon maksimal 13 karakter"),
  password: Yup.string()
    .required("Password harus diisi")
    .min(6, "Password minimal 6 karakter")
    .minLowercase(1, "Password minimal 1 huruf kecil")
    .minUppercase(1, "Password minimal 1 huruf besar")
    .minNumbers(1, "Password minimal 1 angka")
    .minSymbols(1, "Password minimal 1 simbol"),
  confirmPassword: Yup.string()
    .required("Konfirmasi password harus diisi")
    .oneOf([Yup.ref("password"), null], "Password tidak sama"),
});

const RegisterEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex font-sans h-screen">
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
      <div className="w-full px-[10%] py-[50px] md:w-[50%] lg:flex-1 flex flex-col md:px-14 bg-[#E5E5E5] overflow-y-auto">
        <div>
          <div className="md:hidden block">
            <img
              className="h-auto w-[20%] mb-[50px] ml-auto"
              src={require("../assets/images/logo1.png")}
              alt="backgroundimage"
            />
          </div>
          <div className="text-[32px] font-bold mb-[15px]">Halo, Developer</div>
          <p className="test-base mb-[30px]">
            Daftar dan lamar pekerjaan impianmu, Good Luck !
          </p>
          {error && (
            <div className="text-center bg-warning border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md mt-5 mb-5">
              {error}
            </div>
          )}
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={RegisterEmployeeSchema}
            onSubmit={(values) => {
              dispatch(
                registerEmployee({
                  ...values,
                  cb: () => navigate("/"),
                })
              );
              console.log(values);
            }}
          >
            {({ errors, touched, dirty }) => (
              <Form>
                <div className="flex flex-col mb-8">
                  <label className="mb-1" htmlFor="fullName">
                    Nama
                  </label>
                  <Field
                    className="p-4"
                    type="text"
                    name="fullName"
                    placeholder="Masukan nama panjang"
                  />
                  {errors.fullName && touched.fullName ? (
                    <div className="text-red-500 text-sm">
                      {errors.fullName}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col mb-8">
                  <label className="mb-1" htmlFor="email">
                    Email
                  </label>
                  <Field
                    className="p-4"
                    type="email"
                    name="email"
                    placeholder="Masukan alamat email"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  ) : null}
                </div>
                <div className="flex flex-col mb-8">
                  <label className="mb-1" htmlFor="phoneNumber">
                    No Handphone
                  </label>
                  <Field
                    className="p-4"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Masukan nama No Handphone"
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div className="text-red-500 text-sm">
                      {errors.phoneNumber}
                    </div>
                  ) : null}
                </div>
                <div className="mb-8">
                  <div className="flex flex-col relative">
                    <label className="mb-1" htmlFor="password">
                      Kata Sandi
                    </label>
                    <Field
                      className="p-4"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Masukan kata sandi"
                    />
                    {showPassword ? (
                      <Icon
                        className="absolute top-[45px] right-4 w-[30px] h-auto"
                        icon="mdi:eye"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <Icon
                        className="absolute top-[45px] right-4 w-[30px] h-auto"
                        icon="mdi:eye-off"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                  {errors.password && touched.password ? (
                    <div className="text-red-500 text-sm">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="mb-8">
                  <div className="flex flex-col relative">
                    <label className="mb-1" htmlFor="confirmPassword">
                      Konfirmasi kata sandi
                    </label>
                    <Field
                      className="p-4"
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Masukan konfirmasi kata sandi"
                    />
                    {showPassword ? (
                      <Icon
                        className="absolute top-[45px] right-4 w-[30px] h-auto"
                        icon="mdi:eye"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <Icon
                        className="absolute top-[45px] right-4 w-[30px] h-auto"
                        icon="mdi:eye-off"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="text-red-500 text-sm">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
                <div>
                  <button
                    className="btn btn-warning w-full rounded-[8px] mb-5"
                    type="submit"
                    disabled={!dirty || loading}
                  >
                    Daftar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <p className="text-center">
                Anda sudah punya akun?{" "}
                <Link
                  to="/login-employee"
                  className="text-warning hover:font-bold"
                >
                  Login Disini
                </Link>
              </p>
              <p className="text-center">
              Daftar sebagai Recruiter?{" "}
                <Link
                  to="/register-recruiter"
                  className="text-warning hover:font-bold"
                >
                  Daftar Disini
                </Link>
              </p>
      </div>
    </div>
  );
};

export default RegisterEmployee;
