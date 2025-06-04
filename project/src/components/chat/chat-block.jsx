import styles from "../chat/style.module.css";

const ChatBlock = (props) => {

return (
<div className={styles.chat}>
<div>Чат</div>
{props.chatData.map((el, i) => {
return (
<div key={i}>
{i + 1}. {el}
</div>
);
})}
</div>
);
};

export default ChatBlock;
