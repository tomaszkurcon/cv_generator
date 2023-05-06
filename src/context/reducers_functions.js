// Reducer function for managing timeline
export const timelineElementReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_EXPERIENCE_ITEM": {
      const updatedExperienceItems = state.experience_items.filter(
        (item) => item.id !== action.index
      );
      const updatedExperienceItemsWithIds = updatedExperienceItems.map(
        (item, index) => {
          return { ...item, id: index };
        }
      );
      return {
        ...state,
        experience_items: updatedExperienceItemsWithIds,
      };
    }
    case "DELETE_EDUCATION_ITEM": {
      const updatedEducationItems = state.education_items.filter(
        (item) => item.id !== action.index
      );
      const updatedEducationItemsWithIds = updatedEducationItems.map(
        (item, index) => {
          return { ...item, id: index };
        }
      );
      return {
        ...state,
        education_items: updatedEducationItemsWithIds,
      };
    }
    case "EDIT_TIMELINE_ITEM": {
      const data = new FormData(action.event.target);
      const list =
        action.timelineSection === "experience"
          ? state.experience_items
          : state.education_items;

      const index = list.findIndex((item) => item.id === action.id);
      const updatedItem = {
        id: action.id,
        title: data.get("title"),
        description: data.get("description"),
        date: data.get("date"),
      };
      const updatedItems = [...list];
      updatedItems[index] = updatedItem;
      if (action.timelineSection === "experience") {
        return {
          ...state,
          experience_items: updatedItems,
        };
      } else {
        return {
          ...state,
          education_items: updatedItems,
        };
      }
    }
    case "ADD_TIMELINE_ITEM": {
      const data = new FormData(action.event.target);
      const list =
        action.timelineSection === "experience"
          ? state.experience_items
          : state.education_items;
      const newItem = {
        id: list.length,
        title: data.get("title"),
        description: data.get("description"),
        date: data.get("date"),
      };
      if (action.timelineSection === "experience") {
        return {
          ...state,
          experience_items: [...state.experience_items, newItem],
        };
      } else {
        return {
          ...state,
          education_items: [...state.education_items, newItem],
        };
      }
    }
    default:
      return state;
  }
};

export const personalDataReducer = (state, action) => {
  switch (action.type) {
    case "EDIT_NAME": {
       
      const updatedPersonalData = { ...state.personal_data };
      updatedPersonalData.name = action.newName;
      console.log(updatedPersonalData.name);
      return {
        ...state,
        personal_data: updatedPersonalData,
      };
    }
    case "EDIT_PHONE_NUMBER": {
      const updatedPersonalData = { ...state.personal_data };
      updatedPersonalData.phoneNumber = action.newPhoneNumber;
      return {
        ...state,
        personal_data: updatedPersonalData,
      };
    }
    case "EDIT_EMAIL": {
      const updatedPersonalData = { ...state.personal_data };
      updatedPersonalData.email = action.newEmail;
      return {
        ...state,
        personal_data: updatedPersonalData,
      };
    }
    case "EDIT_GITHUB": {
      const updatedPersonalData = { ...state.personal_data };
      updatedPersonalData.github = action.newGithub;
      return {
        ...state,
        personal_data: updatedPersonalData,
      };
    }
    case "EDIT_PHOTO": {
      const updatedPersonalData = { ...state.personal_data };
      updatedPersonalData.photo = action.newPhoto;
      return {
        ...state,
        personal_data: updatedPersonalData,
      };
    }
    case "REMOVE_SKILL_ITEM": {
      const updatedSkillList = state.skill_items.filter(
        (skill) => skill.id !== action.index
      );
      const updatedSkillListWithIds = updatedSkillList.map(
        (item, index) => {
          return { ...item, id: index };
        }
      );
      return {
        ...state,
        skill_items: updatedSkillListWithIds,
      };
    }
    case "ADD_SKILL_ITEM": {
      const data = new FormData(action.event.target);
      const skill = {
        id: state.skill_items.length + 1,
        label: data.get("skill_name"),
        level: `${data.get("skill_level")}%`,
      };

      const updatedSkillList = [...state.skill_items, skill];
      return {
        ...state,
        skill_items: updatedSkillList,
      };
    }
   
    default:
      return state;
  }
};
