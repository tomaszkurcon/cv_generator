import { useState } from "react";

const InputRange = () => {
  const [skillLevel, setSkillLevel] = useState(50);
  return (
    <>
      <input
        type="range"
        name="skill_level"
        onChange={(event) => {
          setSkillLevel(event.currentTarget.value);
        }}
      />
      <p>{`${skillLevel}%`}</p>
    </>
  );
};

export default InputRange;
