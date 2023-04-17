import styles from "./Button.module.css";
const Button = ({ type }) => {

  return (
    <>
      {type == "submit" ? (
        <button className={styles.submit_button} type="submit">
          Wyślij
        </button>
      ) : (
        <button></button>
      )}
    </>
  );
};
export default Button;
