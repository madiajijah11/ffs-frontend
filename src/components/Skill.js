import React from "react";

const Skill = (props) => {
  return (
    <div className="text-white text-[13px] py-[5px] px-[10px] rounded-[5px] bg-orange-400 border-[#FBB017] mr-[8px]">
      {props.value}
    </div>
  );
};

export default Skill;
