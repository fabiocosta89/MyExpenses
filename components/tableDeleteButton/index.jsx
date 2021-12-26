import TableButton from "../tableButton";

const TableDeleteButton = ({href}) => {
    const title = "Delete";
    const btnType = "btn-danger";
    const icon = "fas fa-trash";

    return (
        <TableButton 
            title={title} 
            btnType={btnType}
            icon={icon}
            href={href}
        />
    );
}

export default TableDeleteButton;