import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import CAMarksData from './../../data/Academic/CAMarksData';
import Table from './../../components/Table';
import Pagination from '../../components/Pagination';

const camarksContainer = {
  marginTop: '5rem',
};
const CAMarks = () => {
  const [pagination, setPagination] = useState(1);
  const pageno = [1, 2, 3, 4, 5, 6, 7, 8];
  const handlePagination = (value) => setPagination(value);
  return (
    <div>
      <PageHeader text='CA Marks' />
      <PageContent>
        <div style={camarksContainer}>
          <PageHeader
            text='Laboratory Marks'
            uppercase='uppercase'
            size='2.4'
          />
          {CAMarksData.map((item, index) => (
            <Table data={item.LaboratoryMarks} />
          ))}
        </div>
        <div style={camarksContainer}>
          <PageHeader text='CA Marks' uppercase='uppercase' size='2.4' />
          {CAMarksData.map((item, index) => (
            <Table data={item.CaMarks} />
          ))}
        </div>
        <div style={camarksContainer}>
          <PageHeader
            text='Project Review Marks'
            uppercase='uppercase'
            size='2.4'
          />
          {CAMarksData.map((item, index) => (
            <Table data={item.Others} />
          ))}
        </div>
        <Pagination
          pageno={pageno}
          pagination={pagination}
          handlePagination={handlePagination}
        />
      </PageContent>
    </div>
  );
};

export default CAMarks;
