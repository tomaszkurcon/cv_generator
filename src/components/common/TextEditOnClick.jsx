import { useState } from "react";
import Button from "./Button";
import styles from "./TextEditOnClick.module.css";
import Input from "./Input";
const TextEditOnClick = ({ children, onSend }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEnter = (event) => {
    onSend(event.target.value);

    setIsEditing(false);
  };

  return (
    <>
      {!isEditing ? (
        <div className={styles.container}>
          <Button type="edit" onClick={() => setIsEditing(true)} />
          {children}
        </div>
      ) : (
        <Input name="name" onEnter={handleEnter} />
      )}
    </>
  );
};

export default TextEditOnClick;
