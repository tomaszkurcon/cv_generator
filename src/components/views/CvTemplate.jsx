import styles from "./CvTemplate.module.css";
import InformationSection from "../information_section/InformationSection";
import TimelineSection from "../timeline_section/TimelineSection";
import { faBriefcase, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const CvTemplate = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data, "data")
  const experience_items = [
    {
      title: "Staż w IT master",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima eligendi. Saepe iusto voluptatum ipsam excepturi adipisci asperiores nobis praesentium hic laboriosam pariatur iure dignissimos tempore ipsa, reiciendis blanditiis? Praesentium!`,
      date: `01.03.2025-
          30.09.2028`,
    },
  ];
  const education_items = [
    {
      title: "Uniwersytet Harvarda",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima eligendi. Saepe iusto voluptatum ipsam excepturi adipisci`,
      date: `01.03.2020-
          30.09.2025`,
    },
    {
      title: "DLD College London",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      date: `01.09.2016-
            30.06.2020`,
    },
  ];

  return (
    <main className={styles.cv}>
      <div>
        <InformationSection />
        <TimelineSection
          timeline_section_items={experience_items}
          title="Doświadczenie"
          icon={faBriefcase}
          separator
        />
        <TimelineSection
          timeline_section_items={education_items}
          title="Edukacja"
          icon={faUserGraduate}
        />
      </div>
    </main>
  );
};
export default CvTemplate;
