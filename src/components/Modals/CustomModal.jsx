import { createPortal } from "react-dom";
import styles from "./CustomModal.module.css";
import Button from "../common/Button";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};
const ModalContent = ({ onConfirm, children }) => {
  return (
    <div className={styles.modal_container}>
      <div>{children}</div>
      <Button type="submit" onClick={onConfirm} />
    </div>
  );
};

const CustomModal = ({ onConfirm, children }) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalContent onConfirm={onConfirm} children={children} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default CustomModal;
