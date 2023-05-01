import styles from "./CvTemplate.module.css";
import InformationSection from "../information_section/InformationSection";
import TimelineSection from "../timeline_section/TimelineSection";
import { faBriefcase, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import Separator from "../common/Separator";
import Button from "../common/Button";
import { useContext } from "react";
import { CvDataContext } from "../../context/CvDataContext";

const CvTemplate = ({ edit }) => {
  const location = useLocation();
  const data = location.state;
  const {education_items, experience_items} = useContext(CvDataContext);

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

      <main className={styles.cv} style={!edit ? {backgroundColor:"#fbfbf8"} : {}}>
        <div>
          <InformationSection edit={edit}/>
          <TimelineSection
            timeline_section_items={experience_items}
            title="Doświadczenie"
            icon={faBriefcase}
            separator
            edit={edit}
          />
          <TimelineSection
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
