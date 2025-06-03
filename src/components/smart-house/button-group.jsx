const ButtonGroup = (props) => {
    return (
    <div>
    <button onClick={() => props.showEditDialog(props.item.id)}>Ред</button>
    <button
    onClick={() => props.handlePower(props.item.id)}
    style={
    props.item.isPower ? { background: "red" } : { background: "#00ff00" }
    }
    >
    {props.item.isPower ? "Отключить" : "Включить"}
    </button>
    <button onClick={() => props.handleDelete(props.item.id)}>Удалить</button>
    </div>
    );
    };
    
    export default ButtonGroup;
    