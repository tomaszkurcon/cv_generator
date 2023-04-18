import styles from "./CvGeneratorFormView.module.css";
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import MainTemplate from "../templates/MainTemplate";
import { FaBeer } from "react-icons/fa";
import Button from "../common/Button";
import { useMutation } from "react-query";
import { postCvData } from "../../app/api/postCVdata";
import { useNavigate } from "react-router-dom";
const CvGeneratorFormView = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // IN FUTURE
  const mutation = useMutation(postCvData, {
    onSuccess: () => {
      console.log("done");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const submitHandler = (data) => {
    navigate("/", {state:data});
  };
  
  return (
    <MainTemplate>
      <form className={styles.cv_form} onSubmit={handleSubmit(mutation.mutate)}>
        <Input
          register={register}
          name="name_surname"
          label="Imię i nazwisko"
          icon={<FaBeer />}
        />
        <Input register={register} name="phone_number" label="Numer telefonu" />

        <Button type="submit" />
      </form>
    </MainTemplate>
  );
};

export default CvGeneratorFormView;
