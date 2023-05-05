import styles from "./TextArea.module.css";
const TextArea = ({name, label, defaultValue}) => {
  return <textarea name={name} placeholder={label} className={styles.textarea} defaultValue={defaultValue}/>;
};

export default TextArea;
