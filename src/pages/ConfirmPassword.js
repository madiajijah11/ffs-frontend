import React from "react";
import { Oval } from "react-loader-spinner";
import axiosHelper from "../helpers/axios.helper.";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const ConfirmPasswordSchema = Yup.object().shape({
  code: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .password()
    .min(6, "Min lenght 6")
    .minLowercase(1, "Min lowercase 1")
    .minUppercase(1, "Min uppercase 1")
    .minNumbers(1, "Min numbers 1")
    .minSymbols(1, "Min symbol 1")
    .required("Required"),
  confirmPassword: Yup.string()
    .password()
    .min(6, "Min lenght 6")
    .minLowercase(1, "Min lowercase 1")
    .minUppercase(1, "Min uppercase 1")
    .minNumbers(1, "Min numbers 1")
    .minSymbols(1, "Min symbol 1")
    .required("Required"),
});

const ConfirmPassword = () => {
  const [alert, setAlert] = React.useState("");
  const [loading, setLoading] = React.useState(null);
  const navigate = useNavigate();
  const ResetPasswordValidation = async (e) => {
    const code = e.code;
    const newPassword = e.password;
    const confirmPassword = e.confirmPassword;
    const email = e.email;
    setLoading(true);
    if (newPassword !== confirmPassword) {
      setLoading(false);
      setAlert("Error! Password not Match");
      setTimeout(() => {
        setAlert("");
      }, 2000);
      // return false;
    }else{
      try {
        const response = await axiosHelper.post("/auth/resetPassword", {
          code,
          email,
          password: newPassword,
          confirmPassword,
        });
        console.log(response);
        setLoading(false);
        setTimeout(() => {
          setAlert("Success! Please Re-login");
        }, 1000);
        setTimeout(() => {
          navigate("/login-employee");
        }, 3000);
      } catch (error) {
        setAlert("Error! Code Invalid");
        setTimeout(() => {
          setAlert("");
        }, 2000);
        console.log(error);
      }
    }
  };
  return (
    <div className="h-screen w-full flex">
      <section className="flex-1 relative max-[600px]:hidden">
        <img
          className="absolute w-[20%] top-[30px] left-[30px]"
          src={require("../assets/images/logoPutih.png")}
          alt="Logo"
        />
        <img
          className="absolute h-[100vh] w-[100%] z-[-1]"
          src={require("../assets/images/banner.png")}
          alt="Banner"
        />
        <div className="absolute z-[-1] bg-[#5E50A1] h-[100vh] w-[100%] opacity-70"></div>
        <div className="flex items-center justify-center h-[100vh]">
          <p className="text-white w-[450px] font-bold text-5xl leading-relaxed">
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </p>
        </div>
      </section>
      <section className="flex-1 pt-[3vw] px-14 bg-[#E5E5E5] flex flex-col">
        <div className="mb-[30px]">
          <h3 className="font-semibold text-[32px] text-[#1F2A36] mb-[10px]">
            Reset Password
          </h3>
          <p className="text-[#46505C] text-[18px]">
            You need to change your password to activate your account
          </p>
        </div>
        {loading && (
          <div className="mb-10 flex justify-center items-center">
            <Oval
              height={25}
              width={25}
              color="#5E50A1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#B6A7FA"
              strokeWidth={5}
              strokeWidthSecondary={5}
            />
            <p className="ml-1 font-semibold">Loading....</p>
          </div>
        )}
        {alert !== "" &&  (<div className={alert === "Success! Please Re-login" ? "alert alert-success shadow-lg" : "alert alert-error shadow-lg"}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={alert === "Success! Please Re-login" ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" : "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" } /></svg>
          <span>{alert}</span>
        </div>
       </div>)}
       <Formik initialValues={{
            code: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={ConfirmPasswordSchema}
          onSubmit={ResetPasswordValidation}
          >
            { ({ errors, touched }) => (
              <Form>
                <div className="mb-[15px]">
                  <label class="label" for="code">
                    <span class="label-text text-[16px]">Code</span>
                  </label>
                  <Field
                    type="text"
                    id="code"
                    name="code"
                    placeholder="Masukkan code auth"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                  {errors.code && touched.code ? (
                      <div className="text-red-500">{errors.code}</div>
                    ) : null}
                </div>
                <div className="mb-[15px]">
                  <label class="label" for="email">
                    <span class="label-text text-[16px]">Email</span>
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukkan email"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                  {errors.email && touched.email ? (
                      <div className="text-red-500">{errors.email}</div>
                    ) : null}
                </div>
                <div className="mb-[15px]">
                  <label class="label" for="password">
                    <span class="label-text text-[16px]">Password</span>
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Masukkan kata sandi"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                  {errors.password && touched.password ? (
                      <div className="text-red-500">{errors.password}</div>
                    ) : null}
                </div>
                <div className="mb-[40px]">
                  <label class="label" for="confirmPassword">
                    <span class="label-text text-[16px]">
                      Confirmation new password
                    </span>
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Masukkan konfirmasi kata sandi"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                      <div className="text-red-500">{errors.confirmPassword}</div>
                    ) : null}
                </div>
                <button type='submit' class="btn btn-block btn-warning text-white">
                  Reset password
                </button>
              </Form>
            )}
       </Formik>
      </section>
    </div>
  );
};

export default ConfirmPassword;
