import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import CAMarksData from './../../data/Academic/CAMarksData';
import Table from './../../components/Table';
const camarksContainer = {
	marginTop: '5rem',
};
const CAMarks = () => {
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
			</PageContent>
		</div>
	);
};

export default CAMarks;
