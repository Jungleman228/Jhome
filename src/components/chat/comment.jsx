import styles from "../chat/style.module.css";
import { Link } from "react-router-dom";

const Comment = (props) => {
return (
<div className={styles.wrapper}>
<label>Введите сообщение...</label>
<input
value={props.inputValue}
onChange={(e) => props.setInputValue(e.target.value)}
/>
<button onClick={props.changeChat}>Отправить</button>
<button onClick={() => props.setChatData([])}>Удалить</button>

{props.showDialogReg && (
<div>
Вы не авторизовались перейдите по <Link to="/">ссылке</Link>
</div>
)}
</div>
);
};

export default Comment;
