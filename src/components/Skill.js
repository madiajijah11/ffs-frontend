import React from "react";

const Skill = (props) => {
  return (
    <div className="text-white py-[5px] px-[10px] rounded-md bg-warning border-warning mr-[8px] max-w-fit">
      {props.value}
    </div>
  );
};

export default Skill;
