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
          <div className="md:hidden block">
            <img
              className="h-10 w-10 mb-32"
              src={require("../assets/images/logo1.png")}
              alt="backgroundimage"
            />
          </div>
          <div className="text-[32px] font-bold mb-4">Halo, Pewpeople</div>
          <p className="test-base mb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>

          {error && (
            <div className="text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md mt-5 mb-5">
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
                        className="absolute top-9 right-4 w-10 h-10"
                        icon="mdi:eye"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <Icon
                        className="absolute top-9 right-4 w-10 h-10"
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
                        className="absolute top-9 right-4 w-10 h-10"
                        icon="mdi:eye"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <Icon
                        className="absolute top-9 right-4 w-10 h-10"
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
                    className="btn w-full"
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
        <div className="mt-7 text-center">
          <span>Anda sudah punya akun? </span>
          <Link to="/login-employee">
            <span>Login Disini</span>
          </Link>
        </div>
        <div className="mt-7 text-center">
          <span>Daftar sebagai Recruiter? </span>
          <Link to="/register-recruiter">
            <span>Daftar Disini</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterEmployee;
