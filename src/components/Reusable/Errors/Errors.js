import React from 'react';

function Errors({ errors }) {
	return (
		<div className='errorContainer'>
			<p>Errors</p>
			<p>
				{errors.map((error) => {
					return <p>{error}</p>;
				})}
			</p>
		</div>
	);
}

export default Errors;
