import React from 'react';
import Select from '../Select/Select';

import { usePagination } from './PaginationHooks';

import arrowLeft from '../../icons/arrowLeft.svg';
import arrowLeftHovered from '../../icons/arrowLeftHovered.svg';
import arrowRight from '../../icons/arrowRight.svg';
import arrowRightHovered from '../../icons/arrowRightHovered.svg';

import './Pagination.scss';

const Pagination = ({displayAmount, 
        totalItems, 
        totalPages, 
        selectedItem, 
        selectedPage, 
        selectItemsPerPage, 
        selectPage}) => {

    const { teamsAmountArr, pagesAmountArr, setPreviousPage, setNextPage, playersAmountArr } = 
    usePagination(totalPages, selectedPage, selectPage);

    return (
        <div className="pagination">
            <div className="pagination__items__block">
                <p className="pagination__text">Items per page</p>
                <Select selectFunc={selectItemsPerPage} 
                    options={displayAmount === '1-8' ? playersAmountArr : teamsAmountArr} 
                    selected={selectedItem} />
                <p className="pagination__text">Displaying {displayAmount} of {totalItems} items</p>
            </div>
            <div className="pagination__pages__block">
                <p className="pagination__text">1 of {totalPages} {totalPages === 1 ? 'page' : 'pages'}</p>
                <div className="pagination__pages__block__arrows">
                    <img src={selectedPage === 1 ? arrowLeft : arrowLeftHovered} 
                        alt="left arrow"
                        className="pagination__pages__block__arrows__arrow"
                        onClick={() => setPreviousPage()} />
                    <Select selectFunc={selectPage} options={pagesAmountArr} selected={selectedPage} />
                    <img src={selectedPage < totalPages ? arrowRightHovered : arrowRight}
                        alt='right arrow'
                        className="pagination__pages__block__arrows__arrow"
                        onClick={() => setNextPage()} />
                </div>
            </div>
        </div>
    );
};

export default Pagination;