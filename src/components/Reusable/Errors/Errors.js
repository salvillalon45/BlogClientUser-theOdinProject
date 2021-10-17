import React from 'react';

function Errors({ errors }) {
	return (
		<div className='errorContainer text-center my-9'>
			<h3 className='font-lora font-bold text-2xl underline'>Errors</h3>
			<p>
				{errors.map((error) => {
					return <p>{error}</p>;
				})}
			</p>
		</div>
	);
}

export default Errors;
