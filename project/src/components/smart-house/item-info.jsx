import ButtonGroup from "./button-group";
import styles from "../smart-house/style.module.css";

const ItemInfo = (props) => {
return (
<div className={styles.item} key={props.item.id}>
<div className={styles.name_item}>{props.item.name}</div>
<ButtonGroup
showEditDialog={props.showEditDialog}
handlePower={props.handlePower}
handleDelete={props.handleDelete}
item={props.item}
/>
</div>
);
};

export default ItemInfo;
