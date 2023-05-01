import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const Button = ({ type, link, children, onClick}) => {
  const buttonSwitch = (type) => {
    switch (type) {
      case "submit":
        return (
          <button className={`${styles.button} ${styles.submitButton}`} type="submit" onClick={onClick}>
            {children ? children : "Send"}
          </button>
        );
      case "link":
        return <Link className={`${styles.button} ${styles.linkButton}`} to={link}>{children} </Link>;
      case "delete":
        return <button className={`${styles.button} ${styles.deleteButton}`} onClick={onClick}>{<AiFillDelete />}</button>
      case "edit":
        return <button className={`${styles.button} ${styles.editButton}`} onClick={onClick}>{<AiFillEdit/>}</button>
    }
  };
  return <>{buttonSwitch(type)}</>;
};
export default Button;
