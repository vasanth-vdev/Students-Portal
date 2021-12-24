import React from 'react';
import './css/SideNameInput.css';

const SideNameInput = ({ type, name, rows, width }) => {
	return (
		<div className='SideNameInputGroup' style={{ width }}>
			<h1 className='SideName'>{name}</h1>
			{type === 'textarea' ? (
				<textarea
					className='SideNameTextArea'
					rows={rows}
					maxlength='450'></textarea>
			) : (
				<input type={type} className='SideNameInput' />
			)}
		</div>
	);
};

export default SideNameInput;
