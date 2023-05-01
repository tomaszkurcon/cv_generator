import { createContext, useState } from "react";

export const CvDataContext = createContext({
  experienceItems: [],
  educationItems: [],
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
  const value = {
    name,
    setName,
    education_items,
    experience_items,
    setEducationItems,
    setExperienceItems,
  };
  return (
    <CvDataContext.Provider value={value}>{children}</CvDataContext.Provider>
  );
};
