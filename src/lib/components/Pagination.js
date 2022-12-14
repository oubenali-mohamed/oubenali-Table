import React from "react";

const Pagination = ({
    totalEmployes,
    employesPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalEmployes / employesPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;