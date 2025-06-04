import EditForm from "./form-edit";
import ItemInfo from "./item-info";
import styles from "../smart-house/style.module.css";

const ItemContainer = (props) => {
return (
<div className={styles.conteiner_items}>
{props.device.map((item) => {
return (
<div>
{item.isEdit ? (
<EditForm
editValue={props.editValue}
setEditValue={props.setEditValue}
handleEdit={props.handleEdit}
id={item.id}
/>
) : (
<ItemInfo
item={item}
showEditDialog={props.showEditDialog}
handlePower={props.handlePower}
handleDelete={props.handleDelete}
/>
)}
</div>
);
})}
</div>
);
};

export default ItemContainer;
