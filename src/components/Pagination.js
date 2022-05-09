import React, { useState } from 'react';
import './css/Pagination.css';

const Pagination = () => {
  const [pagination, setPagination] = useState(1);
  return (
    <div>
      {console.log(pagination)}
      <div className='Pagination-Body'>
        <button onClick={() => setPagination(1)} className='btnf'>
          1
        </button>
        <button onClick={() => setPagination(2)}>2</button>
        <button onClick={() => setPagination(3)}>3</button>
        <button onClick={() => setPagination(4)}>4</button>
        <button onClick={() => setPagination(5)}>5</button>
        <button onClick={() => setPagination(6)}>6</button>
        <button onClick={() => setPagination(7)}>7</button>
        <button onClick={() => setPagination(8)} className='btnl'>
          8
        </button>
      </div>
    </div>
  );
};

export default Pagination;
