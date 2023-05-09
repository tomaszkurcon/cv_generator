import styles from "./CvTemplate.module.css";
import InformationSection from "../information_section/InformationSection";
import TimelineSection from "../timeline_section/TimelineSection";
import { faBriefcase, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import MainTemplate from "../templates/MainTemplate";
import Separator from "../common/Separator";
import Button from "../common/Button";
import { useContext, useRef, useState } from "react";
import { CvDataContext } from "../../context/CvDataContext";
import { educationItems, experienceItems } from "../../mocked_data/data";
import ReactToPrint from "react-to-print";
import TextArea from "../common/TextArea";
import CustomModal from "../Modals/CustomModal";

const CvTemplate = ({ edit, preview }) => {
  const { timelineElementState, clause, setClause } = useContext(CvDataContext);
  const cvRef = useRef();
  const [isAddingClause, setIsAddingClause] = useState(false);
  const experience_items =
    edit || preview ? timelineElementState.experience_items : experienceItems;
  const education_items =
    edit || preview ? timelineElementState.education_items : educationItems;
  console.log(clause, "clause");
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
          <div className={styles.buttons_container}>
            <Button type="link" link={"/preview"}>
              See preview
            </Button>
            <Button type="link" link={"/"}>
              Main page
            </Button>
          </div>
        )}
        {preview && !edit && (
          <div className={styles.buttons_container}>
            <Button type="link" link={"/generate-cv"}>
              Back to editing
            </Button>
            <ReactToPrint
              trigger={() => {
                return (
                  <Button
                    type="submit"
                    link={"/generate-cv"}
                    customStyles={{ backgroundColor: "#0A9327" }}
                  >
                    Download PDF
                  </Button>
                );
              }}
              content={() => cvRef.current}
            />
          </div>
        )}
      </div>
      <Separator />

      <main
        className={styles.cv}
        style={!edit && !preview ? { backgroundColor: "#fbfbf8" } : {}}
        ref={cvRef}
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
          {edit && !clause && (
            <div className={styles.add_clause}>
              <h3>Add clause</h3>
              <Button type="add" onClick={() => setIsAddingClause(true)} />
            </div>
          )}
        </div>
        <div>
          <p>{clause}</p>
          {edit && clause && (
            <div className={styles.clause_buttons}>
              <Button
                type="edit"
                onClick={() => {
                  setIsAddingClause(true);
                }}
              />
              <Button type="delete" onClick={() => setClause("")} />
            </div>
          )}

          {isAddingClause && (
            <CustomModal
              onCancel={() => setIsAddingClause(false)}
              withForm
              onSubmit={(event) => setClause(event.target[0].value)}
            >
              <TextArea name="clause" label="Clause" defaultValue={clause} />
            </CustomModal>
          )}
        </div>
      </main>
    </MainTemplate>
  );
};
export default CvTemplate;
