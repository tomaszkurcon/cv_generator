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
import { personalData, skillItems } from "../../mocked_data/data";
import ImageDropzoneWithPreview from "./ImageDropzoneWithPreview";

const InformationSection = ({ edit, preview }) => {
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [isAddingLink, setIsAddingLink] = useState(false);
  const [skillLevel, setSkillLevel] = useState(50);

  const { personalDataState, dispatchPersonalData } = useContext(CvDataContext);

  const { personal_data, skill_items: state_skill_items } = personalDataState;
  const { name, phoneNumber, email, githubLink, githubLinkName, photo } =
    edit || preview ? personal_data : personalData;
  const skill_items = edit || preview ? state_skill_items : skillItems;

  return (
    <section className={styles.cv__information}>
      <div className={styles.cv__img}>
        {!edit ? (
          <img
            src={photo}
            alt="face"
            className={`${styles.cv__img__photo} ${styles.cv__img__photo_border}`}
          />
        ) : (
          <ImageDropzoneWithPreview
            photoUrl={photo}
            onEditPhoto={(newPhotoUrl) => {
              dispatchPersonalData({
                type: "EDIT_PHOTO",
                newPhoto: newPhotoUrl,
              });
            }}
          />
        )}
      </div>
      <div className={styles.cv__information__content}>
        <div className={styles.cv__information__content__name}>
          {edit ? (
            <TextEditOnClick
              onSend={(name) =>
                dispatchPersonalData({ type: "EDIT_NAME", newName: name })
              }
              defaultValue={name}
            >
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
                          dispatchPersonalData({
                            type: "REMOVE_SKILL_ITEM",
                            index: skill.id,
                          });
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
                  onCancel={() => setIsAddingSkill(false)}
                  withForm
                  onSubmit={(event) =>
                    dispatchPersonalData({
                      type: "ADD_SKILL_ITEM",
                      event: event,
                    })
                  }
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
                    onSend={(phoneNumber) =>
                      dispatchPersonalData({
                        type: "EDIT_PHONE_NUMBER",
                        newPhoneNumber: phoneNumber,
                      })
                    }
                    defaultValue={phoneNumber}
                  >
                    <Header p_tag icon={faPhone}>
                      {phoneNumber}
                    </Header>
                  </TextEditOnClick>
                  <TextEditOnClick
                    onSend={(email) =>
                      dispatchPersonalData({
                        type: "EDIT_EMAIL",
                        newEmail: email,
                      })
                    }
                    defaultValue={email}
                  >
                    <Header p_tag icon={faEnvelope}>
                      {email}
                    </Header>
                  </TextEditOnClick>
                  {isAddingLink && (
                    <CustomModal
                      onCancel={() => setIsAddingLink(false)}
                      withForm
                      onSubmit={(event) =>
                        dispatchPersonalData({
                          type: "EDIT_GITHUB",
                          event: event,
                        })
                      }
                    >
                      <Input
                        type="text"
                        name="link"
                        label="Add full link here"
                        value={githubLink}
                      />

                      <Input
                        type="text"
                        name="name"
                        label="Add link name that will be displayed"
                        value={githubLinkName}
                      />
                    </CustomModal>
                  )}
                  <div className={styles.edit_github_container}>
                    <Button type="edit" onClick={() => setIsAddingLink(true)} />
                    <Header p_tag icon={faGithub}>
                      <a href={githubLink}>{githubLinkName}</a>
                    </Header>
                  </div>
                </>
              ) : (
                <>
                  {phoneNumber && (
                    <Header p_tag icon={faPhone}>
                      {phoneNumber}
                    </Header>
                  )}

                  {email && (
                    <Header p_tag icon={faEnvelope}>
                      {email}
                    </Header>
                  )}

                  {githubLinkName && (
                    <Header p_tag icon={faGithub}>
                      <a href={githubLink}>{githubLinkName}</a>
                    </Header>
                  )}
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

