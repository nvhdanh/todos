import React from 'react'
import classes from './Pagination.module.css'

const Pagination = (props) => {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    // console.log("Pagination rendering")
    const handlePageClick = (newPage) => {
        onPageChange(newPage);
    };

    let page = null

    if (_page) {
    	page =(
    		<div className={classes.Pagination}>
			<button
				disabled={_page <= 1}
				onClick={() => handlePageClick(_page - 1)}
			>
				Prev
			</button>
			<button
				disabled={_page >= Math.ceil(_totalRows / _limit)}
				onClick={() => handlePageClick(_page+1)}
			>
				Next
			</button>
		</div>
    	)
    }

    return page
};

export default React.memo(Pagination);