import TableButton from "../tableButton";

const TableEditButton = ({href}) => {
    const title = "Edit";
    const btnType = "btn-info";
    const icon = "fas fa-pencil-alt";

    return (
        <TableButton 
            title={title} 
            btnType={btnType}
            icon={icon}
            href={href}
        />
    );
}

export default TableEditButton;