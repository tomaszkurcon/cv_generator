import styles from "./Input.module.css";

const Input = ({ register, label, name, icon }) => {
    const padding = icon ? {paddingLeft:"30px"} : {};
  return (
    <div className={styles.input_container}>
      {icon && (
        <div className={styles.icon_container}> 
            {icon}
        </div>
      )}
      <input
        className={styles.input}
        {...register(name)}
        placeholder={label}
        style={padding}
      ></input>
      
    </div>
  );
};

export default Input;
