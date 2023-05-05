import { createContext, useState } from "react";
import {
  educationItems,
  experienceItems,
  skillItems,
} from "../mocked_data/data";
//TO DO
// const timelineElementReducer = (state, action) => {
//   if (action.type === "DELETE_EXPERIENCE_ITEM") {
//     const updatedExperienceItems = state.experience_items.filter(
//       (item) => item.id !== index
//     );

//     return {
//       experienceItems: updatedExperienceItems,
//       educationItems: state.education_items,
//     };
//   }
//   if (action.type === "DELETE_EDUCATION_ITEM") {
//     const updatedEducationItems = state.education_items.filter(
//       (item) => item.id !== index
//     );

//     return {
//       experienceItems: state.experience_items,
//       educationItems: updatedEducationItems,
//     };
//   }

//   return {
//     experienceItems: state.experienceItems,
//     educationItems: state.education_items,
//   };
// };

export const CvDataContext = createContext({
  experienceItems: [],
  educationItems: [],
  skillItems: [],
});

export const CvDataContextProvider = ({ children }) => {
  //TO DO:
  //ADD REDUCER INSTEAD OF COPYING CODE FOR EXPERIENCE AND EDUCATION TIMELINE ITEMS
  // const [timelineElementState, dispatchTimelineElement] = useReducer(
  //   timelineElementReducer,
  //   { experience_items: experienceItems, education_items: educationItems }
  // );
  const [name, setName] = useState("John Hustler");
  const [phoneNumber, setPhoneNumber] = useState("123454321");
  const [email, setEmail] = useState("johnhustler@ww.pl");
  const [github, setGithub] = useState("https://github.com/");
  const [experience_items, setExperienceItems] = useState(experienceItems);
  const [education_items, setEducationItems] = useState(educationItems);
  const [skill_items, setSkillItems] = useState(skillItems);

  const removeSkillHandler = (index) => {
    const updatedSkillList = skill_items.filter((skill) => skill.id !== index);
    setSkillItems(updatedSkillList);
  };

  const addSkillhandler = (event) => {
    const data = new FormData(event.target);
    event.preventDefault();
    const skill = {
      id: skill_items.length + 1,
      label: data.get("skill_name"),
      level: `${data.get("skill_level")}%`,
    };

    const updatedSkillList = [...skill_items, skill];
    setSkillItems(updatedSkillList);
  };

  const deleteExperienceItem = (index) => {
    const updatedExperienceItems = experience_items.filter(
      (item) => item.id !== index
    );
    setExperienceItems(updatedExperienceItems);
  };
  const deleteEducationItem = (index) => {
    const updatedEducationItems = education_items.filter(
      (item) => item.id !== index
    );
    setEducationItems(() => updatedEducationItems);
  };
  const editAddExperienceItem = (event, id) => {
    const data = new FormData(event.target);
    event.preventDefault();
    if (id != null) {
      const index = experience_items.findIndex((item) => item.id === id);
      const updatedItem = {
        id: id,
        title: data.get("title"),
        description: data.get("description"),
        date: data.get("date"),
      };
      const updatedItems = [...experience_items];
      updatedItems[index] = updatedItem;
      setExperienceItems(updatedItems);
    } else {
      const newItem = {
        id: experience_items.length,
        title: data.get("title"),
        description: data.get("description"),
        date: data.get("date"),
      };
      setExperienceItems(() => [...experience_items, newItem]);
    }
  };
  const editAddEducationItem = (event, id) => {
    const data = new FormData(event.target);
    event.preventDefault();
    if (id != null) {
      const index = education_items.findIndex((item) => item.id === id);
      const updatedItem = {
        id: id,
        title: data.get("title"),
        description: data.get("description"),
        date: data.get("date"),
      };
      const updatedItems = [...education_items];
      updatedItems[index] = updatedItem;
      setEducationItems(updatedItems);
    } else {
      const newItem = {
        id: education_items.length,
        title: data.get("title"),
        description: data.get("description"),
        date: data.get("date"),
      };
      setEducationItems(() => [...education_items, newItem]);
    }
  };
  const value = {
    name,
    setName,
    education_items,
    experience_items,
    setEducationItems,
    setExperienceItems,
    deleteExperienceItem,
    deleteEducationItem,
    editAddExperienceItem,
    editAddEducationItem,
    skill_items,
    removeSkillHandler,
    addSkillhandler,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    github,
    setGithub,
  };
  return (
    <CvDataContext.Provider value={value}>{children}</CvDataContext.Provider>
  );
};
