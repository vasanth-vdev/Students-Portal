import React, { useState } from 'react';
import './css/Pagination.css';

const Pagination = () => {
  const pageno = [1, 2, 3, 4, 5, 6, 7, 8];
  const [pagination, setPagination] = useState(1);
  return (
    <div>
      {console.log(pagination)}
      <div className='Pagination-Body'>
        {pageno.map((item, index) => (
          <button
            key={index}
            onClick={() => setPagination(item)}
            className={pagination === item ? 'btn1 btnActive' : 'btn1'}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
