import { useState } from "react";
import styles from "./TimeLineElement.module.css";
import Dot from "../common/Dot";
import Button from "../common/Button";
import CustomModal from "../Modals/CustomModal";
import TextArea from "../common/TextArea";
import Input from "../common/Input";

const TimeLineElement = ({
  title,
  description,
  date,
  isFirst,
  edit,
  onDeleteItem,
  onEditItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const padding = isFirst ? {} : { paddingTop: "40px" };
  return (
    <li className={styles.list_element}>
      <div className={styles.date}>
        <p style={padding}>{date}</p>
      </div>
      <div className={styles.timeline}></div>
      <div style={padding}>
        <div className={styles.list_header}>
          <Dot styles={{ width: "9px", height: "9px" }} />
          <h3>{title}</h3>
          {edit && (
            <>
              <Button type="edit" onClick={() => setIsOpen(true)} />
              <Button type="delete" onClick={onDeleteItem} />
              {isOpen && (
                <CustomModal
                  onSubmit={onEditItem}
                  onCancel={() => setIsOpen(false)}
                  withForm
                >
                  <Input name="title" label="Title" value={title}/>
                  <TextArea name="description" label="Description" defaultValue={description} />
                  <TextArea name="date" label="Date" defaultValue={date} />
                </CustomModal>
              )}
            </>
          )}
        </div>
        <p style={{ whiteSpace: "pre-line"}}>
          {description}
        </p>
      </div>
    </li>
  );
};
export default TimeLineElement;
