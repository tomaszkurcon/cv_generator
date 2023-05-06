import { createContext,  useReducer, useState } from "react";
import {
  educationItems,
  experienceItems,
  personalData,
  skillItems,
} from "../mocked_data/data";
import {
  personalDataReducer,
  timelineElementReducer,
} from "./reducers_functions";

export const CvDataContext = createContext({
  timelineElementState: {},
  personalDataState: {},
  dispatchTimelineElement: () => {},
  dispatchPersonalData: () => {},
  clause:"",
  setClause: () => {}
});

export const CvDataContextProvider = ({ children }) => {
  const [clause, setClause] = useState("");
  const [timelineElementState, dispatchTimelineElement] = useReducer(
    timelineElementReducer,
    { experience_items: experienceItems, education_items: educationItems }
  );
  const [personalDataState, dispatchPersonalData] = useReducer(
    personalDataReducer,
    {
      personal_data: personalData,
      skill_items: skillItems,
    }
  );
  

  const value = {
    timelineElementState,
    dispatchTimelineElement,
    personalDataState,
    dispatchPersonalData,
    clause,
    setClause
  };
  return (
    <CvDataContext.Provider value={value}>{children}</CvDataContext.Provider>
  );
};
