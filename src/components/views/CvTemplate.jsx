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

const CvTemplate = ({ edit, preview }) => {
  const { timelineElementState } = useContext(CvDataContext);
  const experience_items =
    edit || preview ? timelineElementState.experience_items : experienceItems;
  const education_items =
    edit || preview ? timelineElementState.education_items : educationItems;
  return (
    <MainTemplate>
      <div className={styles.cv_header}>
        {!edit && !preview && (
          <>
            <h1 className={styles.title}>
              The below CV is just a templete to demonstrate example of final CV
              generated on this Page
            </h1>
            <Button type="link" link={"/generate-cv"}>
              Create your CV
            </Button>
          </>
        )}
        {!preview && edit && (
          <>
            <Button type="link" link={"/preview"}>
              See preview
            </Button>
          </>
        )}
        {preview && !edit && (
          <>
            <Button type="link" link={"/generate-cv"}>
              Back to edititing
            </Button>
          </>
        )}
      </div>
      <Separator />

      <main
        className={styles.cv}
        style={!edit ? { backgroundColor: "#fbfbf8" } : {}}
      >
        <div>
          <InformationSection edit={edit} preview={preview} />
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
