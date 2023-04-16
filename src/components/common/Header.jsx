
import styles from "./Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = (props) => {
  const container_styles = props.p_tag ? {...props.styles} : {...props.styles, marginBottom:"20px"};
  return (
    <div className={styles.header_with_icon} style={container_styles}>
      <FontAwesomeIcon icon={props?.icon} size={props?.size} /> 
      {props?.p_tag ? <p className={styles.p_tag_styles}>{props?.children}</p> : <h3>{props?.children}</h3>}
      
    </div>
  );
};
export default Header;
