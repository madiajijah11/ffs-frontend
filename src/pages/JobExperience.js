import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const JobExperience = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="flex flex-col relative">
          <div className="bg-[#5E50A1] h-40"></div>
          <div className="absolute flex justify-center">
            <div>
            {/* Card profile */}
            <div className="card w-96 bg-base-100 shadow-xl rounded-none">
              <figure className="px-10 pt-10">
              <img src={require('../assets/images/profile.png')} alt='Banner' />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            {/* Card profile end */}
            </div>
            <div>Ini flex 2</div>
          </div>
          <div className="h-screen">rows 2</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default JobExperience;