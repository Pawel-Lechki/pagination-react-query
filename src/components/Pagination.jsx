import React from 'react';
import {ITEM_PER_PAGE} from "../utils/constants.jsx";

const Pagination = ({currentPage, totalItems, onPageChange, isPreviousData}) => {
    const pageCount = Math.ceil(totalItems / ITEM_PER_PAGE);
    const handlePrevClick = () => onPageChange(currentPage - 1);
    const handleNextClick = () => onPageChange(currentPage + 1);

    return (
        <div className="btn-group">
            <button onClick={handlePrevClick} className="join-item btn" disabled={currentPage===1 || isPreviousData}>«</button>
            <button className="btn">Page {currentPage}</button>
            <button onClick={handleNextClick} className="join-item btn" disabled={currentPage === pageCount || isPreviousData}>»</button>
        </div>
    )
};

export default Pagination;