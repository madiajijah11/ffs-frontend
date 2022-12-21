import React from "react";
import axios from "axios";

import Footer from "../components/Footer";
import NavUser from "../components/NavUser";
import Skill from "../components/Skill";

const Home = () => {
  const [employee, setEmployee] = React.useState({});
  const [search, setSearch] = React.useState("");
  const [submit, setSubmit] = React.useState("");
  const [count, setCount] = React.useState(1);
  const [page, setPage] = React.useState(1);

  let increment = () => {
    setPage(page + 1)
    if (count === 10) {
      alert("number can no longer be added");
      return false;
    }
    return setCount(count + 1);
  };

  let decrement = () => {
    setPage(page - 1)
    if (count === 1) {
      alert("number can no longer be reduced");
      return false;
    }
    return setCount(count - 1);
  };


  React.useEffect(() => {
    getEmployee().then((res) => {
      setEmployee(res);
    });
  }, [page]);

  React.useEffect(() => {
    getEmployee().then((res) => {
      setEmployee(res);
    });
  }, [search]);

  const getEmployee = async () => {
    const { data } = await axios.get(
      `http://localhost:8888/employeeLists?search=${search}&page=${page}`
    );
    return data;
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
            onChange={(e) => setSubmit(e.target.value)}
          />
          <div className="flex items-center absolute right-[10px] top-[25%]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <hr className="mx-[8px] h-[35px] w-[2px] bg-[#9EA0A5]" />
            <select className="outline-none w-[100px]">
              <option disabled hidden selected>
                Kategori
              </option>
              <option>Sortir berdasarkan Skill</option>
              <option>Sortir berdasarkan Freelance</option>
              <option>Sortir berdasarkan Fulltime</option>
            </select>
            <button
              onClick={() => setSearch(submit)}
              class="btn-primary w-[100px] h-[35px] rounded-[5px] ml-[5px]"
            >
              Search
            </button>
          </div>
        </section>
        <section className="w-full bg-white rounded-[8px] my-[40px]">
          {employee?.results?.map((data) => (
            <div className="border-b-[1px] border-[#eaeaea] flex items-center py-[35px]">
              <div class="avatar mx-[20px]">
                <div class="w-[100px] rounded-full">
                  <img
                    src={data.avatar || "https://placeimg.com/192/192/people"}
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <h1 className="text-[#1F2A36] text-[22px] font-semibold">
                  {data.fullName}
                </h1>
                <p className="text-[#9EA0A5] text-[14px]">
                  {data.jobDesk} - {data.workTime}
                </p>
                <div className="flex items-center text-[#9EA0A5] text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="ml-[5px]">{data.domicile}</span>
                </div>
                <div className="skill flex">
                  {data.skills?.map((item) => (
                    <Skill value={item} />
                  ))}
                </div>
              </div>
              <button class="btn-primary w-[120px] h-[55px] rounded-[5px] mr-[5%]">
                Lihat Profile
              </button>
            </div>
          ))}
        </section>
        <section className="flex items-center justify-center">
          <div
            className="w-[45px] h-[40px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center font-bold hover:bg-primary hover:text-white mr-[10px]"
            onClick={decrement}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-[45px] h-[40px] cursor-pointer rounded-[5px] flex items-center justify-center font-bold bg-primary text-white mr-[10px]">
            {count}
          </div>
          <div
            className="w-[45px] h-[40px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center font-bold hover:bg-primary hover:text-white mr-[10px]"
            onClick={increment}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
