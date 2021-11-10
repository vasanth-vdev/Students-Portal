import React from 'react';
import Table from '../components/Table';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import SeatingArrangementData from '../data/SeatingArrangementData';
const SeatingArrangement = () => {
  return (
    <div>
      <PageHeader text='Seating Arrangement' />
      <PageContent>
        <Table data={SeatingArrangementData} />
      </PageContent>
    </div>
  );
};

export default SeatingArrangement;
