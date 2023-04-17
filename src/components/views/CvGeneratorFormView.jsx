import styles from "./CvGeneratorFormView.module.css";
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import MainTemplate from "../templates/MainTemplate";
import { FaBeer } from "react-icons/fa";
import Button from "../common/Button";
const CvGeneratorFormView = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainTemplate>
      <form className={styles.cv_form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          name="name_surname"
          label="Imię i nazwisko"
          icon={<FaBeer />}
        />
        <Input
          register={register}
          name="phone_number"
          label="Numer telefonu"
        />

        <Button type="submit"/>
      </form>
    </MainTemplate>
  );
};

export default CvGeneratorFormView;
