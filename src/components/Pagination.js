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
            onClick={() => handlePagination(item.value || item)}
            style={
              pagination === item.value || pagination === item
                ? { background: getTheme().background }
                : null
            }
            className={
              pagination === item.value || pagination === item
                ? 'btn1 btnActive'
                : 'btn1'
            }>
            {item.text || item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
