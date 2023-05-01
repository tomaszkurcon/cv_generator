import styles from "./TimeLineElement.module.css";
import Dot from "../common/Dot";
const TimeLineElement = ({ title, description, date, isFirst, ...props }) => {
  const padding = isFirst ? {} : {paddingTop:"40px"};
  return (
    <li className={styles.list_element}>
      <div className={styles.date}>
        <p style={padding}>
          {date}
        </p>
      </div>
      <div className={styles.timeline}></div>
      <div style={padding}>
        <div className={styles.list_header}>
          <Dot styles={{width:"9px", height:"9px"}} />
          <h3>{title}</h3>
        </div>
        <p style={{whiteSpace:"pre-line"}}>{description}</p>
      </div>
    </li>
  );
};
export default TimeLineElement;
