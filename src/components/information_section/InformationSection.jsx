import styles from "./InformationSection.module.css";
import Bar from "../common/Bar";
import Header from "../common/Header";
import { faCogs, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TextEditOnClick from "../common/TextEditOnClick";
import { useContext, useState } from "react";
import { CvDataContext } from "../../context/CvDataContext";
import Button from "../common/Button";
import Input from "../common/Input";
import CustomModal from "../Modals/CustomModal";
import { personalData } from "../../mocked_data/data";

const InformationSection = ({ edit }) => {
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [skillLevel, setSkillLevel] = useState(50);
  const {
   personalDataState,
   dispatchPersonalData
  } = useContext(CvDataContext);

  const onCancel = () => {
    setIsAddingSkill(false);
  };
  const {personal_data, skill_items} = personalDataState;
  const {name, phoneNumber, email, github} = edit ? personal_data : personalData;
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
            <TextEditOnClick onSend={(name)=>dispatchPersonalData({type:"EDIT_NAME", newName:name})} defaultValue={name}>
              <h1>{name}</h1>
            </TextEditOnClick>
          ) : (
            <h1 className={styles.cv__information_my_name}>{name}</h1>
          )}
        </div>

        <div className={styles.cv_information_skills_contact_info}>
          <div className={styles.cv_information__details}>
            <Header icon={faCogs} size="xl">
              Umiejętności
            </Header>
            <div className={styles.cv_information__bars}>
              {skill_items.map((skill, index) => {
                return (
                  <div key={index} className={styles.bar_container}>
                    <Bar fullfilment_width={skill.level} label={skill.label} />
                    {edit && (
                      <Button
                        type="delete"
                        onClick={() => {
                          dispatchPersonalData({type:"REMOVE_SKILL_ITEM", index:skill.id})
                          setSkillLevel(50);
                        }}
                      />
                    )}
                  </div>
                );
              })}
              {edit && skill_items.length < 6 && (
                <div className={styles.edit_button_container}>
                  <Button type="edit" onClick={() => setIsAddingSkill(true)} />
                </div>
              )}
              {isAddingSkill && (
                <CustomModal
                  onCancel={onCancel}
                  withForm
                  onSubmit={(event) => dispatchPersonalData({type:"ADD_SKILL_ITEM", event:event})}
                >
                  <Input type="text" name="skill_name" label="Your skill" />

                  <input
                    type="range"
                    name="skill_level"
                    onChange={(event) => {
                      setSkillLevel(event.currentTarget.value);
                    }}
                  />
                  <p>{`${skillLevel}%`}</p>
                </CustomModal>
              )}
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
              {edit ? (
                <>
                  <TextEditOnClick
                    onSend={(phoneNumber)=>dispatchPersonalData({type:"EDIT_PHONE_NUMBER", newPhoneNumber:phoneNumber})}
                    defaultValue={phoneNumber}
                  >
                    <Header p_tag icon={faPhone}>
                      {phoneNumber}
                    </Header>
                  </TextEditOnClick>
                  <TextEditOnClick onSend={(email)=>dispatchPersonalData({type:"EDIT_EMAIL", newEmail:email})} defaultValue={email}>
                    <Header p_tag icon={faEnvelope}>
                      {email}
                    </Header>
                  </TextEditOnClick>
                  <TextEditOnClick onSend={(github)=>dispatchPersonalData({type:"EDIT_GITHUB", newGithub:github})} defaultValue={github}>
                    <Header p_tag icon={faGithub}>
                      <a href={github}>{github}</a>
                    </Header>
                  </TextEditOnClick>
                </>
              ) : (
                <>
                  <Header p_tag icon={faPhone}>
                    {phoneNumber}
                  </Header>

                  <Header p_tag icon={faEnvelope}>
                    {email}
                  </Header>

                  <Header p_tag icon={faGithub}>
                    <a href="https://github.com/tomaszkurcon">github.com</a>
                  </Header>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InformationSection;
