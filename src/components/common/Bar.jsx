import styles from "./Bar.module.css";
import Dot from "./Dot";

const Bar = ({ fullfilment_width, label, ...props }) => {
  return (
    <div>
      <div className={styles.bar_container}>
        <Dot />
        <p>{label}</p>
      </div>
      <div className={styles.bar}>
        <div
          className={styles.bar_fill}
          style={{ width: fullfilment_width }}
        ></div>
      </div>
    </div>
  );
};
export default Bar;
