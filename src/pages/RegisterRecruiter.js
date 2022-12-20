import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerRecruiter } from "../redux/actions/authAction";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { Icon } from "@iconify/react";

YupPassword(Yup);

const RegisterRecruiterSchema = Yup.object().shape({
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
  companyName: Yup.string().required("Nama perusahaan harus diisi"),
  companyField: Yup.string().required("Bidang perusahaan harus diisi"),
});

const RegisterRecruiter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex font-sans h-screen">
      <div className="flex-1 relative max-[600px]:hidden overflow-hidden">
        <img
          className="absolute w-32 top-[30px] left-[30px]"
          src={require("../assets/images/FFS-removebg.png")}
          alt="Logo"
        />
        <img
          className="absolute h-[100vh] w-[100%] z-[-1]"
          src={require("../assets/images/banner.png")}
          alt="Banner"
        />
        <div className="absolute z-[-1] bg-primary h-[100vh] w-[100%] opacity-80"></div>
        <div className="flex items-center justify-center h-[100vh]">
          <p className="text-white w-[450px] font-bold text-5xl leading-relaxed">
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col py-10 px-14 bg-[#E5E5E5] max-[600px]:p-5 overflow-y-scroll">
        <img
          className="w-32 top-[30px] left-[30px] mb-10 min-[600px]:hidden"
          src={require("../assets/images/logoUngu.png")}
          alt="Logo"
        />
        <h1 className="font-bold text-2xl mb-2">Halo, Pewpeople</h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
        {error && (
          <div className="text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md mb-3 bg-warning">
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
            companyName: "",
            companyField: "",
          }}
          validationSchema={RegisterRecruiterSchema}
          onSubmit={(values) => {
            dispatch(
              registerRecruiter({...values, cb:() => navigate("/"),})
            )
            console.log(values);
          }}
        >
          {({ errors, touched, dirty }) => (
            <Form>
              <div className="mb-5">
                <label className="block mb-2" htmlFor="fullName">
                  Nama
                </label>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Masukan nama panjang"
                  className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                />
                {errors.fullName && touched.fullName ? (
                  <div className="text-red-500 text-sm">{errors.fullName}</div>
                ) : null}
              </div>
              <div className="mb-5">
                <label className="block mb-2" htmlFor="email">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Masukan alamat email"
                  className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                ) : null}
              </div>
              <div className="mb-5">
                <label className="block mb-2" htmlFor="companyName">
                  Perusahaan
                </label>
                <Field
                  name="companyName"
                  type="text"
                  placeholder="Masukan nama perusahaan"
                  className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                />
                {errors.companyName && touched.companyName ? (
                  <div className="text-red-500 text-sm">
                    {errors.companyName}
                  </div>
                ) : null}
              </div>
              <div className="mb-5">
                <label className="block mb-2" htmlFor="companyField">
                  Bidang Perusahaan
                </label>
                <Field
                  name="companyField"
                  type="text"
                  placeholder="Bidang perusahaan Anda"
                  className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                />
                {errors.companyField && touched.companyField ? (
                  <div className="text-red-500 text-sm">
                    {errors.companyField}
                  </div>
                ) : null}
              </div>
              <div className="mb-5">
                <label className="block mb-2" htmlFor="phoneNumber">
                  No Handphone
                </label>
                <Field
                  name="phoneNumber"
                  type="text"
                  placeholder="Masukan no handphone"
                  className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="text-red-500 text-sm">
                    {errors.phoneNumber}
                  </div>
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
                {errors.password && touched.password ? (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                ) : null}
              </div>
              <div className="mb-5 relative">
                <label className="block mb-2" htmlFor="confirmPassword">
                  Konfirmasi kata Sandi
                </label>
                <Field
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan konfirmasi kata sandi"
                  className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
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
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              <div className="mb-5">
                <button
                  className="border-[1px] border-solid border-[#FBB017] bg-warning w-[100%] pl-3 h-[50px] rounded-[4px] text-white"
                  type="submit"
                  disabled={!dirty || loading}
                >
                  Daftar
                </button>
              </div>
              <p className="text-center">
                Anda sudah punya akun?{" "}
                <Link
                  to="/login-recruiter"
                  className="text-warning hover:font-bold"
                >
                  Masuk disini
                </Link>
              </p>
              <p className="text-center">
                Login sebagai Pekerja?{" "}
                <Link
                  to="/login-employee"
                  className="text-warning hover:font-bold"
                >
                  Masuk disini
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterRecruiter;
