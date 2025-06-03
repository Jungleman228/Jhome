import { useState } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
import styles from "../home/style.module.css"


const Home = () => {
const [user, setUser] = useLocalStorage("USER", "");
const [inputValue, setInputValue] = useState("");

return (
<div>
{user && (
<div  className={styles.Ex}>
<div>Здравствуйте,{user}!</div>
<button className={styles.btnEx} onClick={() => setUser("")}>Выйти</button>
</div>
)}


<div className={styles.Au}>
{!user && (
<div>
<p>Авторизация</p>
<label className={styles.text}>Логин</label>
<input className={styles.input} type="text" placeholder="Name"
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
/>
</div>
)}
{!user && (
<div>
<label className={styles.text}>Введите пароль</label>
<input className={styles.input} type="password" placeholder="Password"
/>
<div>
<button className={styles.btnSave} onClick={() => setUser(inputValue)}>Войти</button>
</div>
</div>
)}
</div>

</div>
);
};

export default Home;
