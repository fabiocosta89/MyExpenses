import Link from 'next/link';

import ResponsiveHoverTableStyles from "./index.module.css";

const TableButton = ({title, href, icon, btnType}) => {
    return (
        <Link href={href}>
            <a className={`btn ${btnType} btn-sm ${ResponsiveHoverTableStyles.btnSpace}`}>
                <i className={icon}>
                </i>
                <> {title}</>
            </a>
        </Link>
    );
}

export default TableButton;