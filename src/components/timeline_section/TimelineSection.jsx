import styles from "./TimelineSection.module.css";
import Header from "../common/Header";
import TimeLineElement from "./TimeLineElement";
import Separator from "../common/Separator";
const TimelineSection = ({timeline_section_items, title, icon, separator}) => {

  return (
    <section className={styles.cv_timeline_section}>
      <Header icon={icon} size="xl" styles={{ marginLeft: "220px" }}>
        {title}
      </Header>
      <ul className={styles.cv_timeline_section_list}>
        {timeline_section_items?.map((item, index) => {
          const isFirst = index===0;
          return <TimeLineElement key={index} {...item} isFirst={isFirst}/>;
        })}
         {separator && <Separator custom_styles={{marginLeft:"220px"}}/> }
      </ul>
      
    </section>
  );
};

export default TimelineSection;
