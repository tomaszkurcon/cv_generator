import styles from "./MainTemplate.module.css";
const MainTemplate = ({children}) => {

    return <div className={styles.main_container}>
        {children}
    </div>
}

export default MainTemplate;