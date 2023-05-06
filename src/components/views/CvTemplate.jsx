import styles from "./CvTemplate.module.css";
import InformationSection from "../information_section/InformationSection";
import TimelineSection from "../timeline_section/TimelineSection";
import { faBriefcase, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import MainTemplate from "../templates/MainTemplate";
import Separator from "../common/Separator";
import Button from "../common/Button";
import { useContext } from "react";
import { CvDataContext } from "../../context/CvDataContext";
import { educationItems, experienceItems } from "../../mocked_data/data";

const CvTemplate = ({ edit }) => {
  const { timelineElementState } = useContext(CvDataContext);
  const experience_items = edit
    ? timelineElementState.experience_items
    : experienceItems;
  const education_items = edit
    ? timelineElementState.education_items
    : educationItems;
  return (
    <MainTemplate>
      {!edit && (
        <>
          <div className={styles.cv_header}>
            <h1 className={styles.title}>
              The below CV is just a templete to demonstrate example of final CV
              generated on this Page
            </h1>
            <Button type="link" link={"/generate-cv"}>
              Create your CV
            </Button>
          </div>
          <Separator />
        </>
      )}

      <main
        className={styles.cv}
        style={!edit ? { backgroundColor: "#fbfbf8" } : {}}
      >
        <div>
          <InformationSection edit={edit} />
          <TimelineSection
            name="experience"
            timeline_section_items={experience_items}
            title="Doświadczenie"
            icon={faBriefcase}
            separator
            edit={edit}
          />
          <TimelineSection
            name="education"
            timeline_section_items={education_items}
            title="Edukacja"
            icon={faUserGraduate}
            edit={edit}
          />
        </div>
      </main>
    </MainTemplate>
  );
};
export default CvTemplate;
