import styles from "./TimelineSection.module.css";
import Header from "../common/Header";
import TimeLineElement from "./TimeLineElement";
import Separator from "../common/Separator";
import Button from "../common/Button";
import { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
const TimelineSection = ({
  timeline_section_items,
  title,
  icon,
  separator,
  edit,
  onDeleteItem,
  onEditAddItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
              onDeleteItem={() => onDeleteItem(item.id)}
              onEditItem={(event) => onEditAddItem(event, item.id)}
            />
          );
        })}

        {edit && (
          <>
            <Button
              type="add"
              onClick={() => setIsOpen(true)}
              customStyles={{ marginLeft: "220px" }}
            />
            {isOpen && (
              <CustomModal
                onSubmit={(event) => onEditAddItem(event, null)}
                onCancel={() => setIsOpen(false)}
                withForm
              >
                <Input name="title"  label="Title"/>
                <TextArea name="description" label="Description"/>
                <TextArea name="date" label="Date"/>
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
