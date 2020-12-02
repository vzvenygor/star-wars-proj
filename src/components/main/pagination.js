import React from 'react';

const Pagination = ({ totalPage }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='pagination'>
            {pageNumbers.map(number =>(
                <li key={number} className='pageItem'>
                    <a href='!#' className='pageLink'>
                        {number}
                    </a>
                </li>
            ))}
        </nav>
    )
}

export default Pagination;