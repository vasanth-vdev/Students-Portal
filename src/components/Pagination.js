import React from 'react';
import { useUI } from '../Context/UiContext';
import './css/Pagination.css';

const Pagination = ({ pageno, pagination, handlePagination }) => {
  const { getTheme } = useUI();
  return (
    <div>
      <div className='Pagination-Body'>
        {pageno.map((item, index) => (
          <button
            key={index}
            onClick={() => handlePagination(item)}
            style={
              pagination === item ? { background: getTheme().background } : null
            }
            className={pagination === item ? 'btn1 btnActive' : 'btn1'}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
