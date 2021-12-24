import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import './../../assets/css/PostedLeavePrintout.css';
import SideNameInput from '../../components/SideNameInput';
import GreenButton from './../../components/GreenButton';

const PostedLeavePrintout = () => {
	return (
		<div>
			<PageHeader text='Posted Leave Printout' />
			<PageContent>
				<div className='PostedLeavePrintoutContainer'>
					<form className='PostedLeavePrintoutForm'>
						<SideNameInput type='text' name='Name' />
						<SideNameInput type='text' name='Roll No' />
						<SideNameInput type='date' name='From' />
						<SideNameInput type='date' name='To' />
						<SideNameInput
							type='textarea'
							name='Reason'
							rows='5'
							width='100%'
						/>
						<SideNameInput type='file' name='Document' width='100%' />
						<GreenButton marginCenter>Print</GreenButton>
					</form>
				</div>
			</PageContent>
		</div>
	);
};

export default PostedLeavePrintout;
