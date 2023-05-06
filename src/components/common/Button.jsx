import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import {GrAdd} from "react-icons/gr";
const Button = ({ type, link, children, onClick, customStyles }) => {
  const customStyle = customStyles ? customStyles : {};
  const buttonSwitch = (type) => {
    switch (type) {
      case "submit":
        return (
          <button
            className={`${styles.button} ${styles.submitButton}`}
            type="submit"
            onClick={onClick}
            style={customStyles}
          >
            {children ? children : "Send"}
          </button>
        );
      case "link":
        return (
          <Link className={`${styles.button} ${styles.linkButton}`} to={link}>
            {children}{" "}
          </Link>
        );
      case "delete":
        return (
          <button
            className={`${styles.button} ${styles.deleteButton}`}
            onClick={onClick}
            style={customStyle}
          >
            {<AiFillDelete />}
          </button>
        );
      case "edit":
        return (
          <button
            className={`${styles.button} ${styles.editButton}`}
            onClick={onClick}
            style={customStyle}
          >
            {<AiFillEdit />}
          </button>
        );
      case "cancel":
        return (
          <button
            className={`${styles.button} ${styles.cancelButton}`}
            onClick={onClick}
            style={customStyles}
          >
            {<MdCancel />}
          </button>
        );
      case "add":
        return (
          <button
            className={`${styles.button} ${styles.addButton}`}
            onClick={onClick}
            style={customStyles}
          >
            {<GrAdd />}
          </button>
        )
    }
  };
  return <>{buttonSwitch(type)}</>;
};
export default Button;
