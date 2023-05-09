import styles from "./TimelineSection.module.css";
import Header from "../common/Header";
import TimeLineElement from "./TimeLineElement";
import Separator from "../common/Separator";
import Button from "../common/Button";
import { useContext, useState } from "react";
import CustomModal from "../Modals/CustomModal";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import { CvDataContext } from "../../context/CvDataContext";
const TimelineSection = ({
  name,
  timeline_section_items,
  title,
  icon,
  separator,
  edit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatchTimelineElement } = useContext(CvDataContext);
  const section = name === "experience" ? "EXPERIENCE_ITEM" : "EDUCATION_ITEM";
  return (
    <section className={styles.cv_timeline_section}>
      <Header icon={icon} size="xl" styles={{ marginLeft: "220px" }}>
        {title}
      </Header>
      <ul className={styles.cv_timeline_section_list}>
        {timeline_section_items?.map((item, index) => {
          const isFirst = index === 0;
          return (
            <TimeLineElement
              key={index}
              {...item}
              isFirst={isFirst}
              edit={edit}
              onDeleteItem={
                () =>
                  dispatchTimelineElement({
                    type: `DELETE_${section}`,
                    index: item.id,
                  }) /*onDeleteItem(item.id)*/
              }
              onEditItem={(event) =>
                dispatchTimelineElement({
                  type: "EDIT_TIMELINE_ITEM",
                  timelineSection: name,
                  event: event,
                  id: item.id,
                })
              }
            />
          );
        })}

        {edit && (
          <>
            <Button
              type="add"
              onClick={() => setIsOpen(true)}
              customStyles={{ marginLeft: "220px", marginTop:"30px" }}
            />
            {isOpen && (
              <CustomModal
                onSubmit={(event) =>
                  dispatchTimelineElement({
                    type: "ADD_TIMELINE_ITEM",
                    event: event,
                    timelineSection: name,
                  })
                }
                onCancel={() => setIsOpen(false)}
                withForm
              >
                <Input name="title" label="Title" />
                <TextArea name="description" label="Description" />
                <TextArea name="date" label="Date" />
              </CustomModal>
            )}
          </>
        )}

        {separator && <Separator custom_styles={{ marginLeft: "220px" }} />}
      </ul>
    </section>
  );
};

export default TimelineSection;
