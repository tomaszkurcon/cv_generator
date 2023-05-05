import { createPortal } from "react-dom";
import styles from "./CustomModal.module.css";
import Button from "../common/Button";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};
const ModalContent = ({ children, withForm, onSubmit, onCancel }) => {
  const onSubmitHandler = (event) => {
    onSubmit(event);
    onCancel();
 
  }
  return (
    <>
      {withForm ? (
        <div className={styles.modal_container}>
          <form onSubmit={onSubmitHandler} className={styles.modal_form}>
            <div className={styles.form_inputs}>{children}</div>
            <Button type="submit" />
          </form>
        </div>
      ) : (
        <div className={styles.modal_container}>{children}</div>
      )}
    </>
  );
};

const CustomModal = ({ onCancel, onSubmit, withForm, children }) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalContent
          children={children}
          withForm={withForm}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default CustomModal;
