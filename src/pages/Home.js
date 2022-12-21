import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavUser from "../components/NavUser";
import Skill from "../components/Skill";
import axiosHelper from "../helpers/axios.helper.";
import axios from "axios";

const Home = () => {
  const [employeeLists, setEmployeeLists] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sort, setSort] = useState('ASC')

  useEffect(() => {
    getEmployeeLists();
  }, [sortBy, sort]);

  const selectSort = (value) => {
    if (value === 'skills') {
      setSortBy('skills')
      setSort('ASC')
    } else if (value === 'freelance') {
      setSortBy('workTime')
      setSort('ASC')
    } else if (value === 'fulltime') {
      setSortBy('workTime')
      setSort('DESC')
    }
  }

  const getEmployeeLists = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/employeelists?sortBy=${sortBy}&sort=${sort}&limit=4&page=1`);
      setEmployeeLists(response.data.results);
    } catch (error) {
      setEmployeeLists([]);
    }
  };

  return (
    <>
      <NavUser />
      <header className="bg-primary h-[50px] w-full px-[100px] flex items-center">
        <h1 className="text-white text-[28px] font-bold leading-[20px]">
          Top Jobs
        </h1>
      </header>
      <main className="bg-[#E5E5E5] px-[100px] py-[30px]">
        <section className="w-full p-[5px] bg-white relative rounded-[8px]">
          <input
            type="text"
            placeholder="Search for any skill"
            className="h-[50px] outline-none w-full pl-[10px]"
          />
          <div className="flex items-center absolute right-[10px] top-[25%]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <hr className="mx-[8px] h-[35px] w-[2px] bg-[#9EA0A5]" />
            <select onChange={(e) => selectSort(e.target.value)} className="outline-none w-[100px]">
              <option  hidden selected>
                Kategori
              </option>
              <option value='skills'>Sortir berdasarkan Skill</option>
              <option value='freelance'>Sortir berdasarkan Freelance</option>
              <option value='fulltime'>Sortir berdasarkan Fulltime</option>
            </select>
            <button className="btn-primary w-[100px] h-[35px] rounded-[5px] ml-[5px]">
              Search
            </button>
          </div>
        </section>
        <section className="w-full bg-white rounded-[8px] my-[40px]">
          {employeeLists?.map((employee) => {
            return (
              <div
                className="border-b-[1px] border-[#eaeaea] flex items-center py-[35px]"
                key={employee.id}
              >
                <div className="avatar mx-[20px]">
                  <div className="w-[100px] rounded-full">
                    <img
                      src="https://placeimg.com/192/192/people"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <h1 className="text-[#1F2A36] text-[22px] font-semibold">
                    {employee.fullName}
                  </h1>
                  <p className="text-[#9EA0A5] text-[14px]">
                    {employee.jobDesk} - {employee.workTime}
                  </p>
                  <div className="flex items-center text-[#9EA0A5] text-[14px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span className="ml-[5px]">{employee.domicile}</span>
                  </div>
                  <div className="skill flex">
                    {employee.skills?.map((skill, index) => {
                      return (
                        <div key={index}>
                          <Skill value={skill} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <button className="btn-primary w-[120px] h-[55px] rounded-[5px] mr-[5%]">
                  Lihat Profile
                </button>
              </div>
            );
          })}
        </section>
        <section className="flex items-center justify-center">
          <div className="w-[45px] h-[40px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center font-bold hover:bg-primary hover:text-white mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-[45px] h-[40px] cursor-pointer rounded-[5px] flex items-center justify-center font-bold bg-primary text-white mr-[10px]">
            1
          </div>
          <div className="w-[45px] h-[40px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center font-bold hover:bg-primary hover:text-white mr-[10px]">
            2
          </div>
          <div className="w-[45px] h-[40px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center font-bold hover:bg-primary hover:text-white mr-[10px]">
            3
          </div>
          <div className="w-[45px] h-[40px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center font-bold hover:bg-primary hover:text-white mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
