import { createContext, useState } from "react";

export const CvDataContext = createContext({
  experienceItems: [],
  educationItems: [],
  skillItems: [],
});

export const CvDataContextProvider = ({ children }) => {
  const [name, setName] = useState("John Hustler");
  const [experience_items, setExperienceItems] = useState([
    {
      title: "Staż w IT master",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima eligendi. Saepe iusto voluptatum ipsam excepturi adipisci asperiores nobis praesentium hic laboriosam pariatur iure dignissimos tempore ipsa, reiciendis blanditiis? Praesentium!`,
      date: `01.03.2025-
          30.09.2028`,
    },
  ]);
  const [education_items, setEducationItems] = useState([
    {
      title: "Uniwersytet Harvarda",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima eligendi. Saepe iusto voluptatum ipsam excepturi adipisci`,
      date: `01.03.2020-
          30.09.2025`,
    },
    {
      title: "DLD College London",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      date: `01.09.2016-
            30.06.2020`,
    },
  ]);
  const [skill_items, setSkillItems] = useState([
    {id:0, label: "HTML5", level: "90%" },
    { id:1,label: "CSS3", level: "80%" },
    {id:2, label: "Javascript", level: "40%" },
    { id:3,label: "React", level: "70%" },
    { id:4,label: "TypeScript", level: "30%" },
    { id:5,label: "Git", level: "20%" },
  ]);
  const value = {
    name,
    setName,
    education_items,
    experience_items,
    setEducationItems,
    setExperienceItems,
    skill_items,
    setSkillItems
  };
  return (
    <CvDataContext.Provider value={value}>{children}</CvDataContext.Provider>
  );
};
