import Button from "./Button";
import styles from "./Input.module.css";

const Input = ({
  label,
  name,
  icon,
  onEnter,
  value,
  onCancelButton,
  ...props
}) => {
  const padding = icon ? { paddingLeft: "30px" } : {};
  return (
    <div className={styles.input_container}>
      {icon && <div className={styles.icon_container}>{icon}</div>}
      {onCancelButton && (
        <div className={styles.cancel_button}>
          <Button type="cancel" onClick={() => onCancelButton(false)} />
        </div>
      )}
      <input
        className={styles.input}
        defaultValue={value}
        name={name}
        autoFocus={props.autofocus}
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
