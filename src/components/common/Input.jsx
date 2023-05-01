import styles from "./Input.module.css";

const Input = ({ label, name, icon, onEnter }) => {
  const padding = icon ? { paddingLeft: "30px" } : {};
  return (
    <div className={styles.input_container}>
      {icon && <div className={styles.icon_container}>{icon}</div>}
      <input
        className={styles.input}
        name={name}
        placeholder={label}
        style={padding}
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            onEnter(event);
          }
        }}
      />
    </div>
  );
};

export default Input;
