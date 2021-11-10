import React from 'react';
import Link from 'next/link';

const BreadcrumbItem = ({title, href}) => {
    const activeClass = href == null ? " active" : "";
    const content = href != null ? <Link href={href}>{title}</Link> : title;
    
    return (
        <li className={`breadcrumb-item${activeClass}`}>{content}</li>
    );
}

export default BreadcrumbItem;