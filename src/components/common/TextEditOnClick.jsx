import { useState } from "react";
import Button from "./Button";
import styles from "./TextEditOnClick.module.css";
import Input from "./Input";

const TextEditOnClick = ({ children, defaultValue, onSend}) => {
 
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
        <div className={styles.marginBottom}>
          <Input
            name="name"
            onEnter={handleEnter}
            value={defaultValue}
            autofocus
            onCancelButton={setIsEditing}
          />
        </div>
      )}
    </>
  );
};

export default TextEditOnClick;
