import styles from "./Separator.module.css";
const Separator = ({custom_styles}) => {
    return <div className={styles.separator} style={custom_styles}></div>
}
export default Separator;