import styles from "./Dot.module.css";
const Dot = (props) => {
  return <div className={styles.dot} style={props?.styles}></div>;
};
export default Dot;
