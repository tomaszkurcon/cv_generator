import { useRouteError } from "react-router-dom";
import styles from "./404Page.module.css";
const PageNotFound = () => {
  const error = useRouteError();

  return (
    <div className={styles.error_page}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default PageNotFound;
