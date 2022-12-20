import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../redux/actions/authAction";

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .password()
    .min(6, 'Min lenght 6')
    .minLowercase(1, 'Min lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minNumbers(1, 'Min numbers 1')
    .minSymbols(1, 'Min symbol 1')
});

const LoginEmployeeTestFormik = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading} = useSelector((state) => state.auth);
  // const [value, setValue] = React.useState({
  //   email: "",
  //   password: "",
  // });

  const handleSubmit = (value) => {
    const {email, password} = value.email;
    // event.preventDefault();
    dispatch(login({ email, password , cb: () => navigate("/") }));
    // dispatch(login({ value, cb: () => navigate("/") }));
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
          <Formik initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit }
          >
            {({errors, touched}) =>(
              <Form >
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
                  {error && (
                    <div className="text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md">
                      {error}
                    </div>
                  )}

                <div className="flex flex-col mb-8">
                  <label className="mb-1" for="email">
                    Email
                  </label>
                  <Field
                    className="p-4"
                    type="email"
                    name="email"
                    placeholder="Masukan alamat email"
                    // value={value.email}
                    // onChange={(event) =>
                    //   setValue({ ...value, email: event.target.value })
                    // }
                  /> {errors.email && touched.email ? (<div className="text-red-500" >{errors.email}</div>) : null
                  }
                </div>
                <div className="flex flex-col mb-8">
                  <label className="mb-1" for="password">
                    Kata Sandi
                  </label>
                  <Field
                    className="p-4"
                    type="password"
                    name="password"
                    placeholder="Masukan kata sandi"
                    // value={value.password}
                    // onChange={(event) =>
                    //   setValue({ ...value, password: event.target.value })
                    // }
                  />{errors.password && touched.password ? (<div className="text-red-500" >{errors.password}</div>) : null
                }
                </div>
                <Link to='/reset-password'>
                  <div className="flex justify-end mb-6">Lupa kata sandi?</div>
                </Link>
                <div>
                  <button className="btn w-full" disabled={loading} >Masuk</button>
                </div>
              </Form>
            ) }

          </Formik>
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
            <span>Daftar Disini</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginEmployeeTestFormik;
