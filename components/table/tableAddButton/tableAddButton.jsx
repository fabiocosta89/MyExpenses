import TableButton from "../tableButton";

const TableAddButton = ({href}) => {
    const title = "Add";
    const btnType = "btn-primary";
    const icon = "fas fa-plus";

    return (
        <TableButton 
            title={title} 
            btnType={btnType}
            icon={icon}
            href={href}
        />
    );
}

export default TableAddButton;