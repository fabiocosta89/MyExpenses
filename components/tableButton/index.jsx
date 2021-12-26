import ResponsiveHoverTableStyles from "./index.module.css";

const TableButton = ({title, href, icon, btnType}) => {
    return (
        <a className={`btn ${btnType} btn-sm ${ResponsiveHoverTableStyles.btnSpace}`} href={href}>
            <i className={icon}>
            </i>
            <> {title}</>
        </a>
    );
}

export default TableButton;