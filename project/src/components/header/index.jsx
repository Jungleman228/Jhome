import { Link } from "react-router-dom";
import styles from "../header/style.module.css";



const Header = () => {
return (
    
<div className={styles.container}>
<nav className={styles.navbar}>
<Link to="/" className={styles.linkMain}><p className={styles.text}>Jhome</p></Link>
<Link to="/"  className={styles.linkAu}></Link>
<Link to="/chat" className={styles.linkChat}></Link>
<Link to="/smart" className={styles.linkHome}></Link>
</nav>
</div>
);
};

export default Header;
