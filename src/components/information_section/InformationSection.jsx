import styles from "./InformationSection.module.css";
import Bar from "../common/Bar";
import Header from "../common/Header";
import { faCogs, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TextEditOnClick from "../common/TextEditOnClick";
import { useContext } from "react";
import { CvDataContext } from "../../context/CvDataContext";

const InformationSection = ({ edit }) => {
  const {name, setName} = useContext(CvDataContext);
  const skills_array = [
    { label: "HTML5", level: "90%" },
    { label: "CSS3", level: "80%" },
    { label: "Javascript", level: "40%" },
    { label: "React", level: "70%" },
    { label: "TypeScript", level: "30%" },
    { label: "Git", level: "20%" },
  ];
  return (
    <section className={styles.cv__information}>
      <div className={styles.cv__img}>
        <img
          src="https://images.pexels.com/photos/2880979/pexels-photo-2880979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="face"
          className={styles.cv__img__photo}
        />
      </div>
      <div className={styles.cv__information__content}>
        <div className={styles.cv__information__content__name}>
          {edit ? (
            <TextEditOnClick onSend={setName}>
              <h1>{name}</h1>
            </TextEditOnClick>
          ) : (
            <h1 className={styles.cv__information_my_name}>John Hustler</h1>
          )}
        </div>
        <div className={styles.cv_information_skills_contact_info}>
          <div className={styles.cv_information__details}>
            <Header icon={faCogs} size="xl">
              Umiejętności
            </Header>
            <div className={styles.cv_information__bars}>
              {skills_array.map((skill, index) => {
                return (
                  <Bar
                    key={index}
                    fullfilment_width={skill.level}
                    label={skill.label}
                  />
                );
              })}
            </div>
          </div>
          <div className="cv__information__contact">
            <Header
              icon={faAddressBook}
              size="xl"
              styles={{ marginLeft: "20px" }}
            >
              Dane osobowe
            </Header>

            <div className={styles.cv_information__contact__items__container}>
              <Header p_tag icon={faPhone}>
                123456789
              </Header>
              <Header p_tag icon={faEnvelope}>
                johnhustler@ww.pl
              </Header>
              <Header p_tag icon={faGithub}>
                <a href="https://github.com/tomaszkurcon">github.com</a>
              </Header>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InformationSection;
