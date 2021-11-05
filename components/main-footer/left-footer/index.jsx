import React from 'react';

const LeftFooter = () => {
    const dateNow = new Date().getFullYear();

    return (
        <>
            <strong>
                Copyright &copy; {dateNow} <a href="https://fabiocosta.eu" target="_blank" rel="noreferrer">Fábio Costa</a>.
            </strong> All rights reserved.
        </>
    );
};

export default LeftFooter;