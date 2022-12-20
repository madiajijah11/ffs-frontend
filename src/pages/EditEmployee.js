import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavUser from "../components/NavUser";

const EditEmployee = () => {
  return (
    <>
      <NavUser />
      <section className="bg-primary h-[40vh]"></section>
      <section className="bg-[#E5E5E5] px-[100px] pb-[20vh]">
        <div className="flex gap-x-[50px]">
          <section className="mt-[-20vh] w-[30%]">
            <div className="card-profile bg-white rounded-[8px] py-[30px] px-5">
              <div className="avatar w-full">
                <div className="w-[150px] rounded-full mx-auto">
                  <img src="https://placeimg.com/192/192/people" alt="avatar" />
                </div>
              </div>
              <Link>
                <div className="flex items-center justify-center gap-1 mt-[10px] mb-[50px]">
                  <img alt="" src={require("../assets/images/pen-edit.png")} />
                  <p className="text-[#9EA0A5]">Edit</p>
                </div>
              </Link>
              <h1 className="text-[#1F2A36] text-[22px] font-semibold mb-[10px]">
                Luwis Dafidson
              </h1>
              <p className="text-[14px] text-[#1F2A36] mb-[5px] font-semibold">
                Web Developer
              </p>
              <p className="text-[14px] text-[#1F2A36] mb-[15px]">Freelance</p>
              <div className="flex items-center text-[#9EA0A5] text-[14px] mb-[5px]">
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
                <span className="ml-[5px]">Purwokerto, Jawa Tengah</span>
              </div>
              <div className="flex items-center text-[#9EA0A5] text-[14px] mb-[15px]">
                <img alt="" src={require("../assets/images/phone.png")} />
                <span className="ml-[5px]">0845 - 5435 - 5435</span>
              </div>
              <p className="desc text-[#9EA0A5] text-[14px] leading-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
            </div>
            <button className="btn btn-md btn-primary btn-block my-[20px]">
              Ubah Password
            </button>
            <button className="btn btn-md btn-outline btn-primary btn-block">
              Kembali
            </button>
          </section>
          <section className="mt-[-20vh] w-[70%] flex flex-col gap-[20px]">
            <div className="bg-white py-[30px] px-5 rounded-[8px] overflow-hidden">
              <h1 className="text-[22px] font-semibold">Data Diri</h1>
              <hr className="bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]" />
              <div className="mb-[15px]">
                <label class="label" for="name">
                  <span class="label-text text-[16px]">Nama Lengkap</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Masukkan nama lengkap"
                  class="input input-bordered w-full min-w-[100%]"
                />
              </div>
              <div className="mb-[15px]">
                <label class="label" for="jobdesk">
                  <span class="label-text text-[16px]">Job desk</span>
                </label>
                <input
                  type="text"
                  id="jobdesk"
                  placeholder="Masukkan job desk"
                  class="input input-bordered w-full min-w-[100%]"
                />
              </div>
              <div className="mb-[15px]">
                <label class="label" for="jobdesk">
                  <span class="label-text text-[16px]">Work Time</span>
                </label>
                <select class="select select-bordered w-full min-w-[100%]">
                  <option>Full Time</option>
                  <option>Part Time</option>
                </select>
              </div>
              <div className="mb-[15px]">
                <label class="label" for="domisili">
                  <span class="label-text text-[16px]">Domisili</span>
                </label>
                <input
                  type="text"
                  id="domisili"
                  placeholder="Masukkan domisili"
                  class="input input-bordered w-full min-w-[100%]"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="mb-[15px]">
                  <label class="label" for="instagram">
                    <span class="label-text text-[16px]">Instagram</span>
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    placeholder="Masukkan instagram"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
                <div className="mb-[15px]">
                  <label class="label" for="github">
                    <span class="label-text text-[16px]">Github</span>
                  </label>
                  <input
                    type="text"
                    id="github"
                    placeholder="Masukkan github"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
                <div className="mb-[15px]">
                  <label class="label" for="gitlab">
                    <span class="label-text text-[16px]">Gitlab</span>
                  </label>
                  <input
                    type="text"
                    id="gitlab"
                    placeholder="Masukkan gitlab"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
              </div>
              <div className="mb-[15px]">
                <label class="label" for="deskripsi">
                  <span class="label-text text-[16px]">Deskripsi singkat</span>
                </label>
                <textarea
                  type="text"
                  id="deskripsi"
                  placeholder="Masukkan deskripsi singkat"
                  class="input input-bordered w-full min-w-[100%] h-[100px]"
                />
              </div>
              <div className="w-full text-right">
                <button className="btn btn-warning w-[80px] text-white">
                  Simpan
                </button>
              </div>
            </div>
            <div className="bg-white py-[30px] px-5 rounded-[8px] overflow-hidden">
              <h1 className="text-[22px] font-semibold">Skill</h1>
              <hr className="bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]" />
              <div className="flex gap-5 mb-[15px]">
                <input
                  type="text"
                  id="skill"
                  class="input input-bordered w-full"
                />
                <button className="btn btn-warning w-[80px] text-white">
                  Simpan
                </button>
              </div>
              <div className="bg-warning flex items-center max-w-fit text-[14px] p-2 rounded-[5px] text-white gap-1">
                <p className="mr-[8px]">JavaScript</p>
                <button>
                  <img
                    alt=""
                    src={require("../assets/images/edit-skill.png")}
                  />
                </button>
                <button>
                  <img alt="" src={require("../assets/images/trash.png")} />
                </button>
              </div>
            </div>
            <div className="bg-white py-[30px] px-5 rounded-[8px] overflow-hidden">
              <h1 className="text-[22px] font-semibold">Pengalaman Kerja</h1>
              <hr className="bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]" />
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-[15px]">
                  <label class="label" for="perusahaan">
                    <span class="label-text text-[16px]">Nama Perusahaan</span>
                  </label>
                  <input
                    type="text"
                    id="perusahaan"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
                <div className="mb-[15px]">
                  <label class="label" for="posisi">
                    <span class="label-text text-[16px]">Posisi</span>
                  </label>
                  <input
                    type="text"
                    id="posisi"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-[15px]">
                  <label class="label" for="dateStart">
                    <span class="label-text text-[16px]">Tanggal Masuk</span>
                  </label>
                  <input
                    type="date"
                    id="dateStart"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
                <div className="mb-[15px]">
                  <label class="label" for="dateEnd">
                    <span class="label-text text-[16px]">Tanggal Keluar</span>
                  </label>
                  <input
                    type="date"
                    id="dateEnd"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
              </div>
              <div className="mb-[15px]">
                <label class="label" for="jobdesc">
                  <span class="label-text text-[16px]">Deskripsi singkat</span>
                </label>
                <textarea
                  type="text"
                  id="jobdesc"
                  placeholder="Masukkan deskripsi pekerjaan anda"
                  class="input input-bordered w-full min-w-[100%] h-[100px]"
                />
              </div>
              <hr className="bg-[#eaeaea] h-[2px]" />
              <button className="btn btn-warning btn-outline btn-block text-white my-[20px]">
                Tambah Pengalaman Kerja
              </button>
              <hr className="bg-[#eaeaea] h-[2px]" />
            </div>
            <div className="bg-white py-[30px] px-5 rounded-[8px] overflow-hidden">
              <h1 className="text-[22px] font-semibold">Portofolio</h1>
              <hr className="bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]" />
              <div className="mb-[15px]">
                <label class="label" for="nameApp">
                  <span class="label-text text-[16px]">Nama aplikasi</span>
                </label>
                <input
                  type="text"
                  id="nameApp"
                  placeholder="Masukkan nama aplikasi"
                  class="input input-bordered w-full min-w-[100%]"
                />
              </div>
              <div className="mb-[15px]">
                <label class="label" for="linkRepo">
                  <span class="label-text text-[16px]">Link repository</span>
                </label>
                <input
                  type="text"
                  id="linkRepo"
                  placeholder="Masukkan link repository"
                  class="input input-bordered w-full min-w-[100%]"
                />
              </div>
              <div className="mb-[15px] cursor-pointer">
                <span class="label-text text-[16px]">Upload gambar</span>
                <div className="w-full outline-dashed outline-2 outline-[#9EA0A5] rounded-[8px] mt-[5px] py-[50px] flex flex-col justify-start items-center text-[#1F2A36]">
                  <img alt="" src={require("../assets/images/drag.png")} />
                  <p className="my-[10px]">
                    Drag & Drop untuk Upload Gambar Aplikasi Mobile
                  </p>
                  <span className="text-[14px] mb-[20px]">
                    Atau cari untuk mengupload file dari direktorimu.
                  </span>
                  <div className="flex gap-3">
                    <div className="flex gap-2">
                      <img
                        alt=""
                        src={require("../assets/images/res-image.png")}
                      />
                      <p className="text-[14px]">
                        High-Res
                        <br />
                        Image PNG, JPG or GIF{" "}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <img alt="" src={require("../assets/images/size.png")} />
                      <p className="text-[14px]">
                        Size
                        <br />
                        1080x1920 or 600x800
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-[#eaeaea] h-[2px]" />
              <button className="btn btn-warning btn-outline btn-block text-white my-[20px]">
                Tambah Portofolio
              </button>
              <hr className="bg-[#eaeaea] h-[2px]" />
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EditEmployee;
